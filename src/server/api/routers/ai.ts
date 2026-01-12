import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "~/env";

// Initialize Gemini (lazy init in procedure is safer but env is validated)
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const aiRouter = createTRPCRouter({
    analyzeCode: protectedProcedure
        .input(z.object({
            code: z.string(),
            language: z.string(),
            problemDescription: z.string(),
        }))
        .mutation(async ({ input }) => {
            try {
                const prompt = `
            Analyze this ${input.language} code for the following problem:
            "${input.problemDescription}"
            
            Code:
            ${input.code}
            
            Provide specific feedback, pointing out errors or inefficiencies.
            Return a JSON object with: { "status": "success", "feedback": ["point 1", "point 2"], "correctedCode": "optional string" }
            `;

                const result = await model.generateContent(prompt);
                const response = result.response;
                const text = response.text();

                // Basic parsing, assuming AI follows JSON instruction. 
                // Real implementation should be more robust (proactive JSON extraction).
                try {
                    // Find JSON block
                    const jsonMatch = text.match(/\{[\s\S]*\}/);
                    if (jsonMatch) {
                        return JSON.parse(jsonMatch[0]);
                    }
                    return { status: "success", feedback: [text] }; // Fallback
                } catch (e) {
                    return { status: "success", feedback: [text] };
                }
            } catch (error) {
                console.error("AI Error:", error);
                return { status: "error", message: "Failed to analyze code" };
            }
        }),

    getHint: protectedProcedure
        .input(z.object({
            problemId: z.string(),
            currentCode: z.string().optional()
        }))
        .mutation(async ({ ctx, input }) => {
            // Fetch problem details
            const problem = await ctx.db.problem.findUnique({ where: { id: input.problemId } });
            if (!problem) return { hint: "Problem not found" };

            const prompt = `
        Provide a helpful hint for solving: "${problem.title}".
        Description: ${problem.description}
        ${input.currentCode ? `User's current code context:\n${input.currentCode}` : ""}
        
        Don't solve it completely, just nudge the user in the right direction.
        `;

            const result = await model.generateContent(prompt);
            return { hint: result.response.text() };
        }),
});
