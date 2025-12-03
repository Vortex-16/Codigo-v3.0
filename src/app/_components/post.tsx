"use client";

import { api } from "~/trpc/react";

export function LatestPost() {
  const { data: userStats } = api.post.getUserStats.useQuery();

  return (
    <div className="w-full max-w-xs">
      {userStats ? (
        <div className="space-y-2">
          <p className="text-lg font-semibold">Your Stats</p>
          <div className="rounded-lg bg-white/10 p-4 text-sm">
            <p>Problems Solved: {userStats.problemsSolved}</p>
            <p>Current Streak: {userStats.streakCount} days</p>
            <p>Rank: {userStats.rank}</p>
            <p>Arena Rating: {userStats.arenaRating}</p>
            <p>
              Arena Record: {userStats.arenaWins}W - {userStats.arenaLosses}L
            </p>
          </div>
        </div>
      ) : (
        <p>Loading your stats...</p>
      )}
    </div>
  );
}
