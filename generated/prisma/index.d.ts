
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model SolvedProblem
 * 
 */
export type SolvedProblem = $Result.DefaultSelection<Prisma.$SolvedProblemPayload>
/**
 * Model ArenaMatch
 * 
 */
export type ArenaMatch = $Result.DefaultSelection<Prisma.$ArenaMatchPayload>
/**
 * Model ArenaQueue
 * 
 */
export type ArenaQueue = $Result.DefaultSelection<Prisma.$ArenaQueuePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solvedProblem`: Exposes CRUD operations for the **SolvedProblem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolvedProblems
    * const solvedProblems = await prisma.solvedProblem.findMany()
    * ```
    */
  get solvedProblem(): Prisma.SolvedProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arenaMatch`: Exposes CRUD operations for the **ArenaMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArenaMatches
    * const arenaMatches = await prisma.arenaMatch.findMany()
    * ```
    */
  get arenaMatch(): Prisma.ArenaMatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arenaQueue`: Exposes CRUD operations for the **ArenaQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArenaQueues
    * const arenaQueues = await prisma.arenaQueue.findMany()
    * ```
    */
  get arenaQueue(): Prisma.ArenaQueueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Problem: 'Problem',
    SolvedProblem: 'SolvedProblem',
    ArenaMatch: 'ArenaMatch',
    ArenaQueue: 'ArenaQueue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "problem" | "solvedProblem" | "arenaMatch" | "arenaQueue"
      txIsolationLevel: never
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProblemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProblemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      SolvedProblem: {
        payload: Prisma.$SolvedProblemPayload<ExtArgs>
        fields: Prisma.SolvedProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolvedProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolvedProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          findFirst: {
            args: Prisma.SolvedProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolvedProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          findMany: {
            args: Prisma.SolvedProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>[]
          }
          create: {
            args: Prisma.SolvedProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          createMany: {
            args: Prisma.SolvedProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SolvedProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          update: {
            args: Prisma.SolvedProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          deleteMany: {
            args: Prisma.SolvedProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolvedProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SolvedProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedProblemPayload>
          }
          aggregate: {
            args: Prisma.SolvedProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolvedProblem>
          }
          groupBy: {
            args: Prisma.SolvedProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolvedProblemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SolvedProblemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SolvedProblemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SolvedProblemCountArgs<ExtArgs>
            result: $Utils.Optional<SolvedProblemCountAggregateOutputType> | number
          }
        }
      }
      ArenaMatch: {
        payload: Prisma.$ArenaMatchPayload<ExtArgs>
        fields: Prisma.ArenaMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArenaMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArenaMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload>
          }
          findFirst: {
            args: Prisma.ArenaMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArenaMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload>
          }
          findMany: {
            args: Prisma.ArenaMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload>[]
          }
          create: {
            args: Prisma.ArenaMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload>
          }
          createMany: {
            args: Prisma.ArenaMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArenaMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload>
          }
          update: {
            args: Prisma.ArenaMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload>
          }
          deleteMany: {
            args: Prisma.ArenaMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArenaMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArenaMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaMatchPayload>
          }
          aggregate: {
            args: Prisma.ArenaMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArenaMatch>
          }
          groupBy: {
            args: Prisma.ArenaMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArenaMatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArenaMatchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArenaMatchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ArenaMatchCountArgs<ExtArgs>
            result: $Utils.Optional<ArenaMatchCountAggregateOutputType> | number
          }
        }
      }
      ArenaQueue: {
        payload: Prisma.$ArenaQueuePayload<ExtArgs>
        fields: Prisma.ArenaQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArenaQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArenaQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload>
          }
          findFirst: {
            args: Prisma.ArenaQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArenaQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload>
          }
          findMany: {
            args: Prisma.ArenaQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload>[]
          }
          create: {
            args: Prisma.ArenaQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload>
          }
          createMany: {
            args: Prisma.ArenaQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArenaQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload>
          }
          update: {
            args: Prisma.ArenaQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload>
          }
          deleteMany: {
            args: Prisma.ArenaQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArenaQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArenaQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArenaQueuePayload>
          }
          aggregate: {
            args: Prisma.ArenaQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArenaQueue>
          }
          groupBy: {
            args: Prisma.ArenaQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArenaQueueGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArenaQueueFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArenaQueueAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ArenaQueueCountArgs<ExtArgs>
            result: $Utils.Optional<ArenaQueueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    problem?: ProblemOmit
    solvedProblem?: SolvedProblemOmit
    arenaMatch?: ArenaMatchOmit
    arenaQueue?: ArenaQueueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    solvedProblems: number
    player1Matches: number
    player2Matches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    solvedProblems?: boolean | UserCountOutputTypeCountSolvedProblemsArgs
    player1Matches?: boolean | UserCountOutputTypeCountPlayer1MatchesArgs
    player2Matches?: boolean | UserCountOutputTypeCountPlayer2MatchesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayer1MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArenaMatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayer2MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArenaMatchWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    solvedBy: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solvedBy?: boolean | ProblemCountOutputTypeCountSolvedByArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedProblemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rank: number | null
    contestsCount: number | null
    streakCount: number | null
    problemsSolved: number | null
    easyCount: number | null
    mediumCount: number | null
    hardCount: number | null
    realWorldCount: number | null
    arenaWins: number | null
    arenaLosses: number | null
    arenaTotalMatches: number | null
    arenaRating: number | null
    arenaWinStreak: number | null
    arenaBestStreak: number | null
  }

  export type UserSumAggregateOutputType = {
    rank: number | null
    contestsCount: number | null
    streakCount: number | null
    problemsSolved: number | null
    easyCount: number | null
    mediumCount: number | null
    hardCount: number | null
    realWorldCount: number | null
    arenaWins: number | null
    arenaLosses: number | null
    arenaTotalMatches: number | null
    arenaRating: number | null
    arenaWinStreak: number | null
    arenaBestStreak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    rank: number | null
    contestsCount: number | null
    streakCount: number | null
    lastSolvedDate: Date | null
    problemsSolved: number | null
    easyCount: number | null
    mediumCount: number | null
    hardCount: number | null
    realWorldCount: number | null
    arenaWins: number | null
    arenaLosses: number | null
    arenaTotalMatches: number | null
    arenaRating: number | null
    arenaWinStreak: number | null
    arenaBestStreak: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    rank: number | null
    contestsCount: number | null
    streakCount: number | null
    lastSolvedDate: Date | null
    problemsSolved: number | null
    easyCount: number | null
    mediumCount: number | null
    hardCount: number | null
    realWorldCount: number | null
    arenaWins: number | null
    arenaLosses: number | null
    arenaTotalMatches: number | null
    arenaRating: number | null
    arenaWinStreak: number | null
    arenaBestStreak: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    rank: number
    contestsCount: number
    streakCount: number
    lastSolvedDate: number
    problemsSolved: number
    easyCount: number
    mediumCount: number
    hardCount: number
    realWorldCount: number
    arenaWins: number
    arenaLosses: number
    arenaTotalMatches: number
    arenaRating: number
    arenaWinStreak: number
    arenaBestStreak: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rank?: true
    contestsCount?: true
    streakCount?: true
    problemsSolved?: true
    easyCount?: true
    mediumCount?: true
    hardCount?: true
    realWorldCount?: true
    arenaWins?: true
    arenaLosses?: true
    arenaTotalMatches?: true
    arenaRating?: true
    arenaWinStreak?: true
    arenaBestStreak?: true
  }

  export type UserSumAggregateInputType = {
    rank?: true
    contestsCount?: true
    streakCount?: true
    problemsSolved?: true
    easyCount?: true
    mediumCount?: true
    hardCount?: true
    realWorldCount?: true
    arenaWins?: true
    arenaLosses?: true
    arenaTotalMatches?: true
    arenaRating?: true
    arenaWinStreak?: true
    arenaBestStreak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    rank?: true
    contestsCount?: true
    streakCount?: true
    lastSolvedDate?: true
    problemsSolved?: true
    easyCount?: true
    mediumCount?: true
    hardCount?: true
    realWorldCount?: true
    arenaWins?: true
    arenaLosses?: true
    arenaTotalMatches?: true
    arenaRating?: true
    arenaWinStreak?: true
    arenaBestStreak?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    rank?: true
    contestsCount?: true
    streakCount?: true
    lastSolvedDate?: true
    problemsSolved?: true
    easyCount?: true
    mediumCount?: true
    hardCount?: true
    realWorldCount?: true
    arenaWins?: true
    arenaLosses?: true
    arenaTotalMatches?: true
    arenaRating?: true
    arenaWinStreak?: true
    arenaBestStreak?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    rank?: true
    contestsCount?: true
    streakCount?: true
    lastSolvedDate?: true
    problemsSolved?: true
    easyCount?: true
    mediumCount?: true
    hardCount?: true
    realWorldCount?: true
    arenaWins?: true
    arenaLosses?: true
    arenaTotalMatches?: true
    arenaRating?: true
    arenaWinStreak?: true
    arenaBestStreak?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    rank: number
    contestsCount: number
    streakCount: number
    lastSolvedDate: Date | null
    problemsSolved: number
    easyCount: number
    mediumCount: number
    hardCount: number
    realWorldCount: number
    arenaWins: number
    arenaLosses: number
    arenaTotalMatches: number
    arenaRating: number
    arenaWinStreak: number
    arenaBestStreak: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    rank?: boolean
    contestsCount?: boolean
    streakCount?: boolean
    lastSolvedDate?: boolean
    problemsSolved?: boolean
    easyCount?: boolean
    mediumCount?: boolean
    hardCount?: boolean
    realWorldCount?: boolean
    arenaWins?: boolean
    arenaLosses?: boolean
    arenaTotalMatches?: boolean
    arenaRating?: boolean
    arenaWinStreak?: boolean
    arenaBestStreak?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    player1Matches?: boolean | User$player1MatchesArgs<ExtArgs>
    player2Matches?: boolean | User$player2MatchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    rank?: boolean
    contestsCount?: boolean
    streakCount?: boolean
    lastSolvedDate?: boolean
    problemsSolved?: boolean
    easyCount?: boolean
    mediumCount?: boolean
    hardCount?: boolean
    realWorldCount?: boolean
    arenaWins?: boolean
    arenaLosses?: boolean
    arenaTotalMatches?: boolean
    arenaRating?: boolean
    arenaWinStreak?: boolean
    arenaBestStreak?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "rank" | "contestsCount" | "streakCount" | "lastSolvedDate" | "problemsSolved" | "easyCount" | "mediumCount" | "hardCount" | "realWorldCount" | "arenaWins" | "arenaLosses" | "arenaTotalMatches" | "arenaRating" | "arenaWinStreak" | "arenaBestStreak", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    player1Matches?: boolean | User$player1MatchesArgs<ExtArgs>
    player2Matches?: boolean | User$player2MatchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      solvedProblems: Prisma.$SolvedProblemPayload<ExtArgs>[]
      player1Matches: Prisma.$ArenaMatchPayload<ExtArgs>[]
      player2Matches: Prisma.$ArenaMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      rank: number
      contestsCount: number
      streakCount: number
      lastSolvedDate: Date | null
      problemsSolved: number
      easyCount: number
      mediumCount: number
      hardCount: number
      realWorldCount: number
      arenaWins: number
      arenaLosses: number
      arenaTotalMatches: number
      arenaRating: number
      arenaWinStreak: number
      arenaBestStreak: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedProblems<T extends User$solvedProblemsArgs<ExtArgs> = {}>(args?: Subset<T, User$solvedProblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    player1Matches<T extends User$player1MatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$player1MatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    player2Matches<T extends User$player2MatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$player2MatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly rank: FieldRef<"User", 'Int'>
    readonly contestsCount: FieldRef<"User", 'Int'>
    readonly streakCount: FieldRef<"User", 'Int'>
    readonly lastSolvedDate: FieldRef<"User", 'DateTime'>
    readonly problemsSolved: FieldRef<"User", 'Int'>
    readonly easyCount: FieldRef<"User", 'Int'>
    readonly mediumCount: FieldRef<"User", 'Int'>
    readonly hardCount: FieldRef<"User", 'Int'>
    readonly realWorldCount: FieldRef<"User", 'Int'>
    readonly arenaWins: FieldRef<"User", 'Int'>
    readonly arenaLosses: FieldRef<"User", 'Int'>
    readonly arenaTotalMatches: FieldRef<"User", 'Int'>
    readonly arenaRating: FieldRef<"User", 'Int'>
    readonly arenaWinStreak: FieldRef<"User", 'Int'>
    readonly arenaBestStreak: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.solvedProblems
   */
  export type User$solvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    where?: SolvedProblemWhereInput
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    cursor?: SolvedProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * User.player1Matches
   */
  export type User$player1MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    where?: ArenaMatchWhereInput
    orderBy?: ArenaMatchOrderByWithRelationInput | ArenaMatchOrderByWithRelationInput[]
    cursor?: ArenaMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArenaMatchScalarFieldEnum | ArenaMatchScalarFieldEnum[]
  }

  /**
   * User.player2Matches
   */
  export type User$player2MatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    where?: ArenaMatchWhereInput
    orderBy?: ArenaMatchOrderByWithRelationInput | ArenaMatchOrderByWithRelationInput[]
    cursor?: ArenaMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArenaMatchScalarFieldEnum | ArenaMatchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * @param {VerificationTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VerificationToken.
     * @param {VerificationTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken findRaw
   */
  export type VerificationTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken aggregateRaw
   */
  export type VerificationTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    timeLimit: number | null
  }

  export type ProblemSumAggregateOutputType = {
    timeLimit: number | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    problemId: string | null
    title: string | null
    description: string | null
    difficulty: string | null
    category: string | null
    timeLimit: number | null
    solution: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    problemId: string | null
    title: string | null
    description: string | null
    difficulty: string | null
    category: string | null
    timeLimit: number | null
    solution: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    problemId: number
    title: number
    description: number
    difficulty: number
    category: number
    timeLimit: number
    testCases: number
    starterCode: number
    solution: number
    hints: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemAvgAggregateInputType = {
    timeLimit?: true
  }

  export type ProblemSumAggregateInputType = {
    timeLimit?: true
  }

  export type ProblemMinAggregateInputType = {
    id?: true
    problemId?: true
    title?: true
    description?: true
    difficulty?: true
    category?: true
    timeLimit?: true
    solution?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    problemId?: true
    title?: true
    description?: true
    difficulty?: true
    category?: true
    timeLimit?: true
    solution?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    problemId?: true
    title?: true
    description?: true
    difficulty?: true
    category?: true
    timeLimit?: true
    testCases?: true
    starterCode?: true
    solution?: true
    hints?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _avg?: ProblemAvgAggregateInputType
    _sum?: ProblemSumAggregateInputType
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    problemId: string
    title: string
    description: string
    difficulty: string
    category: string
    timeLimit: number
    testCases: JsonValue
    starterCode: JsonValue
    solution: string | null
    hints: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    category?: boolean
    timeLimit?: boolean
    testCases?: boolean
    starterCode?: boolean
    solution?: boolean
    hints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>



  export type ProblemSelectScalar = {
    id?: boolean
    problemId?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    category?: boolean
    timeLimit?: boolean
    testCases?: boolean
    starterCode?: boolean
    solution?: boolean
    hints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemId" | "title" | "description" | "difficulty" | "category" | "timeLimit" | "testCases" | "starterCode" | "solution" | "hints" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      solvedBy: Prisma.$SolvedProblemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      problemId: string
      title: string
      description: string
      difficulty: string
      category: string
      timeLimit: number
      testCases: Prisma.JsonValue
      starterCode: Prisma.JsonValue
      solution: string | null
      hints: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * @param {ProblemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const problem = await prisma.problem.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProblemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Problem.
     * @param {ProblemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const problem = await prisma.problem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProblemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solvedBy<T extends Problem$solvedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly problemId: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'String'>
    readonly category: FieldRef<"Problem", 'String'>
    readonly timeLimit: FieldRef<"Problem", 'Int'>
    readonly testCases: FieldRef<"Problem", 'Json'>
    readonly starterCode: FieldRef<"Problem", 'Json'>
    readonly solution: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem findRaw
   */
  export type ProblemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Problem aggregateRaw
   */
  export type ProblemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Problem.solvedBy
   */
  export type Problem$solvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    where?: SolvedProblemWhereInput
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    cursor?: SolvedProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model SolvedProblem
   */

  export type AggregateSolvedProblem = {
    _count: SolvedProblemCountAggregateOutputType | null
    _min: SolvedProblemMinAggregateOutputType | null
    _max: SolvedProblemMaxAggregateOutputType | null
  }

  export type SolvedProblemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    difficulty: string | null
    language: string | null
    code: string | null
    solvedAt: Date | null
  }

  export type SolvedProblemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    difficulty: string | null
    language: string | null
    code: string | null
    solvedAt: Date | null
  }

  export type SolvedProblemCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    difficulty: number
    language: number
    code: number
    solvedAt: number
    _all: number
  }


  export type SolvedProblemMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    difficulty?: true
    language?: true
    code?: true
    solvedAt?: true
  }

  export type SolvedProblemMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    difficulty?: true
    language?: true
    code?: true
    solvedAt?: true
  }

  export type SolvedProblemCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    difficulty?: true
    language?: true
    code?: true
    solvedAt?: true
    _all?: true
  }

  export type SolvedProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedProblem to aggregate.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolvedProblems
    **/
    _count?: true | SolvedProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolvedProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolvedProblemMaxAggregateInputType
  }

  export type GetSolvedProblemAggregateType<T extends SolvedProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateSolvedProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolvedProblem[P]>
      : GetScalarType<T[P], AggregateSolvedProblem[P]>
  }




  export type SolvedProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedProblemWhereInput
    orderBy?: SolvedProblemOrderByWithAggregationInput | SolvedProblemOrderByWithAggregationInput[]
    by: SolvedProblemScalarFieldEnum[] | SolvedProblemScalarFieldEnum
    having?: SolvedProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolvedProblemCountAggregateInputType | true
    _min?: SolvedProblemMinAggregateInputType
    _max?: SolvedProblemMaxAggregateInputType
  }

  export type SolvedProblemGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    difficulty: string
    language: string
    code: string
    solvedAt: Date
    _count: SolvedProblemCountAggregateOutputType | null
    _min: SolvedProblemMinAggregateOutputType | null
    _max: SolvedProblemMaxAggregateOutputType | null
  }

  type GetSolvedProblemGroupByPayload<T extends SolvedProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolvedProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolvedProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolvedProblemGroupByOutputType[P]>
            : GetScalarType<T[P], SolvedProblemGroupByOutputType[P]>
        }
      >
    >


  export type SolvedProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    difficulty?: boolean
    language?: boolean
    code?: boolean
    solvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solvedProblem"]>



  export type SolvedProblemSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    difficulty?: boolean
    language?: boolean
    code?: boolean
    solvedAt?: boolean
  }

  export type SolvedProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "difficulty" | "language" | "code" | "solvedAt", ExtArgs["result"]["solvedProblem"]>
  export type SolvedProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SolvedProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolvedProblem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      difficulty: string
      language: string
      code: string
      solvedAt: Date
    }, ExtArgs["result"]["solvedProblem"]>
    composites: {}
  }

  type SolvedProblemGetPayload<S extends boolean | null | undefined | SolvedProblemDefaultArgs> = $Result.GetResult<Prisma.$SolvedProblemPayload, S>

  type SolvedProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolvedProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolvedProblemCountAggregateInputType | true
    }

  export interface SolvedProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolvedProblem'], meta: { name: 'SolvedProblem' } }
    /**
     * Find zero or one SolvedProblem that matches the filter.
     * @param {SolvedProblemFindUniqueArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolvedProblemFindUniqueArgs>(args: SelectSubset<T, SolvedProblemFindUniqueArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolvedProblem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolvedProblemFindUniqueOrThrowArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolvedProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, SolvedProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedProblem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemFindFirstArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolvedProblemFindFirstArgs>(args?: SelectSubset<T, SolvedProblemFindFirstArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolvedProblem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemFindFirstOrThrowArgs} args - Arguments to find a SolvedProblem
     * @example
     * // Get one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolvedProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, SolvedProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolvedProblems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolvedProblems
     * const solvedProblems = await prisma.solvedProblem.findMany()
     * 
     * // Get first 10 SolvedProblems
     * const solvedProblems = await prisma.solvedProblem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solvedProblemWithIdOnly = await prisma.solvedProblem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolvedProblemFindManyArgs>(args?: SelectSubset<T, SolvedProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolvedProblem.
     * @param {SolvedProblemCreateArgs} args - Arguments to create a SolvedProblem.
     * @example
     * // Create one SolvedProblem
     * const SolvedProblem = await prisma.solvedProblem.create({
     *   data: {
     *     // ... data to create a SolvedProblem
     *   }
     * })
     * 
     */
    create<T extends SolvedProblemCreateArgs>(args: SelectSubset<T, SolvedProblemCreateArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolvedProblems.
     * @param {SolvedProblemCreateManyArgs} args - Arguments to create many SolvedProblems.
     * @example
     * // Create many SolvedProblems
     * const solvedProblem = await prisma.solvedProblem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolvedProblemCreateManyArgs>(args?: SelectSubset<T, SolvedProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SolvedProblem.
     * @param {SolvedProblemDeleteArgs} args - Arguments to delete one SolvedProblem.
     * @example
     * // Delete one SolvedProblem
     * const SolvedProblem = await prisma.solvedProblem.delete({
     *   where: {
     *     // ... filter to delete one SolvedProblem
     *   }
     * })
     * 
     */
    delete<T extends SolvedProblemDeleteArgs>(args: SelectSubset<T, SolvedProblemDeleteArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolvedProblem.
     * @param {SolvedProblemUpdateArgs} args - Arguments to update one SolvedProblem.
     * @example
     * // Update one SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolvedProblemUpdateArgs>(args: SelectSubset<T, SolvedProblemUpdateArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolvedProblems.
     * @param {SolvedProblemDeleteManyArgs} args - Arguments to filter SolvedProblems to delete.
     * @example
     * // Delete a few SolvedProblems
     * const { count } = await prisma.solvedProblem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolvedProblemDeleteManyArgs>(args?: SelectSubset<T, SolvedProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolvedProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolvedProblems
     * const solvedProblem = await prisma.solvedProblem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolvedProblemUpdateManyArgs>(args: SelectSubset<T, SolvedProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SolvedProblem.
     * @param {SolvedProblemUpsertArgs} args - Arguments to update or create a SolvedProblem.
     * @example
     * // Update or create a SolvedProblem
     * const solvedProblem = await prisma.solvedProblem.upsert({
     *   create: {
     *     // ... data to create a SolvedProblem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolvedProblem we want to update
     *   }
     * })
     */
    upsert<T extends SolvedProblemUpsertArgs>(args: SelectSubset<T, SolvedProblemUpsertArgs<ExtArgs>>): Prisma__SolvedProblemClient<$Result.GetResult<Prisma.$SolvedProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolvedProblems that matches the filter.
     * @param {SolvedProblemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const solvedProblem = await prisma.solvedProblem.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SolvedProblemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SolvedProblem.
     * @param {SolvedProblemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const solvedProblem = await prisma.solvedProblem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SolvedProblemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SolvedProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemCountArgs} args - Arguments to filter SolvedProblems to count.
     * @example
     * // Count the number of SolvedProblems
     * const count = await prisma.solvedProblem.count({
     *   where: {
     *     // ... the filter for the SolvedProblems we want to count
     *   }
     * })
    **/
    count<T extends SolvedProblemCountArgs>(
      args?: Subset<T, SolvedProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolvedProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolvedProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolvedProblemAggregateArgs>(args: Subset<T, SolvedProblemAggregateArgs>): Prisma.PrismaPromise<GetSolvedProblemAggregateType<T>>

    /**
     * Group by SolvedProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolvedProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolvedProblemGroupByArgs['orderBy'] }
        : { orderBy?: SolvedProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolvedProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolvedProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolvedProblem model
   */
  readonly fields: SolvedProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolvedProblem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolvedProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolvedProblem model
   */
  interface SolvedProblemFieldRefs {
    readonly id: FieldRef<"SolvedProblem", 'String'>
    readonly userId: FieldRef<"SolvedProblem", 'String'>
    readonly problemId: FieldRef<"SolvedProblem", 'String'>
    readonly difficulty: FieldRef<"SolvedProblem", 'String'>
    readonly language: FieldRef<"SolvedProblem", 'String'>
    readonly code: FieldRef<"SolvedProblem", 'String'>
    readonly solvedAt: FieldRef<"SolvedProblem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolvedProblem findUnique
   */
  export type SolvedProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem findUniqueOrThrow
   */
  export type SolvedProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem findFirst
   */
  export type SolvedProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedProblems.
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedProblems.
     */
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * SolvedProblem findFirstOrThrow
   */
  export type SolvedProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblem to fetch.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolvedProblems.
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolvedProblems.
     */
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * SolvedProblem findMany
   */
  export type SolvedProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter, which SolvedProblems to fetch.
     */
    where?: SolvedProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolvedProblems to fetch.
     */
    orderBy?: SolvedProblemOrderByWithRelationInput | SolvedProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolvedProblems.
     */
    cursor?: SolvedProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolvedProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolvedProblems.
     */
    skip?: number
    distinct?: SolvedProblemScalarFieldEnum | SolvedProblemScalarFieldEnum[]
  }

  /**
   * SolvedProblem create
   */
  export type SolvedProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a SolvedProblem.
     */
    data: XOR<SolvedProblemCreateInput, SolvedProblemUncheckedCreateInput>
  }

  /**
   * SolvedProblem createMany
   */
  export type SolvedProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolvedProblems.
     */
    data: SolvedProblemCreateManyInput | SolvedProblemCreateManyInput[]
  }

  /**
   * SolvedProblem update
   */
  export type SolvedProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a SolvedProblem.
     */
    data: XOR<SolvedProblemUpdateInput, SolvedProblemUncheckedUpdateInput>
    /**
     * Choose, which SolvedProblem to update.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem updateMany
   */
  export type SolvedProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolvedProblems.
     */
    data: XOR<SolvedProblemUpdateManyMutationInput, SolvedProblemUncheckedUpdateManyInput>
    /**
     * Filter which SolvedProblems to update
     */
    where?: SolvedProblemWhereInput
    /**
     * Limit how many SolvedProblems to update.
     */
    limit?: number
  }

  /**
   * SolvedProblem upsert
   */
  export type SolvedProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the SolvedProblem to update in case it exists.
     */
    where: SolvedProblemWhereUniqueInput
    /**
     * In case the SolvedProblem found by the `where` argument doesn't exist, create a new SolvedProblem with this data.
     */
    create: XOR<SolvedProblemCreateInput, SolvedProblemUncheckedCreateInput>
    /**
     * In case the SolvedProblem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolvedProblemUpdateInput, SolvedProblemUncheckedUpdateInput>
  }

  /**
   * SolvedProblem delete
   */
  export type SolvedProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
    /**
     * Filter which SolvedProblem to delete.
     */
    where: SolvedProblemWhereUniqueInput
  }

  /**
   * SolvedProblem deleteMany
   */
  export type SolvedProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolvedProblems to delete
     */
    where?: SolvedProblemWhereInput
    /**
     * Limit how many SolvedProblems to delete.
     */
    limit?: number
  }

  /**
   * SolvedProblem findRaw
   */
  export type SolvedProblemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SolvedProblem aggregateRaw
   */
  export type SolvedProblemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SolvedProblem without action
   */
  export type SolvedProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolvedProblem
     */
    select?: SolvedProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolvedProblem
     */
    omit?: SolvedProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedProblemInclude<ExtArgs> | null
  }


  /**
   * Model ArenaMatch
   */

  export type AggregateArenaMatch = {
    _count: ArenaMatchCountAggregateOutputType | null
    _avg: ArenaMatchAvgAggregateOutputType | null
    _sum: ArenaMatchSumAggregateOutputType | null
    _min: ArenaMatchMinAggregateOutputType | null
    _max: ArenaMatchMaxAggregateOutputType | null
  }

  export type ArenaMatchAvgAggregateOutputType = {
    player1Score: number | null
    player2Score: number | null
    player1Progress: number | null
    player2Progress: number | null
  }

  export type ArenaMatchSumAggregateOutputType = {
    player1Score: number | null
    player2Score: number | null
    player1Progress: number | null
    player2Progress: number | null
  }

  export type ArenaMatchMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    player1Id: string | null
    player2Id: string | null
    difficulty: string | null
    status: string | null
    winnerId: string | null
    player1Score: number | null
    player2Score: number | null
    player1Progress: number | null
    player2Progress: number | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ArenaMatchMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    player1Id: string | null
    player2Id: string | null
    difficulty: string | null
    status: string | null
    winnerId: string | null
    player1Score: number | null
    player2Score: number | null
    player1Progress: number | null
    player2Progress: number | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ArenaMatchCountAggregateOutputType = {
    id: number
    matchId: number
    player1Id: number
    player2Id: number
    difficulty: number
    status: number
    winnerId: number
    player1Score: number
    player2Score: number
    player1Progress: number
    player2Progress: number
    problems: number
    results: number
    createdAt: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type ArenaMatchAvgAggregateInputType = {
    player1Score?: true
    player2Score?: true
    player1Progress?: true
    player2Progress?: true
  }

  export type ArenaMatchSumAggregateInputType = {
    player1Score?: true
    player2Score?: true
    player1Progress?: true
    player2Progress?: true
  }

  export type ArenaMatchMinAggregateInputType = {
    id?: true
    matchId?: true
    player1Id?: true
    player2Id?: true
    difficulty?: true
    status?: true
    winnerId?: true
    player1Score?: true
    player2Score?: true
    player1Progress?: true
    player2Progress?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type ArenaMatchMaxAggregateInputType = {
    id?: true
    matchId?: true
    player1Id?: true
    player2Id?: true
    difficulty?: true
    status?: true
    winnerId?: true
    player1Score?: true
    player2Score?: true
    player1Progress?: true
    player2Progress?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type ArenaMatchCountAggregateInputType = {
    id?: true
    matchId?: true
    player1Id?: true
    player2Id?: true
    difficulty?: true
    status?: true
    winnerId?: true
    player1Score?: true
    player2Score?: true
    player1Progress?: true
    player2Progress?: true
    problems?: true
    results?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type ArenaMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArenaMatch to aggregate.
     */
    where?: ArenaMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaMatches to fetch.
     */
    orderBy?: ArenaMatchOrderByWithRelationInput | ArenaMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArenaMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArenaMatches
    **/
    _count?: true | ArenaMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArenaMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArenaMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArenaMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArenaMatchMaxAggregateInputType
  }

  export type GetArenaMatchAggregateType<T extends ArenaMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateArenaMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArenaMatch[P]>
      : GetScalarType<T[P], AggregateArenaMatch[P]>
  }




  export type ArenaMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArenaMatchWhereInput
    orderBy?: ArenaMatchOrderByWithAggregationInput | ArenaMatchOrderByWithAggregationInput[]
    by: ArenaMatchScalarFieldEnum[] | ArenaMatchScalarFieldEnum
    having?: ArenaMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArenaMatchCountAggregateInputType | true
    _avg?: ArenaMatchAvgAggregateInputType
    _sum?: ArenaMatchSumAggregateInputType
    _min?: ArenaMatchMinAggregateInputType
    _max?: ArenaMatchMaxAggregateInputType
  }

  export type ArenaMatchGroupByOutputType = {
    id: string
    matchId: string
    player1Id: string
    player2Id: string
    difficulty: string
    status: string
    winnerId: string | null
    player1Score: number
    player2Score: number
    player1Progress: number
    player2Progress: number
    problems: JsonValue
    results: JsonValue | null
    createdAt: Date
    startedAt: Date | null
    completedAt: Date | null
    _count: ArenaMatchCountAggregateOutputType | null
    _avg: ArenaMatchAvgAggregateOutputType | null
    _sum: ArenaMatchSumAggregateOutputType | null
    _min: ArenaMatchMinAggregateOutputType | null
    _max: ArenaMatchMaxAggregateOutputType | null
  }

  type GetArenaMatchGroupByPayload<T extends ArenaMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArenaMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArenaMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArenaMatchGroupByOutputType[P]>
            : GetScalarType<T[P], ArenaMatchGroupByOutputType[P]>
        }
      >
    >


  export type ArenaMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    difficulty?: boolean
    status?: boolean
    winnerId?: boolean
    player1Score?: boolean
    player2Score?: boolean
    player1Progress?: boolean
    player2Progress?: boolean
    problems?: boolean
    results?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arenaMatch"]>



  export type ArenaMatchSelectScalar = {
    id?: boolean
    matchId?: boolean
    player1Id?: boolean
    player2Id?: boolean
    difficulty?: boolean
    status?: boolean
    winnerId?: boolean
    player1Score?: boolean
    player2Score?: boolean
    player1Progress?: boolean
    player2Progress?: boolean
    problems?: boolean
    results?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type ArenaMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "player1Id" | "player2Id" | "difficulty" | "status" | "winnerId" | "player1Score" | "player2Score" | "player1Progress" | "player2Progress" | "problems" | "results" | "createdAt" | "startedAt" | "completedAt", ExtArgs["result"]["arenaMatch"]>
  export type ArenaMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArenaMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArenaMatch"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      player1Id: string
      player2Id: string
      difficulty: string
      status: string
      winnerId: string | null
      player1Score: number
      player2Score: number
      player1Progress: number
      player2Progress: number
      problems: Prisma.JsonValue
      results: Prisma.JsonValue | null
      createdAt: Date
      startedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["arenaMatch"]>
    composites: {}
  }

  type ArenaMatchGetPayload<S extends boolean | null | undefined | ArenaMatchDefaultArgs> = $Result.GetResult<Prisma.$ArenaMatchPayload, S>

  type ArenaMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArenaMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArenaMatchCountAggregateInputType | true
    }

  export interface ArenaMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArenaMatch'], meta: { name: 'ArenaMatch' } }
    /**
     * Find zero or one ArenaMatch that matches the filter.
     * @param {ArenaMatchFindUniqueArgs} args - Arguments to find a ArenaMatch
     * @example
     * // Get one ArenaMatch
     * const arenaMatch = await prisma.arenaMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArenaMatchFindUniqueArgs>(args: SelectSubset<T, ArenaMatchFindUniqueArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArenaMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArenaMatchFindUniqueOrThrowArgs} args - Arguments to find a ArenaMatch
     * @example
     * // Get one ArenaMatch
     * const arenaMatch = await prisma.arenaMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArenaMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, ArenaMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArenaMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaMatchFindFirstArgs} args - Arguments to find a ArenaMatch
     * @example
     * // Get one ArenaMatch
     * const arenaMatch = await prisma.arenaMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArenaMatchFindFirstArgs>(args?: SelectSubset<T, ArenaMatchFindFirstArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArenaMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaMatchFindFirstOrThrowArgs} args - Arguments to find a ArenaMatch
     * @example
     * // Get one ArenaMatch
     * const arenaMatch = await prisma.arenaMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArenaMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, ArenaMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArenaMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArenaMatches
     * const arenaMatches = await prisma.arenaMatch.findMany()
     * 
     * // Get first 10 ArenaMatches
     * const arenaMatches = await prisma.arenaMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arenaMatchWithIdOnly = await prisma.arenaMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArenaMatchFindManyArgs>(args?: SelectSubset<T, ArenaMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArenaMatch.
     * @param {ArenaMatchCreateArgs} args - Arguments to create a ArenaMatch.
     * @example
     * // Create one ArenaMatch
     * const ArenaMatch = await prisma.arenaMatch.create({
     *   data: {
     *     // ... data to create a ArenaMatch
     *   }
     * })
     * 
     */
    create<T extends ArenaMatchCreateArgs>(args: SelectSubset<T, ArenaMatchCreateArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArenaMatches.
     * @param {ArenaMatchCreateManyArgs} args - Arguments to create many ArenaMatches.
     * @example
     * // Create many ArenaMatches
     * const arenaMatch = await prisma.arenaMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArenaMatchCreateManyArgs>(args?: SelectSubset<T, ArenaMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArenaMatch.
     * @param {ArenaMatchDeleteArgs} args - Arguments to delete one ArenaMatch.
     * @example
     * // Delete one ArenaMatch
     * const ArenaMatch = await prisma.arenaMatch.delete({
     *   where: {
     *     // ... filter to delete one ArenaMatch
     *   }
     * })
     * 
     */
    delete<T extends ArenaMatchDeleteArgs>(args: SelectSubset<T, ArenaMatchDeleteArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArenaMatch.
     * @param {ArenaMatchUpdateArgs} args - Arguments to update one ArenaMatch.
     * @example
     * // Update one ArenaMatch
     * const arenaMatch = await prisma.arenaMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArenaMatchUpdateArgs>(args: SelectSubset<T, ArenaMatchUpdateArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArenaMatches.
     * @param {ArenaMatchDeleteManyArgs} args - Arguments to filter ArenaMatches to delete.
     * @example
     * // Delete a few ArenaMatches
     * const { count } = await prisma.arenaMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArenaMatchDeleteManyArgs>(args?: SelectSubset<T, ArenaMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArenaMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArenaMatches
     * const arenaMatch = await prisma.arenaMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArenaMatchUpdateManyArgs>(args: SelectSubset<T, ArenaMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArenaMatch.
     * @param {ArenaMatchUpsertArgs} args - Arguments to update or create a ArenaMatch.
     * @example
     * // Update or create a ArenaMatch
     * const arenaMatch = await prisma.arenaMatch.upsert({
     *   create: {
     *     // ... data to create a ArenaMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArenaMatch we want to update
     *   }
     * })
     */
    upsert<T extends ArenaMatchUpsertArgs>(args: SelectSubset<T, ArenaMatchUpsertArgs<ExtArgs>>): Prisma__ArenaMatchClient<$Result.GetResult<Prisma.$ArenaMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArenaMatches that matches the filter.
     * @param {ArenaMatchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const arenaMatch = await prisma.arenaMatch.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ArenaMatchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ArenaMatch.
     * @param {ArenaMatchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const arenaMatch = await prisma.arenaMatch.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ArenaMatchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ArenaMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaMatchCountArgs} args - Arguments to filter ArenaMatches to count.
     * @example
     * // Count the number of ArenaMatches
     * const count = await prisma.arenaMatch.count({
     *   where: {
     *     // ... the filter for the ArenaMatches we want to count
     *   }
     * })
    **/
    count<T extends ArenaMatchCountArgs>(
      args?: Subset<T, ArenaMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArenaMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArenaMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArenaMatchAggregateArgs>(args: Subset<T, ArenaMatchAggregateArgs>): Prisma.PrismaPromise<GetArenaMatchAggregateType<T>>

    /**
     * Group by ArenaMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArenaMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArenaMatchGroupByArgs['orderBy'] }
        : { orderBy?: ArenaMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArenaMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArenaMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArenaMatch model
   */
  readonly fields: ArenaMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArenaMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArenaMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArenaMatch model
   */
  interface ArenaMatchFieldRefs {
    readonly id: FieldRef<"ArenaMatch", 'String'>
    readonly matchId: FieldRef<"ArenaMatch", 'String'>
    readonly player1Id: FieldRef<"ArenaMatch", 'String'>
    readonly player2Id: FieldRef<"ArenaMatch", 'String'>
    readonly difficulty: FieldRef<"ArenaMatch", 'String'>
    readonly status: FieldRef<"ArenaMatch", 'String'>
    readonly winnerId: FieldRef<"ArenaMatch", 'String'>
    readonly player1Score: FieldRef<"ArenaMatch", 'Int'>
    readonly player2Score: FieldRef<"ArenaMatch", 'Int'>
    readonly player1Progress: FieldRef<"ArenaMatch", 'Int'>
    readonly player2Progress: FieldRef<"ArenaMatch", 'Int'>
    readonly problems: FieldRef<"ArenaMatch", 'Json'>
    readonly results: FieldRef<"ArenaMatch", 'Json'>
    readonly createdAt: FieldRef<"ArenaMatch", 'DateTime'>
    readonly startedAt: FieldRef<"ArenaMatch", 'DateTime'>
    readonly completedAt: FieldRef<"ArenaMatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArenaMatch findUnique
   */
  export type ArenaMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArenaMatch to fetch.
     */
    where: ArenaMatchWhereUniqueInput
  }

  /**
   * ArenaMatch findUniqueOrThrow
   */
  export type ArenaMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArenaMatch to fetch.
     */
    where: ArenaMatchWhereUniqueInput
  }

  /**
   * ArenaMatch findFirst
   */
  export type ArenaMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArenaMatch to fetch.
     */
    where?: ArenaMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaMatches to fetch.
     */
    orderBy?: ArenaMatchOrderByWithRelationInput | ArenaMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArenaMatches.
     */
    cursor?: ArenaMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArenaMatches.
     */
    distinct?: ArenaMatchScalarFieldEnum | ArenaMatchScalarFieldEnum[]
  }

  /**
   * ArenaMatch findFirstOrThrow
   */
  export type ArenaMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArenaMatch to fetch.
     */
    where?: ArenaMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaMatches to fetch.
     */
    orderBy?: ArenaMatchOrderByWithRelationInput | ArenaMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArenaMatches.
     */
    cursor?: ArenaMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArenaMatches.
     */
    distinct?: ArenaMatchScalarFieldEnum | ArenaMatchScalarFieldEnum[]
  }

  /**
   * ArenaMatch findMany
   */
  export type ArenaMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArenaMatches to fetch.
     */
    where?: ArenaMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaMatches to fetch.
     */
    orderBy?: ArenaMatchOrderByWithRelationInput | ArenaMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArenaMatches.
     */
    cursor?: ArenaMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaMatches.
     */
    skip?: number
    distinct?: ArenaMatchScalarFieldEnum | ArenaMatchScalarFieldEnum[]
  }

  /**
   * ArenaMatch create
   */
  export type ArenaMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a ArenaMatch.
     */
    data: XOR<ArenaMatchCreateInput, ArenaMatchUncheckedCreateInput>
  }

  /**
   * ArenaMatch createMany
   */
  export type ArenaMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArenaMatches.
     */
    data: ArenaMatchCreateManyInput | ArenaMatchCreateManyInput[]
  }

  /**
   * ArenaMatch update
   */
  export type ArenaMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a ArenaMatch.
     */
    data: XOR<ArenaMatchUpdateInput, ArenaMatchUncheckedUpdateInput>
    /**
     * Choose, which ArenaMatch to update.
     */
    where: ArenaMatchWhereUniqueInput
  }

  /**
   * ArenaMatch updateMany
   */
  export type ArenaMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArenaMatches.
     */
    data: XOR<ArenaMatchUpdateManyMutationInput, ArenaMatchUncheckedUpdateManyInput>
    /**
     * Filter which ArenaMatches to update
     */
    where?: ArenaMatchWhereInput
    /**
     * Limit how many ArenaMatches to update.
     */
    limit?: number
  }

  /**
   * ArenaMatch upsert
   */
  export type ArenaMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the ArenaMatch to update in case it exists.
     */
    where: ArenaMatchWhereUniqueInput
    /**
     * In case the ArenaMatch found by the `where` argument doesn't exist, create a new ArenaMatch with this data.
     */
    create: XOR<ArenaMatchCreateInput, ArenaMatchUncheckedCreateInput>
    /**
     * In case the ArenaMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArenaMatchUpdateInput, ArenaMatchUncheckedUpdateInput>
  }

  /**
   * ArenaMatch delete
   */
  export type ArenaMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
    /**
     * Filter which ArenaMatch to delete.
     */
    where: ArenaMatchWhereUniqueInput
  }

  /**
   * ArenaMatch deleteMany
   */
  export type ArenaMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArenaMatches to delete
     */
    where?: ArenaMatchWhereInput
    /**
     * Limit how many ArenaMatches to delete.
     */
    limit?: number
  }

  /**
   * ArenaMatch findRaw
   */
  export type ArenaMatchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ArenaMatch aggregateRaw
   */
  export type ArenaMatchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ArenaMatch without action
   */
  export type ArenaMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaMatch
     */
    select?: ArenaMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaMatch
     */
    omit?: ArenaMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArenaMatchInclude<ExtArgs> | null
  }


  /**
   * Model ArenaQueue
   */

  export type AggregateArenaQueue = {
    _count: ArenaQueueCountAggregateOutputType | null
    _min: ArenaQueueMinAggregateOutputType | null
    _max: ArenaQueueMaxAggregateOutputType | null
  }

  export type ArenaQueueMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    difficulty: string | null
    joinedAt: Date | null
  }

  export type ArenaQueueMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    difficulty: string | null
    joinedAt: Date | null
  }

  export type ArenaQueueCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    difficulty: number
    joinedAt: number
    _all: number
  }


  export type ArenaQueueMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    difficulty?: true
    joinedAt?: true
  }

  export type ArenaQueueMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    difficulty?: true
    joinedAt?: true
  }

  export type ArenaQueueCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    difficulty?: true
    joinedAt?: true
    _all?: true
  }

  export type ArenaQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArenaQueue to aggregate.
     */
    where?: ArenaQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaQueues to fetch.
     */
    orderBy?: ArenaQueueOrderByWithRelationInput | ArenaQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArenaQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArenaQueues
    **/
    _count?: true | ArenaQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArenaQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArenaQueueMaxAggregateInputType
  }

  export type GetArenaQueueAggregateType<T extends ArenaQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateArenaQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArenaQueue[P]>
      : GetScalarType<T[P], AggregateArenaQueue[P]>
  }




  export type ArenaQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArenaQueueWhereInput
    orderBy?: ArenaQueueOrderByWithAggregationInput | ArenaQueueOrderByWithAggregationInput[]
    by: ArenaQueueScalarFieldEnum[] | ArenaQueueScalarFieldEnum
    having?: ArenaQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArenaQueueCountAggregateInputType | true
    _min?: ArenaQueueMinAggregateInputType
    _max?: ArenaQueueMaxAggregateInputType
  }

  export type ArenaQueueGroupByOutputType = {
    id: string
    userId: string
    username: string
    difficulty: string
    joinedAt: Date
    _count: ArenaQueueCountAggregateOutputType | null
    _min: ArenaQueueMinAggregateOutputType | null
    _max: ArenaQueueMaxAggregateOutputType | null
  }

  type GetArenaQueueGroupByPayload<T extends ArenaQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArenaQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArenaQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArenaQueueGroupByOutputType[P]>
            : GetScalarType<T[P], ArenaQueueGroupByOutputType[P]>
        }
      >
    >


  export type ArenaQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    difficulty?: boolean
    joinedAt?: boolean
  }, ExtArgs["result"]["arenaQueue"]>



  export type ArenaQueueSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    difficulty?: boolean
    joinedAt?: boolean
  }

  export type ArenaQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "difficulty" | "joinedAt", ExtArgs["result"]["arenaQueue"]>

  export type $ArenaQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArenaQueue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      username: string
      difficulty: string
      joinedAt: Date
    }, ExtArgs["result"]["arenaQueue"]>
    composites: {}
  }

  type ArenaQueueGetPayload<S extends boolean | null | undefined | ArenaQueueDefaultArgs> = $Result.GetResult<Prisma.$ArenaQueuePayload, S>

  type ArenaQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArenaQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArenaQueueCountAggregateInputType | true
    }

  export interface ArenaQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArenaQueue'], meta: { name: 'ArenaQueue' } }
    /**
     * Find zero or one ArenaQueue that matches the filter.
     * @param {ArenaQueueFindUniqueArgs} args - Arguments to find a ArenaQueue
     * @example
     * // Get one ArenaQueue
     * const arenaQueue = await prisma.arenaQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArenaQueueFindUniqueArgs>(args: SelectSubset<T, ArenaQueueFindUniqueArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArenaQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArenaQueueFindUniqueOrThrowArgs} args - Arguments to find a ArenaQueue
     * @example
     * // Get one ArenaQueue
     * const arenaQueue = await prisma.arenaQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArenaQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, ArenaQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArenaQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaQueueFindFirstArgs} args - Arguments to find a ArenaQueue
     * @example
     * // Get one ArenaQueue
     * const arenaQueue = await prisma.arenaQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArenaQueueFindFirstArgs>(args?: SelectSubset<T, ArenaQueueFindFirstArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArenaQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaQueueFindFirstOrThrowArgs} args - Arguments to find a ArenaQueue
     * @example
     * // Get one ArenaQueue
     * const arenaQueue = await prisma.arenaQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArenaQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, ArenaQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArenaQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArenaQueues
     * const arenaQueues = await prisma.arenaQueue.findMany()
     * 
     * // Get first 10 ArenaQueues
     * const arenaQueues = await prisma.arenaQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arenaQueueWithIdOnly = await prisma.arenaQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArenaQueueFindManyArgs>(args?: SelectSubset<T, ArenaQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArenaQueue.
     * @param {ArenaQueueCreateArgs} args - Arguments to create a ArenaQueue.
     * @example
     * // Create one ArenaQueue
     * const ArenaQueue = await prisma.arenaQueue.create({
     *   data: {
     *     // ... data to create a ArenaQueue
     *   }
     * })
     * 
     */
    create<T extends ArenaQueueCreateArgs>(args: SelectSubset<T, ArenaQueueCreateArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArenaQueues.
     * @param {ArenaQueueCreateManyArgs} args - Arguments to create many ArenaQueues.
     * @example
     * // Create many ArenaQueues
     * const arenaQueue = await prisma.arenaQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArenaQueueCreateManyArgs>(args?: SelectSubset<T, ArenaQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArenaQueue.
     * @param {ArenaQueueDeleteArgs} args - Arguments to delete one ArenaQueue.
     * @example
     * // Delete one ArenaQueue
     * const ArenaQueue = await prisma.arenaQueue.delete({
     *   where: {
     *     // ... filter to delete one ArenaQueue
     *   }
     * })
     * 
     */
    delete<T extends ArenaQueueDeleteArgs>(args: SelectSubset<T, ArenaQueueDeleteArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArenaQueue.
     * @param {ArenaQueueUpdateArgs} args - Arguments to update one ArenaQueue.
     * @example
     * // Update one ArenaQueue
     * const arenaQueue = await prisma.arenaQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArenaQueueUpdateArgs>(args: SelectSubset<T, ArenaQueueUpdateArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArenaQueues.
     * @param {ArenaQueueDeleteManyArgs} args - Arguments to filter ArenaQueues to delete.
     * @example
     * // Delete a few ArenaQueues
     * const { count } = await prisma.arenaQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArenaQueueDeleteManyArgs>(args?: SelectSubset<T, ArenaQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArenaQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArenaQueues
     * const arenaQueue = await prisma.arenaQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArenaQueueUpdateManyArgs>(args: SelectSubset<T, ArenaQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArenaQueue.
     * @param {ArenaQueueUpsertArgs} args - Arguments to update or create a ArenaQueue.
     * @example
     * // Update or create a ArenaQueue
     * const arenaQueue = await prisma.arenaQueue.upsert({
     *   create: {
     *     // ... data to create a ArenaQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArenaQueue we want to update
     *   }
     * })
     */
    upsert<T extends ArenaQueueUpsertArgs>(args: SelectSubset<T, ArenaQueueUpsertArgs<ExtArgs>>): Prisma__ArenaQueueClient<$Result.GetResult<Prisma.$ArenaQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArenaQueues that matches the filter.
     * @param {ArenaQueueFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const arenaQueue = await prisma.arenaQueue.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ArenaQueueFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ArenaQueue.
     * @param {ArenaQueueAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const arenaQueue = await prisma.arenaQueue.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ArenaQueueAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ArenaQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaQueueCountArgs} args - Arguments to filter ArenaQueues to count.
     * @example
     * // Count the number of ArenaQueues
     * const count = await prisma.arenaQueue.count({
     *   where: {
     *     // ... the filter for the ArenaQueues we want to count
     *   }
     * })
    **/
    count<T extends ArenaQueueCountArgs>(
      args?: Subset<T, ArenaQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArenaQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArenaQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArenaQueueAggregateArgs>(args: Subset<T, ArenaQueueAggregateArgs>): Prisma.PrismaPromise<GetArenaQueueAggregateType<T>>

    /**
     * Group by ArenaQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArenaQueueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArenaQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArenaQueueGroupByArgs['orderBy'] }
        : { orderBy?: ArenaQueueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArenaQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArenaQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArenaQueue model
   */
  readonly fields: ArenaQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArenaQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArenaQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArenaQueue model
   */
  interface ArenaQueueFieldRefs {
    readonly id: FieldRef<"ArenaQueue", 'String'>
    readonly userId: FieldRef<"ArenaQueue", 'String'>
    readonly username: FieldRef<"ArenaQueue", 'String'>
    readonly difficulty: FieldRef<"ArenaQueue", 'String'>
    readonly joinedAt: FieldRef<"ArenaQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArenaQueue findUnique
   */
  export type ArenaQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * Filter, which ArenaQueue to fetch.
     */
    where: ArenaQueueWhereUniqueInput
  }

  /**
   * ArenaQueue findUniqueOrThrow
   */
  export type ArenaQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * Filter, which ArenaQueue to fetch.
     */
    where: ArenaQueueWhereUniqueInput
  }

  /**
   * ArenaQueue findFirst
   */
  export type ArenaQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * Filter, which ArenaQueue to fetch.
     */
    where?: ArenaQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaQueues to fetch.
     */
    orderBy?: ArenaQueueOrderByWithRelationInput | ArenaQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArenaQueues.
     */
    cursor?: ArenaQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArenaQueues.
     */
    distinct?: ArenaQueueScalarFieldEnum | ArenaQueueScalarFieldEnum[]
  }

  /**
   * ArenaQueue findFirstOrThrow
   */
  export type ArenaQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * Filter, which ArenaQueue to fetch.
     */
    where?: ArenaQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaQueues to fetch.
     */
    orderBy?: ArenaQueueOrderByWithRelationInput | ArenaQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArenaQueues.
     */
    cursor?: ArenaQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArenaQueues.
     */
    distinct?: ArenaQueueScalarFieldEnum | ArenaQueueScalarFieldEnum[]
  }

  /**
   * ArenaQueue findMany
   */
  export type ArenaQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * Filter, which ArenaQueues to fetch.
     */
    where?: ArenaQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArenaQueues to fetch.
     */
    orderBy?: ArenaQueueOrderByWithRelationInput | ArenaQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArenaQueues.
     */
    cursor?: ArenaQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArenaQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArenaQueues.
     */
    skip?: number
    distinct?: ArenaQueueScalarFieldEnum | ArenaQueueScalarFieldEnum[]
  }

  /**
   * ArenaQueue create
   */
  export type ArenaQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * The data needed to create a ArenaQueue.
     */
    data: XOR<ArenaQueueCreateInput, ArenaQueueUncheckedCreateInput>
  }

  /**
   * ArenaQueue createMany
   */
  export type ArenaQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArenaQueues.
     */
    data: ArenaQueueCreateManyInput | ArenaQueueCreateManyInput[]
  }

  /**
   * ArenaQueue update
   */
  export type ArenaQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * The data needed to update a ArenaQueue.
     */
    data: XOR<ArenaQueueUpdateInput, ArenaQueueUncheckedUpdateInput>
    /**
     * Choose, which ArenaQueue to update.
     */
    where: ArenaQueueWhereUniqueInput
  }

  /**
   * ArenaQueue updateMany
   */
  export type ArenaQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArenaQueues.
     */
    data: XOR<ArenaQueueUpdateManyMutationInput, ArenaQueueUncheckedUpdateManyInput>
    /**
     * Filter which ArenaQueues to update
     */
    where?: ArenaQueueWhereInput
    /**
     * Limit how many ArenaQueues to update.
     */
    limit?: number
  }

  /**
   * ArenaQueue upsert
   */
  export type ArenaQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * The filter to search for the ArenaQueue to update in case it exists.
     */
    where: ArenaQueueWhereUniqueInput
    /**
     * In case the ArenaQueue found by the `where` argument doesn't exist, create a new ArenaQueue with this data.
     */
    create: XOR<ArenaQueueCreateInput, ArenaQueueUncheckedCreateInput>
    /**
     * In case the ArenaQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArenaQueueUpdateInput, ArenaQueueUncheckedUpdateInput>
  }

  /**
   * ArenaQueue delete
   */
  export type ArenaQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
    /**
     * Filter which ArenaQueue to delete.
     */
    where: ArenaQueueWhereUniqueInput
  }

  /**
   * ArenaQueue deleteMany
   */
  export type ArenaQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArenaQueues to delete
     */
    where?: ArenaQueueWhereInput
    /**
     * Limit how many ArenaQueues to delete.
     */
    limit?: number
  }

  /**
   * ArenaQueue findRaw
   */
  export type ArenaQueueFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ArenaQueue aggregateRaw
   */
  export type ArenaQueueAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ArenaQueue without action
   */
  export type ArenaQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArenaQueue
     */
    select?: ArenaQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArenaQueue
     */
    omit?: ArenaQueueOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    rank: 'rank',
    contestsCount: 'contestsCount',
    streakCount: 'streakCount',
    lastSolvedDate: 'lastSolvedDate',
    problemsSolved: 'problemsSolved',
    easyCount: 'easyCount',
    mediumCount: 'mediumCount',
    hardCount: 'hardCount',
    realWorldCount: 'realWorldCount',
    arenaWins: 'arenaWins',
    arenaLosses: 'arenaLosses',
    arenaTotalMatches: 'arenaTotalMatches',
    arenaRating: 'arenaRating',
    arenaWinStreak: 'arenaWinStreak',
    arenaBestStreak: 'arenaBestStreak'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    problemId: 'problemId',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    category: 'category',
    timeLimit: 'timeLimit',
    testCases: 'testCases',
    starterCode: 'starterCode',
    solution: 'solution',
    hints: 'hints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SolvedProblemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    difficulty: 'difficulty',
    language: 'language',
    code: 'code',
    solvedAt: 'solvedAt'
  };

  export type SolvedProblemScalarFieldEnum = (typeof SolvedProblemScalarFieldEnum)[keyof typeof SolvedProblemScalarFieldEnum]


  export const ArenaMatchScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    difficulty: 'difficulty',
    status: 'status',
    winnerId: 'winnerId',
    player1Score: 'player1Score',
    player2Score: 'player2Score',
    player1Progress: 'player1Progress',
    player2Progress: 'player2Progress',
    problems: 'problems',
    results: 'results',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type ArenaMatchScalarFieldEnum = (typeof ArenaMatchScalarFieldEnum)[keyof typeof ArenaMatchScalarFieldEnum]


  export const ArenaQueueScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    difficulty: 'difficulty',
    joinedAt: 'joinedAt'
  };

  export type ArenaQueueScalarFieldEnum = (typeof ArenaQueueScalarFieldEnum)[keyof typeof ArenaQueueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    rank?: IntFilter<"User"> | number
    contestsCount?: IntFilter<"User"> | number
    streakCount?: IntFilter<"User"> | number
    lastSolvedDate?: DateTimeNullableFilter<"User"> | Date | string | null
    problemsSolved?: IntFilter<"User"> | number
    easyCount?: IntFilter<"User"> | number
    mediumCount?: IntFilter<"User"> | number
    hardCount?: IntFilter<"User"> | number
    realWorldCount?: IntFilter<"User"> | number
    arenaWins?: IntFilter<"User"> | number
    arenaLosses?: IntFilter<"User"> | number
    arenaTotalMatches?: IntFilter<"User"> | number
    arenaRating?: IntFilter<"User"> | number
    arenaWinStreak?: IntFilter<"User"> | number
    arenaBestStreak?: IntFilter<"User"> | number
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    solvedProblems?: SolvedProblemListRelationFilter
    player1Matches?: ArenaMatchListRelationFilter
    player2Matches?: ArenaMatchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    rank?: SortOrder
    contestsCount?: SortOrder
    streakCount?: SortOrder
    lastSolvedDate?: SortOrder
    problemsSolved?: SortOrder
    easyCount?: SortOrder
    mediumCount?: SortOrder
    hardCount?: SortOrder
    realWorldCount?: SortOrder
    arenaWins?: SortOrder
    arenaLosses?: SortOrder
    arenaTotalMatches?: SortOrder
    arenaRating?: SortOrder
    arenaWinStreak?: SortOrder
    arenaBestStreak?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    solvedProblems?: SolvedProblemOrderByRelationAggregateInput
    player1Matches?: ArenaMatchOrderByRelationAggregateInput
    player2Matches?: ArenaMatchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    rank?: IntFilter<"User"> | number
    contestsCount?: IntFilter<"User"> | number
    streakCount?: IntFilter<"User"> | number
    lastSolvedDate?: DateTimeNullableFilter<"User"> | Date | string | null
    problemsSolved?: IntFilter<"User"> | number
    easyCount?: IntFilter<"User"> | number
    mediumCount?: IntFilter<"User"> | number
    hardCount?: IntFilter<"User"> | number
    realWorldCount?: IntFilter<"User"> | number
    arenaWins?: IntFilter<"User"> | number
    arenaLosses?: IntFilter<"User"> | number
    arenaTotalMatches?: IntFilter<"User"> | number
    arenaRating?: IntFilter<"User"> | number
    arenaWinStreak?: IntFilter<"User"> | number
    arenaBestStreak?: IntFilter<"User"> | number
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    solvedProblems?: SolvedProblemListRelationFilter
    player1Matches?: ArenaMatchListRelationFilter
    player2Matches?: ArenaMatchListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    rank?: SortOrder
    contestsCount?: SortOrder
    streakCount?: SortOrder
    lastSolvedDate?: SortOrder
    problemsSolved?: SortOrder
    easyCount?: SortOrder
    mediumCount?: SortOrder
    hardCount?: SortOrder
    realWorldCount?: SortOrder
    arenaWins?: SortOrder
    arenaLosses?: SortOrder
    arenaTotalMatches?: SortOrder
    arenaRating?: SortOrder
    arenaWinStreak?: SortOrder
    arenaBestStreak?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    rank?: IntWithAggregatesFilter<"User"> | number
    contestsCount?: IntWithAggregatesFilter<"User"> | number
    streakCount?: IntWithAggregatesFilter<"User"> | number
    lastSolvedDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    problemsSolved?: IntWithAggregatesFilter<"User"> | number
    easyCount?: IntWithAggregatesFilter<"User"> | number
    mediumCount?: IntWithAggregatesFilter<"User"> | number
    hardCount?: IntWithAggregatesFilter<"User"> | number
    realWorldCount?: IntWithAggregatesFilter<"User"> | number
    arenaWins?: IntWithAggregatesFilter<"User"> | number
    arenaLosses?: IntWithAggregatesFilter<"User"> | number
    arenaTotalMatches?: IntWithAggregatesFilter<"User"> | number
    arenaRating?: IntWithAggregatesFilter<"User"> | number
    arenaWinStreak?: IntWithAggregatesFilter<"User"> | number
    arenaBestStreak?: IntWithAggregatesFilter<"User"> | number
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    problemId?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: StringFilter<"Problem"> | string
    category?: StringFilter<"Problem"> | string
    timeLimit?: IntFilter<"Problem"> | number
    testCases?: JsonFilter<"Problem">
    starterCode?: JsonFilter<"Problem">
    solution?: StringNullableFilter<"Problem"> | string | null
    hints?: JsonNullableFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    solvedBy?: SolvedProblemListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    problemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    timeLimit?: SortOrder
    testCases?: SortOrder
    starterCode?: SortOrder
    solution?: SortOrder
    hints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    solvedBy?: SolvedProblemOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    problemId?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: StringFilter<"Problem"> | string
    category?: StringFilter<"Problem"> | string
    timeLimit?: IntFilter<"Problem"> | number
    testCases?: JsonFilter<"Problem">
    starterCode?: JsonFilter<"Problem">
    solution?: StringNullableFilter<"Problem"> | string | null
    hints?: JsonNullableFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    solvedBy?: SolvedProblemListRelationFilter
  }, "id" | "problemId">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    problemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    timeLimit?: SortOrder
    testCases?: SortOrder
    starterCode?: SortOrder
    solution?: SortOrder
    hints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _avg?: ProblemAvgOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
    _sum?: ProblemSumOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    problemId?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: StringWithAggregatesFilter<"Problem"> | string
    category?: StringWithAggregatesFilter<"Problem"> | string
    timeLimit?: IntWithAggregatesFilter<"Problem"> | number
    testCases?: JsonWithAggregatesFilter<"Problem">
    starterCode?: JsonWithAggregatesFilter<"Problem">
    solution?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    hints?: JsonNullableWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SolvedProblemWhereInput = {
    AND?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    OR?: SolvedProblemWhereInput[]
    NOT?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    id?: StringFilter<"SolvedProblem"> | string
    userId?: StringFilter<"SolvedProblem"> | string
    problemId?: StringFilter<"SolvedProblem"> | string
    difficulty?: StringFilter<"SolvedProblem"> | string
    language?: StringFilter<"SolvedProblem"> | string
    code?: StringFilter<"SolvedProblem"> | string
    solvedAt?: DateTimeFilter<"SolvedProblem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type SolvedProblemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    difficulty?: SortOrder
    language?: SortOrder
    code?: SortOrder
    solvedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type SolvedProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: SolvedProblemUserIdProblemIdCompoundUniqueInput
    AND?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    OR?: SolvedProblemWhereInput[]
    NOT?: SolvedProblemWhereInput | SolvedProblemWhereInput[]
    userId?: StringFilter<"SolvedProblem"> | string
    problemId?: StringFilter<"SolvedProblem"> | string
    difficulty?: StringFilter<"SolvedProblem"> | string
    language?: StringFilter<"SolvedProblem"> | string
    code?: StringFilter<"SolvedProblem"> | string
    solvedAt?: DateTimeFilter<"SolvedProblem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type SolvedProblemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    difficulty?: SortOrder
    language?: SortOrder
    code?: SortOrder
    solvedAt?: SortOrder
    _count?: SolvedProblemCountOrderByAggregateInput
    _max?: SolvedProblemMaxOrderByAggregateInput
    _min?: SolvedProblemMinOrderByAggregateInput
  }

  export type SolvedProblemScalarWhereWithAggregatesInput = {
    AND?: SolvedProblemScalarWhereWithAggregatesInput | SolvedProblemScalarWhereWithAggregatesInput[]
    OR?: SolvedProblemScalarWhereWithAggregatesInput[]
    NOT?: SolvedProblemScalarWhereWithAggregatesInput | SolvedProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SolvedProblem"> | string
    userId?: StringWithAggregatesFilter<"SolvedProblem"> | string
    problemId?: StringWithAggregatesFilter<"SolvedProblem"> | string
    difficulty?: StringWithAggregatesFilter<"SolvedProblem"> | string
    language?: StringWithAggregatesFilter<"SolvedProblem"> | string
    code?: StringWithAggregatesFilter<"SolvedProblem"> | string
    solvedAt?: DateTimeWithAggregatesFilter<"SolvedProblem"> | Date | string
  }

  export type ArenaMatchWhereInput = {
    AND?: ArenaMatchWhereInput | ArenaMatchWhereInput[]
    OR?: ArenaMatchWhereInput[]
    NOT?: ArenaMatchWhereInput | ArenaMatchWhereInput[]
    id?: StringFilter<"ArenaMatch"> | string
    matchId?: StringFilter<"ArenaMatch"> | string
    player1Id?: StringFilter<"ArenaMatch"> | string
    player2Id?: StringFilter<"ArenaMatch"> | string
    difficulty?: StringFilter<"ArenaMatch"> | string
    status?: StringFilter<"ArenaMatch"> | string
    winnerId?: StringNullableFilter<"ArenaMatch"> | string | null
    player1Score?: IntFilter<"ArenaMatch"> | number
    player2Score?: IntFilter<"ArenaMatch"> | number
    player1Progress?: IntFilter<"ArenaMatch"> | number
    player2Progress?: IntFilter<"ArenaMatch"> | number
    problems?: JsonFilter<"ArenaMatch">
    results?: JsonNullableFilter<"ArenaMatch">
    createdAt?: DateTimeFilter<"ArenaMatch"> | Date | string
    startedAt?: DateTimeNullableFilter<"ArenaMatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ArenaMatch"> | Date | string | null
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArenaMatchOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Progress?: SortOrder
    player2Progress?: SortOrder
    problems?: SortOrder
    results?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
  }

  export type ArenaMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId?: string
    AND?: ArenaMatchWhereInput | ArenaMatchWhereInput[]
    OR?: ArenaMatchWhereInput[]
    NOT?: ArenaMatchWhereInput | ArenaMatchWhereInput[]
    player1Id?: StringFilter<"ArenaMatch"> | string
    player2Id?: StringFilter<"ArenaMatch"> | string
    difficulty?: StringFilter<"ArenaMatch"> | string
    status?: StringFilter<"ArenaMatch"> | string
    winnerId?: StringNullableFilter<"ArenaMatch"> | string | null
    player1Score?: IntFilter<"ArenaMatch"> | number
    player2Score?: IntFilter<"ArenaMatch"> | number
    player1Progress?: IntFilter<"ArenaMatch"> | number
    player2Progress?: IntFilter<"ArenaMatch"> | number
    problems?: JsonFilter<"ArenaMatch">
    results?: JsonNullableFilter<"ArenaMatch">
    createdAt?: DateTimeFilter<"ArenaMatch"> | Date | string
    startedAt?: DateTimeNullableFilter<"ArenaMatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ArenaMatch"> | Date | string | null
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "matchId">

  export type ArenaMatchOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Progress?: SortOrder
    player2Progress?: SortOrder
    problems?: SortOrder
    results?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    _count?: ArenaMatchCountOrderByAggregateInput
    _avg?: ArenaMatchAvgOrderByAggregateInput
    _max?: ArenaMatchMaxOrderByAggregateInput
    _min?: ArenaMatchMinOrderByAggregateInput
    _sum?: ArenaMatchSumOrderByAggregateInput
  }

  export type ArenaMatchScalarWhereWithAggregatesInput = {
    AND?: ArenaMatchScalarWhereWithAggregatesInput | ArenaMatchScalarWhereWithAggregatesInput[]
    OR?: ArenaMatchScalarWhereWithAggregatesInput[]
    NOT?: ArenaMatchScalarWhereWithAggregatesInput | ArenaMatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArenaMatch"> | string
    matchId?: StringWithAggregatesFilter<"ArenaMatch"> | string
    player1Id?: StringWithAggregatesFilter<"ArenaMatch"> | string
    player2Id?: StringWithAggregatesFilter<"ArenaMatch"> | string
    difficulty?: StringWithAggregatesFilter<"ArenaMatch"> | string
    status?: StringWithAggregatesFilter<"ArenaMatch"> | string
    winnerId?: StringNullableWithAggregatesFilter<"ArenaMatch"> | string | null
    player1Score?: IntWithAggregatesFilter<"ArenaMatch"> | number
    player2Score?: IntWithAggregatesFilter<"ArenaMatch"> | number
    player1Progress?: IntWithAggregatesFilter<"ArenaMatch"> | number
    player2Progress?: IntWithAggregatesFilter<"ArenaMatch"> | number
    problems?: JsonWithAggregatesFilter<"ArenaMatch">
    results?: JsonNullableWithAggregatesFilter<"ArenaMatch">
    createdAt?: DateTimeWithAggregatesFilter<"ArenaMatch"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ArenaMatch"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ArenaMatch"> | Date | string | null
  }

  export type ArenaQueueWhereInput = {
    AND?: ArenaQueueWhereInput | ArenaQueueWhereInput[]
    OR?: ArenaQueueWhereInput[]
    NOT?: ArenaQueueWhereInput | ArenaQueueWhereInput[]
    id?: StringFilter<"ArenaQueue"> | string
    userId?: StringFilter<"ArenaQueue"> | string
    username?: StringFilter<"ArenaQueue"> | string
    difficulty?: StringFilter<"ArenaQueue"> | string
    joinedAt?: DateTimeFilter<"ArenaQueue"> | Date | string
  }

  export type ArenaQueueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    difficulty?: SortOrder
    joinedAt?: SortOrder
  }

  export type ArenaQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArenaQueueWhereInput | ArenaQueueWhereInput[]
    OR?: ArenaQueueWhereInput[]
    NOT?: ArenaQueueWhereInput | ArenaQueueWhereInput[]
    userId?: StringFilter<"ArenaQueue"> | string
    username?: StringFilter<"ArenaQueue"> | string
    difficulty?: StringFilter<"ArenaQueue"> | string
    joinedAt?: DateTimeFilter<"ArenaQueue"> | Date | string
  }, "id">

  export type ArenaQueueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    difficulty?: SortOrder
    joinedAt?: SortOrder
    _count?: ArenaQueueCountOrderByAggregateInput
    _max?: ArenaQueueMaxOrderByAggregateInput
    _min?: ArenaQueueMinOrderByAggregateInput
  }

  export type ArenaQueueScalarWhereWithAggregatesInput = {
    AND?: ArenaQueueScalarWhereWithAggregatesInput | ArenaQueueScalarWhereWithAggregatesInput[]
    OR?: ArenaQueueScalarWhereWithAggregatesInput[]
    NOT?: ArenaQueueScalarWhereWithAggregatesInput | ArenaQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArenaQueue"> | string
    userId?: StringWithAggregatesFilter<"ArenaQueue"> | string
    username?: StringWithAggregatesFilter<"ArenaQueue"> | string
    difficulty?: StringWithAggregatesFilter<"ArenaQueue"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ArenaQueue"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    problemId: string
    title: string
    description: string
    difficulty: string
    category: string
    timeLimit?: number
    testCases: InputJsonValue
    starterCode: InputJsonValue
    solution?: string | null
    hints?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: SolvedProblemCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    problemId: string
    title: string
    description: string
    difficulty: string
    category: string
    timeLimit?: number
    testCases: InputJsonValue
    starterCode: InputJsonValue
    solution?: string | null
    hints?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: SolvedProblemUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    testCases?: InputJsonValue | InputJsonValue
    starterCode?: InputJsonValue | InputJsonValue
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: SolvedProblemUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    testCases?: InputJsonValue | InputJsonValue
    starterCode?: InputJsonValue | InputJsonValue
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    problemId: string
    title: string
    description: string
    difficulty: string
    category: string
    timeLimit?: number
    testCases: InputJsonValue
    starterCode: InputJsonValue
    solution?: string | null
    hints?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    testCases?: InputJsonValue | InputJsonValue
    starterCode?: InputJsonValue | InputJsonValue
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    testCases?: InputJsonValue | InputJsonValue
    starterCode?: InputJsonValue | InputJsonValue
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemCreateInput = {
    id?: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedProblemsInput
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type SolvedProblemUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
  }

  export type SolvedProblemUpdateInput = {
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type SolvedProblemUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
  }

  export type SolvedProblemUpdateManyMutationInput = {
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaMatchCreateInput = {
    id?: string
    matchId: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutPlayer1MatchesInput
    player2: UserCreateNestedOneWithoutPlayer2MatchesInput
  }

  export type ArenaMatchUncheckedCreateInput = {
    id?: string
    matchId: string
    player1Id: string
    player2Id: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ArenaMatchUpdateInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutPlayer1MatchesNestedInput
    player2?: UserUpdateOneRequiredWithoutPlayer2MatchesNestedInput
  }

  export type ArenaMatchUncheckedUpdateInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArenaMatchCreateManyInput = {
    id?: string
    matchId: string
    player1Id: string
    player2Id: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ArenaMatchUpdateManyMutationInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArenaMatchUncheckedUpdateManyInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArenaQueueCreateInput = {
    id?: string
    userId: string
    username: string
    difficulty: string
    joinedAt?: Date | string
  }

  export type ArenaQueueUncheckedCreateInput = {
    id?: string
    userId: string
    username: string
    difficulty: string
    joinedAt?: Date | string
  }

  export type ArenaQueueUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaQueueUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaQueueCreateManyInput = {
    id?: string
    userId: string
    username: string
    difficulty: string
    joinedAt?: Date | string
  }

  export type ArenaQueueUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaQueueUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SolvedProblemListRelationFilter = {
    every?: SolvedProblemWhereInput
    some?: SolvedProblemWhereInput
    none?: SolvedProblemWhereInput
  }

  export type ArenaMatchListRelationFilter = {
    every?: ArenaMatchWhereInput
    some?: ArenaMatchWhereInput
    none?: ArenaMatchWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolvedProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArenaMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    rank?: SortOrder
    contestsCount?: SortOrder
    streakCount?: SortOrder
    lastSolvedDate?: SortOrder
    problemsSolved?: SortOrder
    easyCount?: SortOrder
    mediumCount?: SortOrder
    hardCount?: SortOrder
    realWorldCount?: SortOrder
    arenaWins?: SortOrder
    arenaLosses?: SortOrder
    arenaTotalMatches?: SortOrder
    arenaRating?: SortOrder
    arenaWinStreak?: SortOrder
    arenaBestStreak?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rank?: SortOrder
    contestsCount?: SortOrder
    streakCount?: SortOrder
    problemsSolved?: SortOrder
    easyCount?: SortOrder
    mediumCount?: SortOrder
    hardCount?: SortOrder
    realWorldCount?: SortOrder
    arenaWins?: SortOrder
    arenaLosses?: SortOrder
    arenaTotalMatches?: SortOrder
    arenaRating?: SortOrder
    arenaWinStreak?: SortOrder
    arenaBestStreak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    rank?: SortOrder
    contestsCount?: SortOrder
    streakCount?: SortOrder
    lastSolvedDate?: SortOrder
    problemsSolved?: SortOrder
    easyCount?: SortOrder
    mediumCount?: SortOrder
    hardCount?: SortOrder
    realWorldCount?: SortOrder
    arenaWins?: SortOrder
    arenaLosses?: SortOrder
    arenaTotalMatches?: SortOrder
    arenaRating?: SortOrder
    arenaWinStreak?: SortOrder
    arenaBestStreak?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    rank?: SortOrder
    contestsCount?: SortOrder
    streakCount?: SortOrder
    lastSolvedDate?: SortOrder
    problemsSolved?: SortOrder
    easyCount?: SortOrder
    mediumCount?: SortOrder
    hardCount?: SortOrder
    realWorldCount?: SortOrder
    arenaWins?: SortOrder
    arenaLosses?: SortOrder
    arenaTotalMatches?: SortOrder
    arenaRating?: SortOrder
    arenaWinStreak?: SortOrder
    arenaBestStreak?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rank?: SortOrder
    contestsCount?: SortOrder
    streakCount?: SortOrder
    problemsSolved?: SortOrder
    easyCount?: SortOrder
    mediumCount?: SortOrder
    hardCount?: SortOrder
    realWorldCount?: SortOrder
    arenaWins?: SortOrder
    arenaLosses?: SortOrder
    arenaTotalMatches?: SortOrder
    arenaRating?: SortOrder
    arenaWinStreak?: SortOrder
    arenaBestStreak?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    timeLimit?: SortOrder
    testCases?: SortOrder
    starterCode?: SortOrder
    solution?: SortOrder
    hints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemAvgOrderByAggregateInput = {
    timeLimit?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    timeLimit?: SortOrder
    solution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    timeLimit?: SortOrder
    solution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemSumOrderByAggregateInput = {
    timeLimit?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type SolvedProblemUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type SolvedProblemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    difficulty?: SortOrder
    language?: SortOrder
    code?: SortOrder
    solvedAt?: SortOrder
  }

  export type SolvedProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    difficulty?: SortOrder
    language?: SortOrder
    code?: SortOrder
    solvedAt?: SortOrder
  }

  export type SolvedProblemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    difficulty?: SortOrder
    language?: SortOrder
    code?: SortOrder
    solvedAt?: SortOrder
  }

  export type ArenaMatchCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Progress?: SortOrder
    player2Progress?: SortOrder
    problems?: SortOrder
    results?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ArenaMatchAvgOrderByAggregateInput = {
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Progress?: SortOrder
    player2Progress?: SortOrder
  }

  export type ArenaMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Progress?: SortOrder
    player2Progress?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ArenaMatchMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    difficulty?: SortOrder
    status?: SortOrder
    winnerId?: SortOrder
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Progress?: SortOrder
    player2Progress?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ArenaMatchSumOrderByAggregateInput = {
    player1Score?: SortOrder
    player2Score?: SortOrder
    player1Progress?: SortOrder
    player2Progress?: SortOrder
  }

  export type ArenaQueueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    difficulty?: SortOrder
    joinedAt?: SortOrder
  }

  export type ArenaQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    difficulty?: SortOrder
    joinedAt?: SortOrder
  }

  export type ArenaQueueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    difficulty?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SolvedProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type ArenaMatchCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<ArenaMatchCreateWithoutPlayer1Input, ArenaMatchUncheckedCreateWithoutPlayer1Input> | ArenaMatchCreateWithoutPlayer1Input[] | ArenaMatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer1Input | ArenaMatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: ArenaMatchCreateManyPlayer1InputEnvelope
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
  }

  export type ArenaMatchCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<ArenaMatchCreateWithoutPlayer2Input, ArenaMatchUncheckedCreateWithoutPlayer2Input> | ArenaMatchCreateWithoutPlayer2Input[] | ArenaMatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer2Input | ArenaMatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: ArenaMatchCreateManyPlayer2InputEnvelope
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SolvedProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type ArenaMatchUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<ArenaMatchCreateWithoutPlayer1Input, ArenaMatchUncheckedCreateWithoutPlayer1Input> | ArenaMatchCreateWithoutPlayer1Input[] | ArenaMatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer1Input | ArenaMatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: ArenaMatchCreateManyPlayer1InputEnvelope
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
  }

  export type ArenaMatchUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<ArenaMatchCreateWithoutPlayer2Input, ArenaMatchUncheckedCreateWithoutPlayer2Input> | ArenaMatchCreateWithoutPlayer2Input[] | ArenaMatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer2Input | ArenaMatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: ArenaMatchCreateManyPlayer2InputEnvelope
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SolvedProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutUserInput | SolvedProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutUserInput | SolvedProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutUserInput | SolvedProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type ArenaMatchUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<ArenaMatchCreateWithoutPlayer1Input, ArenaMatchUncheckedCreateWithoutPlayer1Input> | ArenaMatchCreateWithoutPlayer1Input[] | ArenaMatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer1Input | ArenaMatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: ArenaMatchUpsertWithWhereUniqueWithoutPlayer1Input | ArenaMatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: ArenaMatchCreateManyPlayer1InputEnvelope
    set?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    disconnect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    delete?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    update?: ArenaMatchUpdateWithWhereUniqueWithoutPlayer1Input | ArenaMatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: ArenaMatchUpdateManyWithWhereWithoutPlayer1Input | ArenaMatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: ArenaMatchScalarWhereInput | ArenaMatchScalarWhereInput[]
  }

  export type ArenaMatchUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<ArenaMatchCreateWithoutPlayer2Input, ArenaMatchUncheckedCreateWithoutPlayer2Input> | ArenaMatchCreateWithoutPlayer2Input[] | ArenaMatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer2Input | ArenaMatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: ArenaMatchUpsertWithWhereUniqueWithoutPlayer2Input | ArenaMatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: ArenaMatchCreateManyPlayer2InputEnvelope
    set?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    disconnect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    delete?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    update?: ArenaMatchUpdateWithWhereUniqueWithoutPlayer2Input | ArenaMatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: ArenaMatchUpdateManyWithWhereWithoutPlayer2Input | ArenaMatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: ArenaMatchScalarWhereInput | ArenaMatchScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SolvedProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput> | SolvedProblemCreateWithoutUserInput[] | SolvedProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutUserInput | SolvedProblemCreateOrConnectWithoutUserInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutUserInput | SolvedProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedProblemCreateManyUserInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutUserInput | SolvedProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutUserInput | SolvedProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type ArenaMatchUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<ArenaMatchCreateWithoutPlayer1Input, ArenaMatchUncheckedCreateWithoutPlayer1Input> | ArenaMatchCreateWithoutPlayer1Input[] | ArenaMatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer1Input | ArenaMatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: ArenaMatchUpsertWithWhereUniqueWithoutPlayer1Input | ArenaMatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: ArenaMatchCreateManyPlayer1InputEnvelope
    set?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    disconnect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    delete?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    update?: ArenaMatchUpdateWithWhereUniqueWithoutPlayer1Input | ArenaMatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: ArenaMatchUpdateManyWithWhereWithoutPlayer1Input | ArenaMatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: ArenaMatchScalarWhereInput | ArenaMatchScalarWhereInput[]
  }

  export type ArenaMatchUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<ArenaMatchCreateWithoutPlayer2Input, ArenaMatchUncheckedCreateWithoutPlayer2Input> | ArenaMatchCreateWithoutPlayer2Input[] | ArenaMatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: ArenaMatchCreateOrConnectWithoutPlayer2Input | ArenaMatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: ArenaMatchUpsertWithWhereUniqueWithoutPlayer2Input | ArenaMatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: ArenaMatchCreateManyPlayer2InputEnvelope
    set?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    disconnect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    delete?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    connect?: ArenaMatchWhereUniqueInput | ArenaMatchWhereUniqueInput[]
    update?: ArenaMatchUpdateWithWhereUniqueWithoutPlayer2Input | ArenaMatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: ArenaMatchUpdateManyWithWhereWithoutPlayer2Input | ArenaMatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: ArenaMatchScalarWhereInput | ArenaMatchScalarWhereInput[]
  }

  export type SolvedProblemCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type SolvedProblemUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
  }

  export type SolvedProblemUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutProblemInput | SolvedProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutProblemInput | SolvedProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutProblemInput | SolvedProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type SolvedProblemUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput> | SolvedProblemCreateWithoutProblemInput[] | SolvedProblemUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedProblemCreateOrConnectWithoutProblemInput | SolvedProblemCreateOrConnectWithoutProblemInput[]
    upsert?: SolvedProblemUpsertWithWhereUniqueWithoutProblemInput | SolvedProblemUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolvedProblemCreateManyProblemInputEnvelope
    set?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    disconnect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    delete?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    connect?: SolvedProblemWhereUniqueInput | SolvedProblemWhereUniqueInput[]
    update?: SolvedProblemUpdateWithWhereUniqueWithoutProblemInput | SolvedProblemUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolvedProblemUpdateManyWithWhereWithoutProblemInput | SolvedProblemUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSolvedProblemsInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSolvedProblemsNestedInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    upsert?: UserUpsertWithoutSolvedProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolvedProblemsInput, UserUpdateWithoutSolvedProblemsInput>, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSolvedByNestedInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    upsert?: ProblemUpsertWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolvedByInput, ProblemUpdateWithoutSolvedByInput>, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type UserCreateNestedOneWithoutPlayer1MatchesInput = {
    create?: XOR<UserCreateWithoutPlayer1MatchesInput, UserUncheckedCreateWithoutPlayer1MatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayer1MatchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPlayer2MatchesInput = {
    create?: XOR<UserCreateWithoutPlayer2MatchesInput, UserUncheckedCreateWithoutPlayer2MatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayer2MatchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlayer1MatchesNestedInput = {
    create?: XOR<UserCreateWithoutPlayer1MatchesInput, UserUncheckedCreateWithoutPlayer1MatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayer1MatchesInput
    upsert?: UserUpsertWithoutPlayer1MatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayer1MatchesInput, UserUpdateWithoutPlayer1MatchesInput>, UserUncheckedUpdateWithoutPlayer1MatchesInput>
  }

  export type UserUpdateOneRequiredWithoutPlayer2MatchesNestedInput = {
    create?: XOR<UserCreateWithoutPlayer2MatchesInput, UserUncheckedCreateWithoutPlayer2MatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayer2MatchesInput
    upsert?: UserUpsertWithoutPlayer2MatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayer2MatchesInput, UserUpdateWithoutPlayer2MatchesInput>, UserUncheckedUpdateWithoutPlayer2MatchesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    sessions?: SessionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type SolvedProblemCreateWithoutUserInput = {
    id?: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type SolvedProblemUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
  }

  export type SolvedProblemCreateOrConnectWithoutUserInput = {
    where: SolvedProblemWhereUniqueInput
    create: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput>
  }

  export type SolvedProblemCreateManyUserInputEnvelope = {
    data: SolvedProblemCreateManyUserInput | SolvedProblemCreateManyUserInput[]
  }

  export type ArenaMatchCreateWithoutPlayer1Input = {
    id?: string
    matchId: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    player2: UserCreateNestedOneWithoutPlayer2MatchesInput
  }

  export type ArenaMatchUncheckedCreateWithoutPlayer1Input = {
    id?: string
    matchId: string
    player2Id: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ArenaMatchCreateOrConnectWithoutPlayer1Input = {
    where: ArenaMatchWhereUniqueInput
    create: XOR<ArenaMatchCreateWithoutPlayer1Input, ArenaMatchUncheckedCreateWithoutPlayer1Input>
  }

  export type ArenaMatchCreateManyPlayer1InputEnvelope = {
    data: ArenaMatchCreateManyPlayer1Input | ArenaMatchCreateManyPlayer1Input[]
  }

  export type ArenaMatchCreateWithoutPlayer2Input = {
    id?: string
    matchId: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    player1: UserCreateNestedOneWithoutPlayer1MatchesInput
  }

  export type ArenaMatchUncheckedCreateWithoutPlayer2Input = {
    id?: string
    matchId: string
    player1Id: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ArenaMatchCreateOrConnectWithoutPlayer2Input = {
    where: ArenaMatchWhereUniqueInput
    create: XOR<ArenaMatchCreateWithoutPlayer2Input, ArenaMatchUncheckedCreateWithoutPlayer2Input>
  }

  export type ArenaMatchCreateManyPlayer2InputEnvelope = {
    data: ArenaMatchCreateManyPlayer2Input | ArenaMatchCreateManyPlayer2Input[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type SolvedProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: SolvedProblemWhereUniqueInput
    update: XOR<SolvedProblemUpdateWithoutUserInput, SolvedProblemUncheckedUpdateWithoutUserInput>
    create: XOR<SolvedProblemCreateWithoutUserInput, SolvedProblemUncheckedCreateWithoutUserInput>
  }

  export type SolvedProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: SolvedProblemWhereUniqueInput
    data: XOR<SolvedProblemUpdateWithoutUserInput, SolvedProblemUncheckedUpdateWithoutUserInput>
  }

  export type SolvedProblemUpdateManyWithWhereWithoutUserInput = {
    where: SolvedProblemScalarWhereInput
    data: XOR<SolvedProblemUpdateManyMutationInput, SolvedProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type SolvedProblemScalarWhereInput = {
    AND?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
    OR?: SolvedProblemScalarWhereInput[]
    NOT?: SolvedProblemScalarWhereInput | SolvedProblemScalarWhereInput[]
    id?: StringFilter<"SolvedProblem"> | string
    userId?: StringFilter<"SolvedProblem"> | string
    problemId?: StringFilter<"SolvedProblem"> | string
    difficulty?: StringFilter<"SolvedProblem"> | string
    language?: StringFilter<"SolvedProblem"> | string
    code?: StringFilter<"SolvedProblem"> | string
    solvedAt?: DateTimeFilter<"SolvedProblem"> | Date | string
  }

  export type ArenaMatchUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: ArenaMatchWhereUniqueInput
    update: XOR<ArenaMatchUpdateWithoutPlayer1Input, ArenaMatchUncheckedUpdateWithoutPlayer1Input>
    create: XOR<ArenaMatchCreateWithoutPlayer1Input, ArenaMatchUncheckedCreateWithoutPlayer1Input>
  }

  export type ArenaMatchUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: ArenaMatchWhereUniqueInput
    data: XOR<ArenaMatchUpdateWithoutPlayer1Input, ArenaMatchUncheckedUpdateWithoutPlayer1Input>
  }

  export type ArenaMatchUpdateManyWithWhereWithoutPlayer1Input = {
    where: ArenaMatchScalarWhereInput
    data: XOR<ArenaMatchUpdateManyMutationInput, ArenaMatchUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type ArenaMatchScalarWhereInput = {
    AND?: ArenaMatchScalarWhereInput | ArenaMatchScalarWhereInput[]
    OR?: ArenaMatchScalarWhereInput[]
    NOT?: ArenaMatchScalarWhereInput | ArenaMatchScalarWhereInput[]
    id?: StringFilter<"ArenaMatch"> | string
    matchId?: StringFilter<"ArenaMatch"> | string
    player1Id?: StringFilter<"ArenaMatch"> | string
    player2Id?: StringFilter<"ArenaMatch"> | string
    difficulty?: StringFilter<"ArenaMatch"> | string
    status?: StringFilter<"ArenaMatch"> | string
    winnerId?: StringNullableFilter<"ArenaMatch"> | string | null
    player1Score?: IntFilter<"ArenaMatch"> | number
    player2Score?: IntFilter<"ArenaMatch"> | number
    player1Progress?: IntFilter<"ArenaMatch"> | number
    player2Progress?: IntFilter<"ArenaMatch"> | number
    problems?: JsonFilter<"ArenaMatch">
    results?: JsonNullableFilter<"ArenaMatch">
    createdAt?: DateTimeFilter<"ArenaMatch"> | Date | string
    startedAt?: DateTimeNullableFilter<"ArenaMatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ArenaMatch"> | Date | string | null
  }

  export type ArenaMatchUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: ArenaMatchWhereUniqueInput
    update: XOR<ArenaMatchUpdateWithoutPlayer2Input, ArenaMatchUncheckedUpdateWithoutPlayer2Input>
    create: XOR<ArenaMatchCreateWithoutPlayer2Input, ArenaMatchUncheckedCreateWithoutPlayer2Input>
  }

  export type ArenaMatchUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: ArenaMatchWhereUniqueInput
    data: XOR<ArenaMatchUpdateWithoutPlayer2Input, ArenaMatchUncheckedUpdateWithoutPlayer2Input>
  }

  export type ArenaMatchUpdateManyWithWhereWithoutPlayer2Input = {
    where: ArenaMatchScalarWhereInput
    data: XOR<ArenaMatchUpdateManyMutationInput, ArenaMatchUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type SolvedProblemCreateWithoutProblemInput = {
    id?: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedProblemsInput
  }

  export type SolvedProblemUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
  }

  export type SolvedProblemCreateOrConnectWithoutProblemInput = {
    where: SolvedProblemWhereUniqueInput
    create: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput>
  }

  export type SolvedProblemCreateManyProblemInputEnvelope = {
    data: SolvedProblemCreateManyProblemInput | SolvedProblemCreateManyProblemInput[]
  }

  export type SolvedProblemUpsertWithWhereUniqueWithoutProblemInput = {
    where: SolvedProblemWhereUniqueInput
    update: XOR<SolvedProblemUpdateWithoutProblemInput, SolvedProblemUncheckedUpdateWithoutProblemInput>
    create: XOR<SolvedProblemCreateWithoutProblemInput, SolvedProblemUncheckedCreateWithoutProblemInput>
  }

  export type SolvedProblemUpdateWithWhereUniqueWithoutProblemInput = {
    where: SolvedProblemWhereUniqueInput
    data: XOR<SolvedProblemUpdateWithoutProblemInput, SolvedProblemUncheckedUpdateWithoutProblemInput>
  }

  export type SolvedProblemUpdateManyWithWhereWithoutProblemInput = {
    where: SolvedProblemScalarWhereInput
    data: XOR<SolvedProblemUpdateManyMutationInput, SolvedProblemUncheckedUpdateManyWithoutProblemInput>
  }

  export type UserCreateWithoutSolvedProblemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutSolvedProblemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer1Input
    player2Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutSolvedProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
  }

  export type ProblemCreateWithoutSolvedByInput = {
    id?: string
    problemId: string
    title: string
    description: string
    difficulty: string
    category: string
    timeLimit?: number
    testCases: InputJsonValue
    starterCode: InputJsonValue
    solution?: string | null
    hints?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUncheckedCreateWithoutSolvedByInput = {
    id?: string
    problemId: string
    title: string
    description: string
    difficulty: string
    category: string
    timeLimit?: number
    testCases: InputJsonValue
    starterCode: InputJsonValue
    solution?: string | null
    hints?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemCreateOrConnectWithoutSolvedByInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
  }

  export type UserUpsertWithoutSolvedProblemsInput = {
    update: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolvedProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type UserUpdateWithoutSolvedProblemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutSolvedProblemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer1NestedInput
    player2Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type ProblemUpsertWithoutSolvedByInput = {
    update: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemUpdateWithoutSolvedByInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    testCases?: InputJsonValue | InputJsonValue
    starterCode?: InputJsonValue | InputJsonValue
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateWithoutSolvedByInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    testCases?: InputJsonValue | InputJsonValue
    starterCode?: InputJsonValue | InputJsonValue
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    hints?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPlayer1MatchesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    player2Matches?: ArenaMatchCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutPlayer1MatchesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    player2Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutPlayer1MatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayer1MatchesInput, UserUncheckedCreateWithoutPlayer1MatchesInput>
  }

  export type UserCreateWithoutPlayer2MatchesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchCreateNestedManyWithoutPlayer1Input
  }

  export type UserUncheckedCreateWithoutPlayer2MatchesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    rank?: number
    contestsCount?: number
    streakCount?: number
    lastSolvedDate?: Date | string | null
    problemsSolved?: number
    easyCount?: number
    mediumCount?: number
    hardCount?: number
    realWorldCount?: number
    arenaWins?: number
    arenaLosses?: number
    arenaTotalMatches?: number
    arenaRating?: number
    arenaWinStreak?: number
    arenaBestStreak?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: SolvedProblemUncheckedCreateNestedManyWithoutUserInput
    player1Matches?: ArenaMatchUncheckedCreateNestedManyWithoutPlayer1Input
  }

  export type UserCreateOrConnectWithoutPlayer2MatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayer2MatchesInput, UserUncheckedCreateWithoutPlayer2MatchesInput>
  }

  export type UserUpsertWithoutPlayer1MatchesInput = {
    update: XOR<UserUpdateWithoutPlayer1MatchesInput, UserUncheckedUpdateWithoutPlayer1MatchesInput>
    create: XOR<UserCreateWithoutPlayer1MatchesInput, UserUncheckedCreateWithoutPlayer1MatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayer1MatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayer1MatchesInput, UserUncheckedUpdateWithoutPlayer1MatchesInput>
  }

  export type UserUpdateWithoutPlayer1MatchesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    player2Matches?: ArenaMatchUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutPlayer1MatchesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    player2Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUpsertWithoutPlayer2MatchesInput = {
    update: XOR<UserUpdateWithoutPlayer2MatchesInput, UserUncheckedUpdateWithoutPlayer2MatchesInput>
    create: XOR<UserCreateWithoutPlayer2MatchesInput, UserUncheckedCreateWithoutPlayer2MatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayer2MatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayer2MatchesInput, UserUncheckedUpdateWithoutPlayer2MatchesInput>
  }

  export type UserUpdateWithoutPlayer2MatchesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUpdateManyWithoutPlayer1NestedInput
  }

  export type UserUncheckedUpdateWithoutPlayer2MatchesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: IntFieldUpdateOperationsInput | number
    contestsCount?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    lastSolvedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problemsSolved?: IntFieldUpdateOperationsInput | number
    easyCount?: IntFieldUpdateOperationsInput | number
    mediumCount?: IntFieldUpdateOperationsInput | number
    hardCount?: IntFieldUpdateOperationsInput | number
    realWorldCount?: IntFieldUpdateOperationsInput | number
    arenaWins?: IntFieldUpdateOperationsInput | number
    arenaLosses?: IntFieldUpdateOperationsInput | number
    arenaTotalMatches?: IntFieldUpdateOperationsInput | number
    arenaRating?: IntFieldUpdateOperationsInput | number
    arenaWinStreak?: IntFieldUpdateOperationsInput | number
    arenaBestStreak?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: SolvedProblemUncheckedUpdateManyWithoutUserNestedInput
    player1Matches?: ArenaMatchUncheckedUpdateManyWithoutPlayer1NestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SolvedProblemCreateManyUserInput = {
    id?: string
    problemId: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
  }

  export type ArenaMatchCreateManyPlayer1Input = {
    id?: string
    matchId: string
    player2Id: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ArenaMatchCreateManyPlayer2Input = {
    id?: string
    matchId: string
    player1Id: string
    difficulty: string
    status?: string
    winnerId?: string | null
    player1Score?: number
    player2Score?: number
    player1Progress?: number
    player2Progress?: number
    problems: InputJsonValue
    results?: InputJsonValue | null
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemUpdateWithoutUserInput = {
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type SolvedProblemUncheckedUpdateWithoutUserInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemUncheckedUpdateManyWithoutUserInput = {
    problemId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArenaMatchUpdateWithoutPlayer1Input = {
    matchId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player2?: UserUpdateOneRequiredWithoutPlayer2MatchesNestedInput
  }

  export type ArenaMatchUncheckedUpdateWithoutPlayer1Input = {
    matchId?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArenaMatchUncheckedUpdateManyWithoutPlayer1Input = {
    matchId?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArenaMatchUpdateWithoutPlayer2Input = {
    matchId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    player1?: UserUpdateOneRequiredWithoutPlayer1MatchesNestedInput
  }

  export type ArenaMatchUncheckedUpdateWithoutPlayer2Input = {
    matchId?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArenaMatchUncheckedUpdateManyWithoutPlayer2Input = {
    matchId?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    player1Score?: IntFieldUpdateOperationsInput | number
    player2Score?: IntFieldUpdateOperationsInput | number
    player1Progress?: IntFieldUpdateOperationsInput | number
    player2Progress?: IntFieldUpdateOperationsInput | number
    problems?: InputJsonValue | InputJsonValue
    results?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SolvedProblemCreateManyProblemInput = {
    id?: string
    userId: string
    difficulty: string
    language: string
    code: string
    solvedAt?: Date | string
  }

  export type SolvedProblemUpdateWithoutProblemInput = {
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedProblemsNestedInput
  }

  export type SolvedProblemUncheckedUpdateWithoutProblemInput = {
    userId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedProblemUncheckedUpdateManyWithoutProblemInput = {
    userId?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    solvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}