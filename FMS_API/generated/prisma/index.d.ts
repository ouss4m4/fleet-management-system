
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
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model MaintenanceRecord
 * 
 */
export type MaintenanceRecord = $Result.DefaultSelection<Prisma.$MaintenanceRecordPayload>
/**
 * Model Sensor
 * 
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>
/**
 * Model Telemetry
 * 
 */
export type Telemetry = $Result.DefaultSelection<Prisma.$TelemetryPayload>
/**
 * Model VehicleAnalytics
 * 
 */
export type VehicleAnalytics = $Result.DefaultSelection<Prisma.$VehicleAnalyticsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vehicles
 * const vehicles = await prisma.vehicle.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceRecord`: Exposes CRUD operations for the **MaintenanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceRecords
    * const maintenanceRecords = await prisma.maintenanceRecord.findMany()
    * ```
    */
  get maintenanceRecord(): Prisma.MaintenanceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensor.findMany()
    * ```
    */
  get sensor(): Prisma.SensorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telemetry`: Exposes CRUD operations for the **Telemetry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telemetries
    * const telemetries = await prisma.telemetry.findMany()
    * ```
    */
  get telemetry(): Prisma.TelemetryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleAnalytics`: Exposes CRUD operations for the **VehicleAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleAnalytics
    * const vehicleAnalytics = await prisma.vehicleAnalytics.findMany()
    * ```
    */
  get vehicleAnalytics(): Prisma.VehicleAnalyticsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Vehicle: 'Vehicle',
    MaintenanceRecord: 'MaintenanceRecord',
    Sensor: 'Sensor',
    Telemetry: 'Telemetry',
    VehicleAnalytics: 'VehicleAnalytics'
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
      modelProps: "vehicle" | "maintenanceRecord" | "sensor" | "telemetry" | "vehicleAnalytics"
      txIsolationLevel: never
    }
    model: {
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VehicleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VehicleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRecord: {
        payload: Prisma.$MaintenanceRecordPayload<ExtArgs>
        fields: Prisma.MaintenanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaintenanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          update: {
            args: Prisma.MaintenanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRecord>
          }
          groupBy: {
            args: Prisma.MaintenanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MaintenanceRecordFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MaintenanceRecordAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MaintenanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRecordCountAggregateOutputType> | number
          }
        }
      }
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>
        fields: Prisma.SensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensor>
          }
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SensorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SensorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>
            result: $Utils.Optional<SensorCountAggregateOutputType> | number
          }
        }
      }
      Telemetry: {
        payload: Prisma.$TelemetryPayload<ExtArgs>
        fields: Prisma.TelemetryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelemetryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelemetryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          findFirst: {
            args: Prisma.TelemetryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelemetryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          findMany: {
            args: Prisma.TelemetryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>[]
          }
          create: {
            args: Prisma.TelemetryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          createMany: {
            args: Prisma.TelemetryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TelemetryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          update: {
            args: Prisma.TelemetryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          deleteMany: {
            args: Prisma.TelemetryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelemetryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TelemetryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          aggregate: {
            args: Prisma.TelemetryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelemetry>
          }
          groupBy: {
            args: Prisma.TelemetryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelemetryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TelemetryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TelemetryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TelemetryCountArgs<ExtArgs>
            result: $Utils.Optional<TelemetryCountAggregateOutputType> | number
          }
        }
      }
      VehicleAnalytics: {
        payload: Prisma.$VehicleAnalyticsPayload<ExtArgs>
        fields: Prisma.VehicleAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.VehicleAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload>
          }
          findMany: {
            args: Prisma.VehicleAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload>[]
          }
          create: {
            args: Prisma.VehicleAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload>
          }
          createMany: {
            args: Prisma.VehicleAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload>
          }
          update: {
            args: Prisma.VehicleAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.VehicleAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.VehicleAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleAnalytics>
          }
          groupBy: {
            args: Prisma.VehicleAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleAnalyticsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VehicleAnalyticsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VehicleAnalyticsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VehicleAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleAnalyticsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    vehicle?: VehicleOmit
    maintenanceRecord?: MaintenanceRecordOmit
    sensor?: SensorOmit
    telemetry?: TelemetryOmit
    vehicleAnalytics?: VehicleAnalyticsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    maintenanceRecords: number
    sensors: number
    analytics: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRecords?: boolean | VehicleCountOutputTypeCountMaintenanceRecordsArgs
    sensors?: boolean | VehicleCountOutputTypeCountSensorsArgs
    analytics?: boolean | VehicleCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleAnalyticsWhereInput
  }


  /**
   * Count Type SensorCountOutputType
   */

  export type SensorCountOutputType = {
    readings: number
  }

  export type SensorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | SensorCountOutputTypeCountReadingsArgs
  }

  // Custom InputTypes
  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorCountOutputType
     */
    select?: SensorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    type: string | null
    region: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    type: string | null
    region: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    name: number
    model: number
    type: number
    region: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    type?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    type?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    type?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    type?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceRecords?: boolean | Vehicle$maintenanceRecordsArgs<ExtArgs>
    sensors?: boolean | Vehicle$sensorsArgs<ExtArgs>
    analytics?: boolean | Vehicle$analyticsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>



  export type VehicleSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    type?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "type" | "region" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRecords?: boolean | Vehicle$maintenanceRecordsArgs<ExtArgs>
    sensors?: boolean | Vehicle$sensorsArgs<ExtArgs>
    analytics?: boolean | Vehicle$analyticsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      maintenanceRecords: Prisma.$MaintenanceRecordPayload<ExtArgs>[]
      sensors: Prisma.$SensorPayload<ExtArgs>[]
      analytics: Prisma.$VehicleAnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      model: string
      type: string
      region: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * @param {VehicleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VehicleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vehicle.
     * @param {VehicleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vehicle = await prisma.vehicle.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VehicleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maintenanceRecords<T extends Vehicle$maintenanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sensors<T extends Vehicle$sensorsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$sensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends Vehicle$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly name: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly type: FieldRef<"Vehicle", 'String'>
    readonly region: FieldRef<"Vehicle", 'String'>
    readonly status: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle findRaw
   */
  export type VehicleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Vehicle aggregateRaw
   */
  export type VehicleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Vehicle.maintenanceRecords
   */
  export type Vehicle$maintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    cursor?: MaintenanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * Vehicle.sensors
   */
  export type Vehicle$sensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Vehicle.analytics
   */
  export type Vehicle$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    where?: VehicleAnalyticsWhereInput
    orderBy?: VehicleAnalyticsOrderByWithRelationInput | VehicleAnalyticsOrderByWithRelationInput[]
    cursor?: VehicleAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleAnalyticsScalarFieldEnum | VehicleAnalyticsScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceRecord
   */

  export type AggregateMaintenanceRecord = {
    _count: MaintenanceRecordCountAggregateOutputType | null
    _avg: MaintenanceRecordAvgAggregateOutputType | null
    _sum: MaintenanceRecordSumAggregateOutputType | null
    _min: MaintenanceRecordMinAggregateOutputType | null
    _max: MaintenanceRecordMaxAggregateOutputType | null
  }

  export type MaintenanceRecordAvgAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceRecordSumAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceRecordMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    date: Date | null
    description: string | null
    cost: number | null
  }

  export type MaintenanceRecordMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    date: Date | null
    description: string | null
    cost: number | null
  }

  export type MaintenanceRecordCountAggregateOutputType = {
    id: number
    vehicleId: number
    date: number
    description: number
    cost: number
    _all: number
  }


  export type MaintenanceRecordAvgAggregateInputType = {
    cost?: true
  }

  export type MaintenanceRecordSumAggregateInputType = {
    cost?: true
  }

  export type MaintenanceRecordMinAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    description?: true
    cost?: true
  }

  export type MaintenanceRecordMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    description?: true
    cost?: true
  }

  export type MaintenanceRecordCountAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    description?: true
    cost?: true
    _all?: true
  }

  export type MaintenanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRecord to aggregate.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceRecords
    **/
    _count?: true | MaintenanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceRecordMaxAggregateInputType
  }

  export type GetMaintenanceRecordAggregateType<T extends MaintenanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRecord[P]>
      : GetScalarType<T[P], AggregateMaintenanceRecord[P]>
  }




  export type MaintenanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithAggregationInput | MaintenanceRecordOrderByWithAggregationInput[]
    by: MaintenanceRecordScalarFieldEnum[] | MaintenanceRecordScalarFieldEnum
    having?: MaintenanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRecordCountAggregateInputType | true
    _avg?: MaintenanceRecordAvgAggregateInputType
    _sum?: MaintenanceRecordSumAggregateInputType
    _min?: MaintenanceRecordMinAggregateInputType
    _max?: MaintenanceRecordMaxAggregateInputType
  }

  export type MaintenanceRecordGroupByOutputType = {
    id: string
    vehicleId: string
    date: Date
    description: string
    cost: number
    _count: MaintenanceRecordCountAggregateOutputType | null
    _avg: MaintenanceRecordAvgAggregateOutputType | null
    _sum: MaintenanceRecordSumAggregateOutputType | null
    _min: MaintenanceRecordMinAggregateOutputType | null
    _max: MaintenanceRecordMaxAggregateOutputType | null
  }

  type GetMaintenanceRecordGroupByPayload<T extends MaintenanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    description?: boolean
    cost?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRecord"]>



  export type MaintenanceRecordSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    description?: boolean
    cost?: boolean
  }

  export type MaintenanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "date" | "description" | "cost", ExtArgs["result"]["maintenanceRecord"]>
  export type MaintenanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MaintenanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceRecord"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      date: Date
      description: string
      cost: number
    }, ExtArgs["result"]["maintenanceRecord"]>
    composites: {}
  }

  type MaintenanceRecordGetPayload<S extends boolean | null | undefined | MaintenanceRecordDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceRecordPayload, S>

  type MaintenanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceRecordCountAggregateInputType | true
    }

  export interface MaintenanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRecord'], meta: { name: 'MaintenanceRecord' } }
    /**
     * Find zero or one MaintenanceRecord that matches the filter.
     * @param {MaintenanceRecordFindUniqueArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRecordFindUniqueArgs>(args: SelectSubset<T, MaintenanceRecordFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceRecordFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindFirstArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRecordFindFirstArgs>(args?: SelectSubset<T, MaintenanceRecordFindFirstArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRecords
     * const maintenanceRecords = await prisma.maintenanceRecord.findMany()
     * 
     * // Get first 10 MaintenanceRecords
     * const maintenanceRecords = await prisma.maintenanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceRecordWithIdOnly = await prisma.maintenanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceRecordFindManyArgs>(args?: SelectSubset<T, MaintenanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceRecord.
     * @param {MaintenanceRecordCreateArgs} args - Arguments to create a MaintenanceRecord.
     * @example
     * // Create one MaintenanceRecord
     * const MaintenanceRecord = await prisma.maintenanceRecord.create({
     *   data: {
     *     // ... data to create a MaintenanceRecord
     *   }
     * })
     * 
     */
    create<T extends MaintenanceRecordCreateArgs>(args: SelectSubset<T, MaintenanceRecordCreateArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceRecords.
     * @param {MaintenanceRecordCreateManyArgs} args - Arguments to create many MaintenanceRecords.
     * @example
     * // Create many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceRecordCreateManyArgs>(args?: SelectSubset<T, MaintenanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaintenanceRecord.
     * @param {MaintenanceRecordDeleteArgs} args - Arguments to delete one MaintenanceRecord.
     * @example
     * // Delete one MaintenanceRecord
     * const MaintenanceRecord = await prisma.maintenanceRecord.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRecord
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceRecordDeleteArgs>(args: SelectSubset<T, MaintenanceRecordDeleteArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceRecord.
     * @param {MaintenanceRecordUpdateArgs} args - Arguments to update one MaintenanceRecord.
     * @example
     * // Update one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceRecordUpdateArgs>(args: SelectSubset<T, MaintenanceRecordUpdateArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceRecords.
     * @param {MaintenanceRecordDeleteManyArgs} args - Arguments to filter MaintenanceRecords to delete.
     * @example
     * // Delete a few MaintenanceRecords
     * const { count } = await prisma.maintenanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceRecordDeleteManyArgs>(args?: SelectSubset<T, MaintenanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceRecordUpdateManyArgs>(args: SelectSubset<T, MaintenanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceRecord.
     * @param {MaintenanceRecordUpsertArgs} args - Arguments to update or create a MaintenanceRecord.
     * @example
     * // Update or create a MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRecordUpsertArgs>(args: SelectSubset<T, MaintenanceRecordUpsertArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceRecords that matches the filter.
     * @param {MaintenanceRecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const maintenanceRecord = await prisma.maintenanceRecord.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MaintenanceRecordFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MaintenanceRecord.
     * @param {MaintenanceRecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const maintenanceRecord = await prisma.maintenanceRecord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MaintenanceRecordAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MaintenanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordCountArgs} args - Arguments to filter MaintenanceRecords to count.
     * @example
     * // Count the number of MaintenanceRecords
     * const count = await prisma.maintenanceRecord.count({
     *   where: {
     *     // ... the filter for the MaintenanceRecords we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceRecordCountArgs>(
      args?: Subset<T, MaintenanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceRecordAggregateArgs>(args: Subset<T, MaintenanceRecordAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRecordAggregateType<T>>

    /**
     * Group by MaintenanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceRecord model
   */
  readonly fields: MaintenanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaintenanceRecord model
   */
  interface MaintenanceRecordFieldRefs {
    readonly id: FieldRef<"MaintenanceRecord", 'String'>
    readonly vehicleId: FieldRef<"MaintenanceRecord", 'String'>
    readonly date: FieldRef<"MaintenanceRecord", 'DateTime'>
    readonly description: FieldRef<"MaintenanceRecord", 'String'>
    readonly cost: FieldRef<"MaintenanceRecord", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceRecord findUnique
   */
  export type MaintenanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord findUniqueOrThrow
   */
  export type MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord findFirst
   */
  export type MaintenanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRecords.
     */
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord findFirstOrThrow
   */
  export type MaintenanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRecords.
     */
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord findMany
   */
  export type MaintenanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecords to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord create
   */
  export type MaintenanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRecord.
     */
    data: XOR<MaintenanceRecordCreateInput, MaintenanceRecordUncheckedCreateInput>
  }

  /**
   * MaintenanceRecord createMany
   */
  export type MaintenanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceRecords.
     */
    data: MaintenanceRecordCreateManyInput | MaintenanceRecordCreateManyInput[]
  }

  /**
   * MaintenanceRecord update
   */
  export type MaintenanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRecord.
     */
    data: XOR<MaintenanceRecordUpdateInput, MaintenanceRecordUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceRecord to update.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord updateMany
   */
  export type MaintenanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceRecords.
     */
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRecords to update
     */
    where?: MaintenanceRecordWhereInput
    /**
     * Limit how many MaintenanceRecords to update.
     */
    limit?: number
  }

  /**
   * MaintenanceRecord upsert
   */
  export type MaintenanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRecord to update in case it exists.
     */
    where: MaintenanceRecordWhereUniqueInput
    /**
     * In case the MaintenanceRecord found by the `where` argument doesn't exist, create a new MaintenanceRecord with this data.
     */
    create: XOR<MaintenanceRecordCreateInput, MaintenanceRecordUncheckedCreateInput>
    /**
     * In case the MaintenanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceRecordUpdateInput, MaintenanceRecordUncheckedUpdateInput>
  }

  /**
   * MaintenanceRecord delete
   */
  export type MaintenanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRecord to delete.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord deleteMany
   */
  export type MaintenanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRecords to delete
     */
    where?: MaintenanceRecordWhereInput
    /**
     * Limit how many MaintenanceRecords to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceRecord findRaw
   */
  export type MaintenanceRecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MaintenanceRecord aggregateRaw
   */
  export type MaintenanceRecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MaintenanceRecord without action
   */
  export type MaintenanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
  }


  /**
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  export type SensorMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    name: string | null
    type: string | null
    unit: string | null
    createdAt: Date | null
  }

  export type SensorMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    name: string | null
    type: string | null
    unit: string | null
    createdAt: Date | null
  }

  export type SensorCountAggregateOutputType = {
    id: number
    vehicleId: number
    name: number
    type: number
    unit: number
    createdAt: number
    _all: number
  }


  export type SensorMinAggregateInputType = {
    id?: true
    vehicleId?: true
    name?: true
    type?: true
    unit?: true
    createdAt?: true
  }

  export type SensorMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    name?: true
    type?: true
    unit?: true
    createdAt?: true
  }

  export type SensorCountAggregateInputType = {
    id?: true
    vehicleId?: true
    name?: true
    type?: true
    unit?: true
    createdAt?: true
    _all?: true
  }

  export type SensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sensors
    **/
    _count?: true | SensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMaxAggregateInputType
  }

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
        [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>
  }




  export type SensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithAggregationInput | SensorOrderByWithAggregationInput[]
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum
    having?: SensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorCountAggregateInputType | true
    _min?: SensorMinAggregateInputType
    _max?: SensorMaxAggregateInputType
  }

  export type SensorGroupByOutputType = {
    id: string
    vehicleId: string
    name: string
    type: string
    unit: string
    createdAt: Date
    _count: SensorCountAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>
        }
      >
    >


  export type SensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    name?: boolean
    type?: boolean
    unit?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    readings?: boolean | Sensor$readingsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>



  export type SensorSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    name?: boolean
    type?: boolean
    unit?: boolean
    createdAt?: boolean
  }

  export type SensorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "name" | "type" | "unit" | "createdAt", ExtArgs["result"]["sensor"]>
  export type SensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    readings?: boolean | Sensor$readingsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sensor"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      readings: Prisma.$TelemetryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      name: string
      type: string
      unit: string
      createdAt: Date
    }, ExtArgs["result"]["sensor"]>
    composites: {}
  }

  type SensorGetPayload<S extends boolean | null | undefined | SensorDefaultArgs> = $Result.GetResult<Prisma.$SensorPayload, S>

  type SensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorCountAggregateInputType | true
    }

  export interface SensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sensor'], meta: { name: 'Sensor' } }
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorFindUniqueArgs>(args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorFindFirstArgs>(args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorFindManyArgs>(args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     * 
     */
    create<T extends SensorCreateArgs>(args: SelectSubset<T, SensorCreateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sensors.
     * @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorCreateManyArgs>(args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     * 
     */
    delete<T extends SensorDeleteArgs>(args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorUpdateArgs>(args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDeleteManyArgs>(args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorUpdateManyArgs>(args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
     */
    upsert<T extends SensorUpsertArgs>(args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * @param {SensorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sensor = await prisma.sensor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SensorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sensor.
     * @param {SensorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sensor = await prisma.sensor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SensorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorAggregateArgs>(args: Subset<T, SensorAggregateArgs>): Prisma.PrismaPromise<GetSensorAggregateType<T>>

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
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
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sensor model
   */
  readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    readings<T extends Sensor$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sensor model
   */
  interface SensorFieldRefs {
    readonly id: FieldRef<"Sensor", 'String'>
    readonly vehicleId: FieldRef<"Sensor", 'String'>
    readonly name: FieldRef<"Sensor", 'String'>
    readonly type: FieldRef<"Sensor", 'String'>
    readonly unit: FieldRef<"Sensor", 'String'>
    readonly createdAt: FieldRef<"Sensor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor create
   */
  export type SensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>
  }

  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
  }

  /**
   * Sensor update
   */
  export type SensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
  }

  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
  }

  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to delete.
     */
    limit?: number
  }

  /**
   * Sensor findRaw
   */
  export type SensorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Sensor aggregateRaw
   */
  export type SensorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Sensor.readings
   */
  export type Sensor$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    where?: TelemetryWhereInput
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    cursor?: TelemetryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelemetryScalarFieldEnum | TelemetryScalarFieldEnum[]
  }

  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
  }


  /**
   * Model Telemetry
   */

  export type AggregateTelemetry = {
    _count: TelemetryCountAggregateOutputType | null
    _min: TelemetryMinAggregateOutputType | null
    _max: TelemetryMaxAggregateOutputType | null
  }

  export type TelemetryMinAggregateOutputType = {
    id: string | null
    sensorId: string | null
    timestamp: Date | null
  }

  export type TelemetryMaxAggregateOutputType = {
    id: string | null
    sensorId: string | null
    timestamp: Date | null
  }

  export type TelemetryCountAggregateOutputType = {
    id: number
    sensorId: number
    payload: number
    timestamp: number
    _all: number
  }


  export type TelemetryMinAggregateInputType = {
    id?: true
    sensorId?: true
    timestamp?: true
  }

  export type TelemetryMaxAggregateInputType = {
    id?: true
    sensorId?: true
    timestamp?: true
  }

  export type TelemetryCountAggregateInputType = {
    id?: true
    sensorId?: true
    payload?: true
    timestamp?: true
    _all?: true
  }

  export type TelemetryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telemetry to aggregate.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telemetries
    **/
    _count?: true | TelemetryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelemetryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelemetryMaxAggregateInputType
  }

  export type GetTelemetryAggregateType<T extends TelemetryAggregateArgs> = {
        [P in keyof T & keyof AggregateTelemetry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelemetry[P]>
      : GetScalarType<T[P], AggregateTelemetry[P]>
  }




  export type TelemetryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryWhereInput
    orderBy?: TelemetryOrderByWithAggregationInput | TelemetryOrderByWithAggregationInput[]
    by: TelemetryScalarFieldEnum[] | TelemetryScalarFieldEnum
    having?: TelemetryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelemetryCountAggregateInputType | true
    _min?: TelemetryMinAggregateInputType
    _max?: TelemetryMaxAggregateInputType
  }

  export type TelemetryGroupByOutputType = {
    id: string
    sensorId: string
    payload: JsonValue
    timestamp: Date
    _count: TelemetryCountAggregateOutputType | null
    _min: TelemetryMinAggregateOutputType | null
    _max: TelemetryMaxAggregateOutputType | null
  }

  type GetTelemetryGroupByPayload<T extends TelemetryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelemetryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelemetryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelemetryGroupByOutputType[P]>
            : GetScalarType<T[P], TelemetryGroupByOutputType[P]>
        }
      >
    >


  export type TelemetrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorId?: boolean
    payload?: boolean
    timestamp?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telemetry"]>



  export type TelemetrySelectScalar = {
    id?: boolean
    sensorId?: boolean
    payload?: boolean
    timestamp?: boolean
  }

  export type TelemetryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sensorId" | "payload" | "timestamp", ExtArgs["result"]["telemetry"]>
  export type TelemetryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $TelemetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telemetry"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorId: string
      payload: Prisma.JsonValue
      timestamp: Date
    }, ExtArgs["result"]["telemetry"]>
    composites: {}
  }

  type TelemetryGetPayload<S extends boolean | null | undefined | TelemetryDefaultArgs> = $Result.GetResult<Prisma.$TelemetryPayload, S>

  type TelemetryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelemetryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelemetryCountAggregateInputType | true
    }

  export interface TelemetryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telemetry'], meta: { name: 'Telemetry' } }
    /**
     * Find zero or one Telemetry that matches the filter.
     * @param {TelemetryFindUniqueArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelemetryFindUniqueArgs>(args: SelectSubset<T, TelemetryFindUniqueArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telemetry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelemetryFindUniqueOrThrowArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelemetryFindUniqueOrThrowArgs>(args: SelectSubset<T, TelemetryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telemetry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryFindFirstArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelemetryFindFirstArgs>(args?: SelectSubset<T, TelemetryFindFirstArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telemetry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryFindFirstOrThrowArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelemetryFindFirstOrThrowArgs>(args?: SelectSubset<T, TelemetryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telemetries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telemetries
     * const telemetries = await prisma.telemetry.findMany()
     * 
     * // Get first 10 Telemetries
     * const telemetries = await prisma.telemetry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telemetryWithIdOnly = await prisma.telemetry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelemetryFindManyArgs>(args?: SelectSubset<T, TelemetryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telemetry.
     * @param {TelemetryCreateArgs} args - Arguments to create a Telemetry.
     * @example
     * // Create one Telemetry
     * const Telemetry = await prisma.telemetry.create({
     *   data: {
     *     // ... data to create a Telemetry
     *   }
     * })
     * 
     */
    create<T extends TelemetryCreateArgs>(args: SelectSubset<T, TelemetryCreateArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telemetries.
     * @param {TelemetryCreateManyArgs} args - Arguments to create many Telemetries.
     * @example
     * // Create many Telemetries
     * const telemetry = await prisma.telemetry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelemetryCreateManyArgs>(args?: SelectSubset<T, TelemetryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Telemetry.
     * @param {TelemetryDeleteArgs} args - Arguments to delete one Telemetry.
     * @example
     * // Delete one Telemetry
     * const Telemetry = await prisma.telemetry.delete({
     *   where: {
     *     // ... filter to delete one Telemetry
     *   }
     * })
     * 
     */
    delete<T extends TelemetryDeleteArgs>(args: SelectSubset<T, TelemetryDeleteArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telemetry.
     * @param {TelemetryUpdateArgs} args - Arguments to update one Telemetry.
     * @example
     * // Update one Telemetry
     * const telemetry = await prisma.telemetry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelemetryUpdateArgs>(args: SelectSubset<T, TelemetryUpdateArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telemetries.
     * @param {TelemetryDeleteManyArgs} args - Arguments to filter Telemetries to delete.
     * @example
     * // Delete a few Telemetries
     * const { count } = await prisma.telemetry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelemetryDeleteManyArgs>(args?: SelectSubset<T, TelemetryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telemetries
     * const telemetry = await prisma.telemetry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelemetryUpdateManyArgs>(args: SelectSubset<T, TelemetryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Telemetry.
     * @param {TelemetryUpsertArgs} args - Arguments to update or create a Telemetry.
     * @example
     * // Update or create a Telemetry
     * const telemetry = await prisma.telemetry.upsert({
     *   create: {
     *     // ... data to create a Telemetry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telemetry we want to update
     *   }
     * })
     */
    upsert<T extends TelemetryUpsertArgs>(args: SelectSubset<T, TelemetryUpsertArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telemetries that matches the filter.
     * @param {TelemetryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const telemetry = await prisma.telemetry.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TelemetryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Telemetry.
     * @param {TelemetryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const telemetry = await prisma.telemetry.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TelemetryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Telemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryCountArgs} args - Arguments to filter Telemetries to count.
     * @example
     * // Count the number of Telemetries
     * const count = await prisma.telemetry.count({
     *   where: {
     *     // ... the filter for the Telemetries we want to count
     *   }
     * })
    **/
    count<T extends TelemetryCountArgs>(
      args?: Subset<T, TelemetryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelemetryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelemetryAggregateArgs>(args: Subset<T, TelemetryAggregateArgs>): Prisma.PrismaPromise<GetTelemetryAggregateType<T>>

    /**
     * Group by Telemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryGroupByArgs} args - Group by arguments.
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
      T extends TelemetryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelemetryGroupByArgs['orderBy'] }
        : { orderBy?: TelemetryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelemetryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelemetryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telemetry model
   */
  readonly fields: TelemetryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telemetry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelemetryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Telemetry model
   */
  interface TelemetryFieldRefs {
    readonly id: FieldRef<"Telemetry", 'String'>
    readonly sensorId: FieldRef<"Telemetry", 'String'>
    readonly payload: FieldRef<"Telemetry", 'Json'>
    readonly timestamp: FieldRef<"Telemetry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Telemetry findUnique
   */
  export type TelemetryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry findUniqueOrThrow
   */
  export type TelemetryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry findFirst
   */
  export type TelemetryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telemetries.
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telemetries.
     */
    distinct?: TelemetryScalarFieldEnum | TelemetryScalarFieldEnum[]
  }

  /**
   * Telemetry findFirstOrThrow
   */
  export type TelemetryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telemetries.
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telemetries.
     */
    distinct?: TelemetryScalarFieldEnum | TelemetryScalarFieldEnum[]
  }

  /**
   * Telemetry findMany
   */
  export type TelemetryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetries to fetch.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telemetries.
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    distinct?: TelemetryScalarFieldEnum | TelemetryScalarFieldEnum[]
  }

  /**
   * Telemetry create
   */
  export type TelemetryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * The data needed to create a Telemetry.
     */
    data: XOR<TelemetryCreateInput, TelemetryUncheckedCreateInput>
  }

  /**
   * Telemetry createMany
   */
  export type TelemetryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Telemetries.
     */
    data: TelemetryCreateManyInput | TelemetryCreateManyInput[]
  }

  /**
   * Telemetry update
   */
  export type TelemetryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * The data needed to update a Telemetry.
     */
    data: XOR<TelemetryUpdateInput, TelemetryUncheckedUpdateInput>
    /**
     * Choose, which Telemetry to update.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry updateMany
   */
  export type TelemetryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telemetries.
     */
    data: XOR<TelemetryUpdateManyMutationInput, TelemetryUncheckedUpdateManyInput>
    /**
     * Filter which Telemetries to update
     */
    where?: TelemetryWhereInput
    /**
     * Limit how many Telemetries to update.
     */
    limit?: number
  }

  /**
   * Telemetry upsert
   */
  export type TelemetryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * The filter to search for the Telemetry to update in case it exists.
     */
    where: TelemetryWhereUniqueInput
    /**
     * In case the Telemetry found by the `where` argument doesn't exist, create a new Telemetry with this data.
     */
    create: XOR<TelemetryCreateInput, TelemetryUncheckedCreateInput>
    /**
     * In case the Telemetry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelemetryUpdateInput, TelemetryUncheckedUpdateInput>
  }

  /**
   * Telemetry delete
   */
  export type TelemetryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter which Telemetry to delete.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry deleteMany
   */
  export type TelemetryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telemetries to delete
     */
    where?: TelemetryWhereInput
    /**
     * Limit how many Telemetries to delete.
     */
    limit?: number
  }

  /**
   * Telemetry findRaw
   */
  export type TelemetryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Telemetry aggregateRaw
   */
  export type TelemetryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Telemetry without action
   */
  export type TelemetryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
  }


  /**
   * Model VehicleAnalytics
   */

  export type AggregateVehicleAnalytics = {
    _count: VehicleAnalyticsCountAggregateOutputType | null
    _avg: VehicleAnalyticsAvgAggregateOutputType | null
    _sum: VehicleAnalyticsSumAggregateOutputType | null
    _min: VehicleAnalyticsMinAggregateOutputType | null
    _max: VehicleAnalyticsMaxAggregateOutputType | null
  }

  export type VehicleAnalyticsAvgAggregateOutputType = {
    hoursOperated: number | null
    distanceTraveled: number | null
    speed: number | null
  }

  export type VehicleAnalyticsSumAggregateOutputType = {
    hoursOperated: number | null
    distanceTraveled: number | null
    speed: number | null
  }

  export type VehicleAnalyticsMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    hoursOperated: number | null
    distanceTraveled: number | null
    speed: number | null
    lastUpdated: Date | null
  }

  export type VehicleAnalyticsMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    hoursOperated: number | null
    distanceTraveled: number | null
    speed: number | null
    lastUpdated: Date | null
  }

  export type VehicleAnalyticsCountAggregateOutputType = {
    id: number
    vehicleId: number
    hoursOperated: number
    distanceTraveled: number
    location: number
    speed: number
    lastUpdated: number
    _all: number
  }


  export type VehicleAnalyticsAvgAggregateInputType = {
    hoursOperated?: true
    distanceTraveled?: true
    speed?: true
  }

  export type VehicleAnalyticsSumAggregateInputType = {
    hoursOperated?: true
    distanceTraveled?: true
    speed?: true
  }

  export type VehicleAnalyticsMinAggregateInputType = {
    id?: true
    vehicleId?: true
    hoursOperated?: true
    distanceTraveled?: true
    speed?: true
    lastUpdated?: true
  }

  export type VehicleAnalyticsMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    hoursOperated?: true
    distanceTraveled?: true
    speed?: true
    lastUpdated?: true
  }

  export type VehicleAnalyticsCountAggregateInputType = {
    id?: true
    vehicleId?: true
    hoursOperated?: true
    distanceTraveled?: true
    location?: true
    speed?: true
    lastUpdated?: true
    _all?: true
  }

  export type VehicleAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleAnalytics to aggregate.
     */
    where?: VehicleAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAnalytics to fetch.
     */
    orderBy?: VehicleAnalyticsOrderByWithRelationInput | VehicleAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleAnalytics
    **/
    _count?: true | VehicleAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleAnalyticsMaxAggregateInputType
  }

  export type GetVehicleAnalyticsAggregateType<T extends VehicleAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleAnalytics[P]>
      : GetScalarType<T[P], AggregateVehicleAnalytics[P]>
  }




  export type VehicleAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleAnalyticsWhereInput
    orderBy?: VehicleAnalyticsOrderByWithAggregationInput | VehicleAnalyticsOrderByWithAggregationInput[]
    by: VehicleAnalyticsScalarFieldEnum[] | VehicleAnalyticsScalarFieldEnum
    having?: VehicleAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleAnalyticsCountAggregateInputType | true
    _avg?: VehicleAnalyticsAvgAggregateInputType
    _sum?: VehicleAnalyticsSumAggregateInputType
    _min?: VehicleAnalyticsMinAggregateInputType
    _max?: VehicleAnalyticsMaxAggregateInputType
  }

  export type VehicleAnalyticsGroupByOutputType = {
    id: string
    vehicleId: string
    hoursOperated: number
    distanceTraveled: number
    location: JsonValue
    speed: number
    lastUpdated: Date
    _count: VehicleAnalyticsCountAggregateOutputType | null
    _avg: VehicleAnalyticsAvgAggregateOutputType | null
    _sum: VehicleAnalyticsSumAggregateOutputType | null
    _min: VehicleAnalyticsMinAggregateOutputType | null
    _max: VehicleAnalyticsMaxAggregateOutputType | null
  }

  type GetVehicleAnalyticsGroupByPayload<T extends VehicleAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type VehicleAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    hoursOperated?: boolean
    distanceTraveled?: boolean
    location?: boolean
    speed?: boolean
    lastUpdated?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleAnalytics"]>



  export type VehicleAnalyticsSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    hoursOperated?: boolean
    distanceTraveled?: boolean
    location?: boolean
    speed?: boolean
    lastUpdated?: boolean
  }

  export type VehicleAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "hoursOperated" | "distanceTraveled" | "location" | "speed" | "lastUpdated", ExtArgs["result"]["vehicleAnalytics"]>
  export type VehicleAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleAnalytics"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      hoursOperated: number
      distanceTraveled: number
      location: Prisma.JsonValue
      speed: number
      lastUpdated: Date
    }, ExtArgs["result"]["vehicleAnalytics"]>
    composites: {}
  }

  type VehicleAnalyticsGetPayload<S extends boolean | null | undefined | VehicleAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$VehicleAnalyticsPayload, S>

  type VehicleAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleAnalyticsCountAggregateInputType | true
    }

  export interface VehicleAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleAnalytics'], meta: { name: 'VehicleAnalytics' } }
    /**
     * Find zero or one VehicleAnalytics that matches the filter.
     * @param {VehicleAnalyticsFindUniqueArgs} args - Arguments to find a VehicleAnalytics
     * @example
     * // Get one VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleAnalyticsFindUniqueArgs>(args: SelectSubset<T, VehicleAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a VehicleAnalytics
     * @example
     * // Get one VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAnalyticsFindFirstArgs} args - Arguments to find a VehicleAnalytics
     * @example
     * // Get one VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleAnalyticsFindFirstArgs>(args?: SelectSubset<T, VehicleAnalyticsFindFirstArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAnalyticsFindFirstOrThrowArgs} args - Arguments to find a VehicleAnalytics
     * @example
     * // Get one VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.findMany()
     * 
     * // Get first 10 VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleAnalyticsWithIdOnly = await prisma.vehicleAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleAnalyticsFindManyArgs>(args?: SelectSubset<T, VehicleAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleAnalytics.
     * @param {VehicleAnalyticsCreateArgs} args - Arguments to create a VehicleAnalytics.
     * @example
     * // Create one VehicleAnalytics
     * const VehicleAnalytics = await prisma.vehicleAnalytics.create({
     *   data: {
     *     // ... data to create a VehicleAnalytics
     *   }
     * })
     * 
     */
    create<T extends VehicleAnalyticsCreateArgs>(args: SelectSubset<T, VehicleAnalyticsCreateArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleAnalytics.
     * @param {VehicleAnalyticsCreateManyArgs} args - Arguments to create many VehicleAnalytics.
     * @example
     * // Create many VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleAnalyticsCreateManyArgs>(args?: SelectSubset<T, VehicleAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleAnalytics.
     * @param {VehicleAnalyticsDeleteArgs} args - Arguments to delete one VehicleAnalytics.
     * @example
     * // Delete one VehicleAnalytics
     * const VehicleAnalytics = await prisma.vehicleAnalytics.delete({
     *   where: {
     *     // ... filter to delete one VehicleAnalytics
     *   }
     * })
     * 
     */
    delete<T extends VehicleAnalyticsDeleteArgs>(args: SelectSubset<T, VehicleAnalyticsDeleteArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleAnalytics.
     * @param {VehicleAnalyticsUpdateArgs} args - Arguments to update one VehicleAnalytics.
     * @example
     * // Update one VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleAnalyticsUpdateArgs>(args: SelectSubset<T, VehicleAnalyticsUpdateArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleAnalytics.
     * @param {VehicleAnalyticsDeleteManyArgs} args - Arguments to filter VehicleAnalytics to delete.
     * @example
     * // Delete a few VehicleAnalytics
     * const { count } = await prisma.vehicleAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleAnalyticsDeleteManyArgs>(args?: SelectSubset<T, VehicleAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleAnalyticsUpdateManyArgs>(args: SelectSubset<T, VehicleAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleAnalytics.
     * @param {VehicleAnalyticsUpsertArgs} args - Arguments to update or create a VehicleAnalytics.
     * @example
     * // Update or create a VehicleAnalytics
     * const vehicleAnalytics = await prisma.vehicleAnalytics.upsert({
     *   create: {
     *     // ... data to create a VehicleAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends VehicleAnalyticsUpsertArgs>(args: SelectSubset<T, VehicleAnalyticsUpsertArgs<ExtArgs>>): Prisma__VehicleAnalyticsClient<$Result.GetResult<Prisma.$VehicleAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleAnalytics that matches the filter.
     * @param {VehicleAnalyticsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vehicleAnalytics = await prisma.vehicleAnalytics.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VehicleAnalyticsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VehicleAnalytics.
     * @param {VehicleAnalyticsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vehicleAnalytics = await prisma.vehicleAnalytics.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VehicleAnalyticsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VehicleAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAnalyticsCountArgs} args - Arguments to filter VehicleAnalytics to count.
     * @example
     * // Count the number of VehicleAnalytics
     * const count = await prisma.vehicleAnalytics.count({
     *   where: {
     *     // ... the filter for the VehicleAnalytics we want to count
     *   }
     * })
    **/
    count<T extends VehicleAnalyticsCountArgs>(
      args?: Subset<T, VehicleAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAnalyticsAggregateArgs>(args: Subset<T, VehicleAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetVehicleAnalyticsAggregateType<T>>

    /**
     * Group by VehicleAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAnalyticsGroupByArgs} args - Group by arguments.
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
      T extends VehicleAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: VehicleAnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleAnalytics model
   */
  readonly fields: VehicleAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehicleAnalytics model
   */
  interface VehicleAnalyticsFieldRefs {
    readonly id: FieldRef<"VehicleAnalytics", 'String'>
    readonly vehicleId: FieldRef<"VehicleAnalytics", 'String'>
    readonly hoursOperated: FieldRef<"VehicleAnalytics", 'Int'>
    readonly distanceTraveled: FieldRef<"VehicleAnalytics", 'Int'>
    readonly location: FieldRef<"VehicleAnalytics", 'Json'>
    readonly speed: FieldRef<"VehicleAnalytics", 'Int'>
    readonly lastUpdated: FieldRef<"VehicleAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleAnalytics findUnique
   */
  export type VehicleAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAnalytics to fetch.
     */
    where: VehicleAnalyticsWhereUniqueInput
  }

  /**
   * VehicleAnalytics findUniqueOrThrow
   */
  export type VehicleAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAnalytics to fetch.
     */
    where: VehicleAnalyticsWhereUniqueInput
  }

  /**
   * VehicleAnalytics findFirst
   */
  export type VehicleAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAnalytics to fetch.
     */
    where?: VehicleAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAnalytics to fetch.
     */
    orderBy?: VehicleAnalyticsOrderByWithRelationInput | VehicleAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleAnalytics.
     */
    cursor?: VehicleAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleAnalytics.
     */
    distinct?: VehicleAnalyticsScalarFieldEnum | VehicleAnalyticsScalarFieldEnum[]
  }

  /**
   * VehicleAnalytics findFirstOrThrow
   */
  export type VehicleAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAnalytics to fetch.
     */
    where?: VehicleAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAnalytics to fetch.
     */
    orderBy?: VehicleAnalyticsOrderByWithRelationInput | VehicleAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleAnalytics.
     */
    cursor?: VehicleAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleAnalytics.
     */
    distinct?: VehicleAnalyticsScalarFieldEnum | VehicleAnalyticsScalarFieldEnum[]
  }

  /**
   * VehicleAnalytics findMany
   */
  export type VehicleAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which VehicleAnalytics to fetch.
     */
    where?: VehicleAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleAnalytics to fetch.
     */
    orderBy?: VehicleAnalyticsOrderByWithRelationInput | VehicleAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleAnalytics.
     */
    cursor?: VehicleAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleAnalytics.
     */
    skip?: number
    distinct?: VehicleAnalyticsScalarFieldEnum | VehicleAnalyticsScalarFieldEnum[]
  }

  /**
   * VehicleAnalytics create
   */
  export type VehicleAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleAnalytics.
     */
    data: XOR<VehicleAnalyticsCreateInput, VehicleAnalyticsUncheckedCreateInput>
  }

  /**
   * VehicleAnalytics createMany
   */
  export type VehicleAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleAnalytics.
     */
    data: VehicleAnalyticsCreateManyInput | VehicleAnalyticsCreateManyInput[]
  }

  /**
   * VehicleAnalytics update
   */
  export type VehicleAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleAnalytics.
     */
    data: XOR<VehicleAnalyticsUpdateInput, VehicleAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which VehicleAnalytics to update.
     */
    where: VehicleAnalyticsWhereUniqueInput
  }

  /**
   * VehicleAnalytics updateMany
   */
  export type VehicleAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleAnalytics.
     */
    data: XOR<VehicleAnalyticsUpdateManyMutationInput, VehicleAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which VehicleAnalytics to update
     */
    where?: VehicleAnalyticsWhereInput
    /**
     * Limit how many VehicleAnalytics to update.
     */
    limit?: number
  }

  /**
   * VehicleAnalytics upsert
   */
  export type VehicleAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleAnalytics to update in case it exists.
     */
    where: VehicleAnalyticsWhereUniqueInput
    /**
     * In case the VehicleAnalytics found by the `where` argument doesn't exist, create a new VehicleAnalytics with this data.
     */
    create: XOR<VehicleAnalyticsCreateInput, VehicleAnalyticsUncheckedCreateInput>
    /**
     * In case the VehicleAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleAnalyticsUpdateInput, VehicleAnalyticsUncheckedUpdateInput>
  }

  /**
   * VehicleAnalytics delete
   */
  export type VehicleAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
    /**
     * Filter which VehicleAnalytics to delete.
     */
    where: VehicleAnalyticsWhereUniqueInput
  }

  /**
   * VehicleAnalytics deleteMany
   */
  export type VehicleAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleAnalytics to delete
     */
    where?: VehicleAnalyticsWhereInput
    /**
     * Limit how many VehicleAnalytics to delete.
     */
    limit?: number
  }

  /**
   * VehicleAnalytics findRaw
   */
  export type VehicleAnalyticsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * VehicleAnalytics aggregateRaw
   */
  export type VehicleAnalyticsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * VehicleAnalytics without action
   */
  export type VehicleAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleAnalytics
     */
    select?: VehicleAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleAnalytics
     */
    omit?: VehicleAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleAnalyticsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const VehicleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    type: 'type',
    region: 'region',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const MaintenanceRecordScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    date: 'date',
    description: 'description',
    cost: 'cost'
  };

  export type MaintenanceRecordScalarFieldEnum = (typeof MaintenanceRecordScalarFieldEnum)[keyof typeof MaintenanceRecordScalarFieldEnum]


  export const SensorScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    name: 'name',
    type: 'type',
    unit: 'unit',
    createdAt: 'createdAt'
  };

  export type SensorScalarFieldEnum = (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum]


  export const TelemetryScalarFieldEnum: {
    id: 'id',
    sensorId: 'sensorId',
    payload: 'payload',
    timestamp: 'timestamp'
  };

  export type TelemetryScalarFieldEnum = (typeof TelemetryScalarFieldEnum)[keyof typeof TelemetryScalarFieldEnum]


  export const VehicleAnalyticsScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    hoursOperated: 'hoursOperated',
    distanceTraveled: 'distanceTraveled',
    location: 'location',
    speed: 'speed',
    lastUpdated: 'lastUpdated'
  };

  export type VehicleAnalyticsScalarFieldEnum = (typeof VehicleAnalyticsScalarFieldEnum)[keyof typeof VehicleAnalyticsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    name?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    type?: StringFilter<"Vehicle"> | string
    region?: StringFilter<"Vehicle"> | string
    status?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    maintenanceRecords?: MaintenanceRecordListRelationFilter
    sensors?: SensorListRelationFilter
    analytics?: VehicleAnalyticsListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceRecords?: MaintenanceRecordOrderByRelationAggregateInput
    sensors?: SensorOrderByRelationAggregateInput
    analytics?: VehicleAnalyticsOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    name?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    type?: StringFilter<"Vehicle"> | string
    region?: StringFilter<"Vehicle"> | string
    status?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    maintenanceRecords?: MaintenanceRecordListRelationFilter
    sensors?: SensorListRelationFilter
    analytics?: VehicleAnalyticsListRelationFilter
  }, "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    name?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    type?: StringWithAggregatesFilter<"Vehicle"> | string
    region?: StringWithAggregatesFilter<"Vehicle"> | string
    status?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type MaintenanceRecordWhereInput = {
    AND?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    OR?: MaintenanceRecordWhereInput[]
    NOT?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    id?: StringFilter<"MaintenanceRecord"> | string
    vehicleId?: StringFilter<"MaintenanceRecord"> | string
    date?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    description?: StringFilter<"MaintenanceRecord"> | string
    cost?: FloatFilter<"MaintenanceRecord"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type MaintenanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type MaintenanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    OR?: MaintenanceRecordWhereInput[]
    NOT?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    vehicleId?: StringFilter<"MaintenanceRecord"> | string
    date?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    description?: StringFilter<"MaintenanceRecord"> | string
    cost?: FloatFilter<"MaintenanceRecord"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id">

  export type MaintenanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    _count?: MaintenanceRecordCountOrderByAggregateInput
    _avg?: MaintenanceRecordAvgOrderByAggregateInput
    _max?: MaintenanceRecordMaxOrderByAggregateInput
    _min?: MaintenanceRecordMinOrderByAggregateInput
    _sum?: MaintenanceRecordSumOrderByAggregateInput
  }

  export type MaintenanceRecordScalarWhereWithAggregatesInput = {
    AND?: MaintenanceRecordScalarWhereWithAggregatesInput | MaintenanceRecordScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRecordScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceRecordScalarWhereWithAggregatesInput | MaintenanceRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    vehicleId?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    date?: DateTimeWithAggregatesFilter<"MaintenanceRecord"> | Date | string
    description?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    cost?: FloatWithAggregatesFilter<"MaintenanceRecord"> | number
  }

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    id?: StringFilter<"Sensor"> | string
    vehicleId?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    type?: StringFilter<"Sensor"> | string
    unit?: StringFilter<"Sensor"> | string
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    readings?: TelemetryListRelationFilter
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    readings?: TelemetryOrderByRelationAggregateInput
  }

  export type SensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    vehicleId?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    type?: StringFilter<"Sensor"> | string
    unit?: StringFilter<"Sensor"> | string
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    readings?: TelemetryListRelationFilter
  }, "id">

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    _count?: SensorCountOrderByAggregateInput
    _max?: SensorMaxOrderByAggregateInput
    _min?: SensorMinOrderByAggregateInput
  }

  export type SensorScalarWhereWithAggregatesInput = {
    AND?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    OR?: SensorScalarWhereWithAggregatesInput[]
    NOT?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sensor"> | string
    vehicleId?: StringWithAggregatesFilter<"Sensor"> | string
    name?: StringWithAggregatesFilter<"Sensor"> | string
    type?: StringWithAggregatesFilter<"Sensor"> | string
    unit?: StringWithAggregatesFilter<"Sensor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
  }

  export type TelemetryWhereInput = {
    AND?: TelemetryWhereInput | TelemetryWhereInput[]
    OR?: TelemetryWhereInput[]
    NOT?: TelemetryWhereInput | TelemetryWhereInput[]
    id?: StringFilter<"Telemetry"> | string
    sensorId?: StringFilter<"Telemetry"> | string
    payload?: JsonFilter<"Telemetry">
    timestamp?: DateTimeFilter<"Telemetry"> | Date | string
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }

  export type TelemetryOrderByWithRelationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    payload?: SortOrder
    timestamp?: SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type TelemetryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TelemetryWhereInput | TelemetryWhereInput[]
    OR?: TelemetryWhereInput[]
    NOT?: TelemetryWhereInput | TelemetryWhereInput[]
    sensorId?: StringFilter<"Telemetry"> | string
    payload?: JsonFilter<"Telemetry">
    timestamp?: DateTimeFilter<"Telemetry"> | Date | string
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }, "id">

  export type TelemetryOrderByWithAggregationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    payload?: SortOrder
    timestamp?: SortOrder
    _count?: TelemetryCountOrderByAggregateInput
    _max?: TelemetryMaxOrderByAggregateInput
    _min?: TelemetryMinOrderByAggregateInput
  }

  export type TelemetryScalarWhereWithAggregatesInput = {
    AND?: TelemetryScalarWhereWithAggregatesInput | TelemetryScalarWhereWithAggregatesInput[]
    OR?: TelemetryScalarWhereWithAggregatesInput[]
    NOT?: TelemetryScalarWhereWithAggregatesInput | TelemetryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Telemetry"> | string
    sensorId?: StringWithAggregatesFilter<"Telemetry"> | string
    payload?: JsonWithAggregatesFilter<"Telemetry">
    timestamp?: DateTimeWithAggregatesFilter<"Telemetry"> | Date | string
  }

  export type VehicleAnalyticsWhereInput = {
    AND?: VehicleAnalyticsWhereInput | VehicleAnalyticsWhereInput[]
    OR?: VehicleAnalyticsWhereInput[]
    NOT?: VehicleAnalyticsWhereInput | VehicleAnalyticsWhereInput[]
    id?: StringFilter<"VehicleAnalytics"> | string
    vehicleId?: StringFilter<"VehicleAnalytics"> | string
    hoursOperated?: IntFilter<"VehicleAnalytics"> | number
    distanceTraveled?: IntFilter<"VehicleAnalytics"> | number
    location?: JsonFilter<"VehicleAnalytics">
    speed?: IntFilter<"VehicleAnalytics"> | number
    lastUpdated?: DateTimeFilter<"VehicleAnalytics"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type VehicleAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    hoursOperated?: SortOrder
    distanceTraveled?: SortOrder
    location?: SortOrder
    speed?: SortOrder
    lastUpdated?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type VehicleAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehicleId?: string
    AND?: VehicleAnalyticsWhereInput | VehicleAnalyticsWhereInput[]
    OR?: VehicleAnalyticsWhereInput[]
    NOT?: VehicleAnalyticsWhereInput | VehicleAnalyticsWhereInput[]
    hoursOperated?: IntFilter<"VehicleAnalytics"> | number
    distanceTraveled?: IntFilter<"VehicleAnalytics"> | number
    location?: JsonFilter<"VehicleAnalytics">
    speed?: IntFilter<"VehicleAnalytics"> | number
    lastUpdated?: DateTimeFilter<"VehicleAnalytics"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id" | "vehicleId">

  export type VehicleAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    hoursOperated?: SortOrder
    distanceTraveled?: SortOrder
    location?: SortOrder
    speed?: SortOrder
    lastUpdated?: SortOrder
    _count?: VehicleAnalyticsCountOrderByAggregateInput
    _avg?: VehicleAnalyticsAvgOrderByAggregateInput
    _max?: VehicleAnalyticsMaxOrderByAggregateInput
    _min?: VehicleAnalyticsMinOrderByAggregateInput
    _sum?: VehicleAnalyticsSumOrderByAggregateInput
  }

  export type VehicleAnalyticsScalarWhereWithAggregatesInput = {
    AND?: VehicleAnalyticsScalarWhereWithAggregatesInput | VehicleAnalyticsScalarWhereWithAggregatesInput[]
    OR?: VehicleAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: VehicleAnalyticsScalarWhereWithAggregatesInput | VehicleAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleAnalytics"> | string
    vehicleId?: StringWithAggregatesFilter<"VehicleAnalytics"> | string
    hoursOperated?: IntWithAggregatesFilter<"VehicleAnalytics"> | number
    distanceTraveled?: IntWithAggregatesFilter<"VehicleAnalytics"> | number
    location?: JsonWithAggregatesFilter<"VehicleAnalytics">
    speed?: IntWithAggregatesFilter<"VehicleAnalytics"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"VehicleAnalytics"> | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
    sensors?: SensorCreateNestedManyWithoutVehicleInput
    analytics?: VehicleAnalyticsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
    sensors?: SensorUncheckedCreateNestedManyWithoutVehicleInput
    analytics?: VehicleAnalyticsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
    sensors?: SensorUpdateManyWithoutVehicleNestedInput
    analytics?: VehicleAnalyticsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
    sensors?: SensorUncheckedUpdateManyWithoutVehicleNestedInput
    analytics?: VehicleAnalyticsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateInput = {
    id?: string
    date: Date | string
    description: string
    cost: number
    vehicle: VehicleCreateNestedOneWithoutMaintenanceRecordsInput
  }

  export type MaintenanceRecordUncheckedCreateInput = {
    id?: string
    vehicleId: string
    date: Date | string
    description: string
    cost: number
  }

  export type MaintenanceRecordUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput
  }

  export type MaintenanceRecordUncheckedUpdateInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MaintenanceRecordCreateManyInput = {
    id?: string
    vehicleId: string
    date: Date | string
    description: string
    cost: number
  }

  export type MaintenanceRecordUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MaintenanceRecordUncheckedUpdateManyInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type SensorCreateInput = {
    id?: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutSensorsInput
    readings?: TelemetryCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateInput = {
    id?: string
    vehicleId: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
    readings?: TelemetryUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutSensorsNestedInput
    readings?: TelemetryUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: TelemetryUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorCreateManyInput = {
    id?: string
    vehicleId: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
  }

  export type SensorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorUncheckedUpdateManyInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryCreateInput = {
    id?: string
    payload: InputJsonValue
    timestamp?: Date | string
    sensor: SensorCreateNestedOneWithoutReadingsInput
  }

  export type TelemetryUncheckedCreateInput = {
    id?: string
    sensorId: string
    payload: InputJsonValue
    timestamp?: Date | string
  }

  export type TelemetryUpdateInput = {
    payload?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sensor?: SensorUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type TelemetryUncheckedUpdateInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    payload?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryCreateManyInput = {
    id?: string
    sensorId: string
    payload: InputJsonValue
    timestamp?: Date | string
  }

  export type TelemetryUpdateManyMutationInput = {
    payload?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryUncheckedUpdateManyInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    payload?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleAnalyticsCreateInput = {
    id?: string
    hoursOperated: number
    distanceTraveled: number
    location: InputJsonValue
    speed: number
    lastUpdated?: Date | string
    vehicle: VehicleCreateNestedOneWithoutAnalyticsInput
  }

  export type VehicleAnalyticsUncheckedCreateInput = {
    id?: string
    vehicleId: string
    hoursOperated: number
    distanceTraveled: number
    location: InputJsonValue
    speed: number
    lastUpdated?: Date | string
  }

  export type VehicleAnalyticsUpdateInput = {
    hoursOperated?: IntFieldUpdateOperationsInput | number
    distanceTraveled?: IntFieldUpdateOperationsInput | number
    location?: InputJsonValue | InputJsonValue
    speed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type VehicleAnalyticsUncheckedUpdateInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    hoursOperated?: IntFieldUpdateOperationsInput | number
    distanceTraveled?: IntFieldUpdateOperationsInput | number
    location?: InputJsonValue | InputJsonValue
    speed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleAnalyticsCreateManyInput = {
    id?: string
    vehicleId: string
    hoursOperated: number
    distanceTraveled: number
    location: InputJsonValue
    speed: number
    lastUpdated?: Date | string
  }

  export type VehicleAnalyticsUpdateManyMutationInput = {
    hoursOperated?: IntFieldUpdateOperationsInput | number
    distanceTraveled?: IntFieldUpdateOperationsInput | number
    location?: InputJsonValue | InputJsonValue
    speed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleAnalyticsUncheckedUpdateManyInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    hoursOperated?: IntFieldUpdateOperationsInput | number
    distanceTraveled?: IntFieldUpdateOperationsInput | number
    location?: InputJsonValue | InputJsonValue
    speed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MaintenanceRecordListRelationFilter = {
    every?: MaintenanceRecordWhereInput
    some?: MaintenanceRecordWhereInput
    none?: MaintenanceRecordWhereInput
  }

  export type SensorListRelationFilter = {
    every?: SensorWhereInput
    some?: SensorWhereInput
    none?: SensorWhereInput
  }

  export type VehicleAnalyticsListRelationFilter = {
    every?: VehicleAnalyticsWhereInput
    some?: VehicleAnalyticsWhereInput
    none?: VehicleAnalyticsWhereInput
  }

  export type MaintenanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type MaintenanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    cost?: SortOrder
  }

  export type MaintenanceRecordAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type MaintenanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    cost?: SortOrder
  }

  export type MaintenanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    description?: SortOrder
    cost?: SortOrder
  }

  export type MaintenanceRecordSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TelemetryListRelationFilter = {
    every?: TelemetryWhereInput
    some?: TelemetryWhereInput
    none?: TelemetryWhereInput
  }

  export type TelemetryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
  }

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
  }

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
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

  export type SensorScalarRelationFilter = {
    is?: SensorWhereInput
    isNot?: SensorWhereInput
  }

  export type TelemetryCountOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    payload?: SortOrder
    timestamp?: SortOrder
  }

  export type TelemetryMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    timestamp?: SortOrder
  }

  export type TelemetryMinOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    timestamp?: SortOrder
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

  export type VehicleAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    hoursOperated?: SortOrder
    distanceTraveled?: SortOrder
    location?: SortOrder
    speed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type VehicleAnalyticsAvgOrderByAggregateInput = {
    hoursOperated?: SortOrder
    distanceTraveled?: SortOrder
    speed?: SortOrder
  }

  export type VehicleAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    hoursOperated?: SortOrder
    distanceTraveled?: SortOrder
    speed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type VehicleAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    hoursOperated?: SortOrder
    distanceTraveled?: SortOrder
    speed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type VehicleAnalyticsSumOrderByAggregateInput = {
    hoursOperated?: SortOrder
    distanceTraveled?: SortOrder
    speed?: SortOrder
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

  export type MaintenanceRecordCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type SensorCreateNestedManyWithoutVehicleInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput> | SensorCreateWithoutVehicleInput[] | SensorUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput | SensorCreateOrConnectWithoutVehicleInput[]
    createMany?: SensorCreateManyVehicleInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type VehicleAnalyticsCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleAnalyticsCreateWithoutVehicleInput, VehicleAnalyticsUncheckedCreateWithoutVehicleInput> | VehicleAnalyticsCreateWithoutVehicleInput[] | VehicleAnalyticsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAnalyticsCreateOrConnectWithoutVehicleInput | VehicleAnalyticsCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleAnalyticsCreateManyVehicleInputEnvelope
    connect?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
  }

  export type MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type SensorUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput> | SensorCreateWithoutVehicleInput[] | SensorUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput | SensorCreateOrConnectWithoutVehicleInput[]
    createMany?: SensorCreateManyVehicleInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type VehicleAnalyticsUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleAnalyticsCreateWithoutVehicleInput, VehicleAnalyticsUncheckedCreateWithoutVehicleInput> | VehicleAnalyticsCreateWithoutVehicleInput[] | VehicleAnalyticsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAnalyticsCreateOrConnectWithoutVehicleInput | VehicleAnalyticsCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleAnalyticsCreateManyVehicleInputEnvelope
    connect?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MaintenanceRecordUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput | MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type SensorUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput> | SensorCreateWithoutVehicleInput[] | SensorUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput | SensorCreateOrConnectWithoutVehicleInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutVehicleInput | SensorUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: SensorCreateManyVehicleInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutVehicleInput | SensorUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutVehicleInput | SensorUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type VehicleAnalyticsUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleAnalyticsCreateWithoutVehicleInput, VehicleAnalyticsUncheckedCreateWithoutVehicleInput> | VehicleAnalyticsCreateWithoutVehicleInput[] | VehicleAnalyticsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAnalyticsCreateOrConnectWithoutVehicleInput | VehicleAnalyticsCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleAnalyticsUpsertWithWhereUniqueWithoutVehicleInput | VehicleAnalyticsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleAnalyticsCreateManyVehicleInputEnvelope
    set?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    disconnect?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    delete?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    connect?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    update?: VehicleAnalyticsUpdateWithWhereUniqueWithoutVehicleInput | VehicleAnalyticsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleAnalyticsUpdateManyWithWhereWithoutVehicleInput | VehicleAnalyticsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleAnalyticsScalarWhereInput | VehicleAnalyticsScalarWhereInput[]
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput | MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type SensorUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput> | SensorCreateWithoutVehicleInput[] | SensorUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutVehicleInput | SensorCreateOrConnectWithoutVehicleInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutVehicleInput | SensorUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: SensorCreateManyVehicleInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutVehicleInput | SensorUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutVehicleInput | SensorUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type VehicleAnalyticsUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleAnalyticsCreateWithoutVehicleInput, VehicleAnalyticsUncheckedCreateWithoutVehicleInput> | VehicleAnalyticsCreateWithoutVehicleInput[] | VehicleAnalyticsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleAnalyticsCreateOrConnectWithoutVehicleInput | VehicleAnalyticsCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleAnalyticsUpsertWithWhereUniqueWithoutVehicleInput | VehicleAnalyticsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleAnalyticsCreateManyVehicleInputEnvelope
    set?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    disconnect?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    delete?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    connect?: VehicleAnalyticsWhereUniqueInput | VehicleAnalyticsWhereUniqueInput[]
    update?: VehicleAnalyticsUpdateWithWhereUniqueWithoutVehicleInput | VehicleAnalyticsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleAnalyticsUpdateManyWithWhereWithoutVehicleInput | VehicleAnalyticsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleAnalyticsScalarWhereInput | VehicleAnalyticsScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenanceRecordsInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceRecordsInput
    connect?: VehicleWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceRecordsInput
    upsert?: VehicleUpsertWithoutMaintenanceRecordsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceRecordsInput, VehicleUpdateWithoutMaintenanceRecordsInput>, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type VehicleCreateNestedOneWithoutSensorsInput = {
    create?: XOR<VehicleCreateWithoutSensorsInput, VehicleUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSensorsInput
    connect?: VehicleWhereUniqueInput
  }

  export type TelemetryCreateNestedManyWithoutSensorInput = {
    create?: XOR<TelemetryCreateWithoutSensorInput, TelemetryUncheckedCreateWithoutSensorInput> | TelemetryCreateWithoutSensorInput[] | TelemetryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: TelemetryCreateOrConnectWithoutSensorInput | TelemetryCreateOrConnectWithoutSensorInput[]
    createMany?: TelemetryCreateManySensorInputEnvelope
    connect?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
  }

  export type TelemetryUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<TelemetryCreateWithoutSensorInput, TelemetryUncheckedCreateWithoutSensorInput> | TelemetryCreateWithoutSensorInput[] | TelemetryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: TelemetryCreateOrConnectWithoutSensorInput | TelemetryCreateOrConnectWithoutSensorInput[]
    createMany?: TelemetryCreateManySensorInputEnvelope
    connect?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
  }

  export type VehicleUpdateOneRequiredWithoutSensorsNestedInput = {
    create?: XOR<VehicleCreateWithoutSensorsInput, VehicleUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSensorsInput
    upsert?: VehicleUpsertWithoutSensorsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutSensorsInput, VehicleUpdateWithoutSensorsInput>, VehicleUncheckedUpdateWithoutSensorsInput>
  }

  export type TelemetryUpdateManyWithoutSensorNestedInput = {
    create?: XOR<TelemetryCreateWithoutSensorInput, TelemetryUncheckedCreateWithoutSensorInput> | TelemetryCreateWithoutSensorInput[] | TelemetryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: TelemetryCreateOrConnectWithoutSensorInput | TelemetryCreateOrConnectWithoutSensorInput[]
    upsert?: TelemetryUpsertWithWhereUniqueWithoutSensorInput | TelemetryUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: TelemetryCreateManySensorInputEnvelope
    set?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    disconnect?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    delete?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    connect?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    update?: TelemetryUpdateWithWhereUniqueWithoutSensorInput | TelemetryUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: TelemetryUpdateManyWithWhereWithoutSensorInput | TelemetryUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: TelemetryScalarWhereInput | TelemetryScalarWhereInput[]
  }

  export type TelemetryUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<TelemetryCreateWithoutSensorInput, TelemetryUncheckedCreateWithoutSensorInput> | TelemetryCreateWithoutSensorInput[] | TelemetryUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: TelemetryCreateOrConnectWithoutSensorInput | TelemetryCreateOrConnectWithoutSensorInput[]
    upsert?: TelemetryUpsertWithWhereUniqueWithoutSensorInput | TelemetryUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: TelemetryCreateManySensorInputEnvelope
    set?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    disconnect?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    delete?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    connect?: TelemetryWhereUniqueInput | TelemetryWhereUniqueInput[]
    update?: TelemetryUpdateWithWhereUniqueWithoutSensorInput | TelemetryUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: TelemetryUpdateManyWithWhereWithoutSensorInput | TelemetryUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: TelemetryScalarWhereInput | TelemetryScalarWhereInput[]
  }

  export type SensorCreateNestedOneWithoutReadingsInput = {
    create?: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutReadingsInput
    connect?: SensorWhereUniqueInput
  }

  export type SensorUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutReadingsInput
    upsert?: SensorUpsertWithoutReadingsInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutReadingsInput, SensorUpdateWithoutReadingsInput>, SensorUncheckedUpdateWithoutReadingsInput>
  }

  export type VehicleCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<VehicleCreateWithoutAnalyticsInput, VehicleUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAnalyticsInput
    connect?: VehicleWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<VehicleCreateWithoutAnalyticsInput, VehicleUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAnalyticsInput
    upsert?: VehicleUpsertWithoutAnalyticsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutAnalyticsInput, VehicleUpdateWithoutAnalyticsInput>, VehicleUncheckedUpdateWithoutAnalyticsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type MaintenanceRecordCreateWithoutVehicleInput = {
    id?: string
    date: Date | string
    description: string
    cost: number
  }

  export type MaintenanceRecordUncheckedCreateWithoutVehicleInput = {
    id?: string
    date: Date | string
    description: string
    cost: number
  }

  export type MaintenanceRecordCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    create: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceRecordCreateManyVehicleInputEnvelope = {
    data: MaintenanceRecordCreateManyVehicleInput | MaintenanceRecordCreateManyVehicleInput[]
  }

  export type SensorCreateWithoutVehicleInput = {
    id?: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
    readings?: TelemetryCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
    readings?: TelemetryUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutVehicleInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
  }

  export type SensorCreateManyVehicleInputEnvelope = {
    data: SensorCreateManyVehicleInput | SensorCreateManyVehicleInput[]
  }

  export type VehicleAnalyticsCreateWithoutVehicleInput = {
    id?: string
    hoursOperated: number
    distanceTraveled: number
    location: InputJsonValue
    speed: number
    lastUpdated?: Date | string
  }

  export type VehicleAnalyticsUncheckedCreateWithoutVehicleInput = {
    id?: string
    hoursOperated: number
    distanceTraveled: number
    location: InputJsonValue
    speed: number
    lastUpdated?: Date | string
  }

  export type VehicleAnalyticsCreateOrConnectWithoutVehicleInput = {
    where: VehicleAnalyticsWhereUniqueInput
    create: XOR<VehicleAnalyticsCreateWithoutVehicleInput, VehicleAnalyticsUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleAnalyticsCreateManyVehicleInputEnvelope = {
    data: VehicleAnalyticsCreateManyVehicleInput | VehicleAnalyticsCreateManyVehicleInput[]
  }

  export type MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    update: XOR<MaintenanceRecordUpdateWithoutVehicleInput, MaintenanceRecordUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    data: XOR<MaintenanceRecordUpdateWithoutVehicleInput, MaintenanceRecordUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceRecordScalarWhereInput
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceRecordScalarWhereInput = {
    AND?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
    OR?: MaintenanceRecordScalarWhereInput[]
    NOT?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
    id?: StringFilter<"MaintenanceRecord"> | string
    vehicleId?: StringFilter<"MaintenanceRecord"> | string
    date?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    description?: StringFilter<"MaintenanceRecord"> | string
    cost?: FloatFilter<"MaintenanceRecord"> | number
  }

  export type SensorUpsertWithWhereUniqueWithoutVehicleInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutVehicleInput, SensorUncheckedUpdateWithoutVehicleInput>
    create: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutVehicleInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutVehicleInput, SensorUncheckedUpdateWithoutVehicleInput>
  }

  export type SensorUpdateManyWithWhereWithoutVehicleInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutVehicleInput>
  }

  export type SensorScalarWhereInput = {
    AND?: SensorScalarWhereInput | SensorScalarWhereInput[]
    OR?: SensorScalarWhereInput[]
    NOT?: SensorScalarWhereInput | SensorScalarWhereInput[]
    id?: StringFilter<"Sensor"> | string
    vehicleId?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    type?: StringFilter<"Sensor"> | string
    unit?: StringFilter<"Sensor"> | string
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
  }

  export type VehicleAnalyticsUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleAnalyticsWhereUniqueInput
    update: XOR<VehicleAnalyticsUpdateWithoutVehicleInput, VehicleAnalyticsUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleAnalyticsCreateWithoutVehicleInput, VehicleAnalyticsUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleAnalyticsUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleAnalyticsWhereUniqueInput
    data: XOR<VehicleAnalyticsUpdateWithoutVehicleInput, VehicleAnalyticsUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleAnalyticsUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleAnalyticsScalarWhereInput
    data: XOR<VehicleAnalyticsUpdateManyMutationInput, VehicleAnalyticsUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleAnalyticsScalarWhereInput = {
    AND?: VehicleAnalyticsScalarWhereInput | VehicleAnalyticsScalarWhereInput[]
    OR?: VehicleAnalyticsScalarWhereInput[]
    NOT?: VehicleAnalyticsScalarWhereInput | VehicleAnalyticsScalarWhereInput[]
    id?: StringFilter<"VehicleAnalytics"> | string
    vehicleId?: StringFilter<"VehicleAnalytics"> | string
    hoursOperated?: IntFilter<"VehicleAnalytics"> | number
    distanceTraveled?: IntFilter<"VehicleAnalytics"> | number
    location?: JsonFilter<"VehicleAnalytics">
    speed?: IntFilter<"VehicleAnalytics"> | number
    lastUpdated?: DateTimeFilter<"VehicleAnalytics"> | Date | string
  }

  export type VehicleCreateWithoutMaintenanceRecordsInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorCreateNestedManyWithoutVehicleInput
    analytics?: VehicleAnalyticsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceRecordsInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutVehicleInput
    analytics?: VehicleAnalyticsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceRecordsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
  }

  export type VehicleUpsertWithoutMaintenanceRecordsInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceRecordsInput, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
    create: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceRecordsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceRecordsInput, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type VehicleUpdateWithoutMaintenanceRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUpdateManyWithoutVehicleNestedInput
    analytics?: VehicleAnalyticsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutVehicleNestedInput
    analytics?: VehicleAnalyticsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutSensorsInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
    analytics?: VehicleAnalyticsCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutSensorsInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
    analytics?: VehicleAnalyticsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutSensorsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutSensorsInput, VehicleUncheckedCreateWithoutSensorsInput>
  }

  export type TelemetryCreateWithoutSensorInput = {
    id?: string
    payload: InputJsonValue
    timestamp?: Date | string
  }

  export type TelemetryUncheckedCreateWithoutSensorInput = {
    id?: string
    payload: InputJsonValue
    timestamp?: Date | string
  }

  export type TelemetryCreateOrConnectWithoutSensorInput = {
    where: TelemetryWhereUniqueInput
    create: XOR<TelemetryCreateWithoutSensorInput, TelemetryUncheckedCreateWithoutSensorInput>
  }

  export type TelemetryCreateManySensorInputEnvelope = {
    data: TelemetryCreateManySensorInput | TelemetryCreateManySensorInput[]
  }

  export type VehicleUpsertWithoutSensorsInput = {
    update: XOR<VehicleUpdateWithoutSensorsInput, VehicleUncheckedUpdateWithoutSensorsInput>
    create: XOR<VehicleCreateWithoutSensorsInput, VehicleUncheckedCreateWithoutSensorsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutSensorsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutSensorsInput, VehicleUncheckedUpdateWithoutSensorsInput>
  }

  export type VehicleUpdateWithoutSensorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
    analytics?: VehicleAnalyticsUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutSensorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
    analytics?: VehicleAnalyticsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type TelemetryUpsertWithWhereUniqueWithoutSensorInput = {
    where: TelemetryWhereUniqueInput
    update: XOR<TelemetryUpdateWithoutSensorInput, TelemetryUncheckedUpdateWithoutSensorInput>
    create: XOR<TelemetryCreateWithoutSensorInput, TelemetryUncheckedCreateWithoutSensorInput>
  }

  export type TelemetryUpdateWithWhereUniqueWithoutSensorInput = {
    where: TelemetryWhereUniqueInput
    data: XOR<TelemetryUpdateWithoutSensorInput, TelemetryUncheckedUpdateWithoutSensorInput>
  }

  export type TelemetryUpdateManyWithWhereWithoutSensorInput = {
    where: TelemetryScalarWhereInput
    data: XOR<TelemetryUpdateManyMutationInput, TelemetryUncheckedUpdateManyWithoutSensorInput>
  }

  export type TelemetryScalarWhereInput = {
    AND?: TelemetryScalarWhereInput | TelemetryScalarWhereInput[]
    OR?: TelemetryScalarWhereInput[]
    NOT?: TelemetryScalarWhereInput | TelemetryScalarWhereInput[]
    id?: StringFilter<"Telemetry"> | string
    sensorId?: StringFilter<"Telemetry"> | string
    payload?: JsonFilter<"Telemetry">
    timestamp?: DateTimeFilter<"Telemetry"> | Date | string
  }

  export type SensorCreateWithoutReadingsInput = {
    id?: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutSensorsInput
  }

  export type SensorUncheckedCreateWithoutReadingsInput = {
    id?: string
    vehicleId: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
  }

  export type SensorCreateOrConnectWithoutReadingsInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
  }

  export type SensorUpsertWithoutReadingsInput = {
    update: XOR<SensorUpdateWithoutReadingsInput, SensorUncheckedUpdateWithoutReadingsInput>
    create: XOR<SensorCreateWithoutReadingsInput, SensorUncheckedCreateWithoutReadingsInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutReadingsInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutReadingsInput, SensorUncheckedUpdateWithoutReadingsInput>
  }

  export type SensorUpdateWithoutReadingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutSensorsNestedInput
  }

  export type SensorUncheckedUpdateWithoutReadingsInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateWithoutAnalyticsInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
    sensors?: SensorCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    name: string
    model: string
    type: string
    region: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
    sensors?: SensorUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutAnalyticsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutAnalyticsInput, VehicleUncheckedCreateWithoutAnalyticsInput>
  }

  export type VehicleUpsertWithoutAnalyticsInput = {
    update: XOR<VehicleUpdateWithoutAnalyticsInput, VehicleUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<VehicleCreateWithoutAnalyticsInput, VehicleUncheckedCreateWithoutAnalyticsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutAnalyticsInput, VehicleUncheckedUpdateWithoutAnalyticsInput>
  }

  export type VehicleUpdateWithoutAnalyticsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
    sensors?: SensorUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutAnalyticsInput = {
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
    sensors?: SensorUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type MaintenanceRecordCreateManyVehicleInput = {
    id?: string
    date: Date | string
    description: string
    cost: number
  }

  export type SensorCreateManyVehicleInput = {
    id?: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
  }

  export type VehicleAnalyticsCreateManyVehicleInput = {
    id?: string
    hoursOperated: number
    distanceTraveled: number
    location: InputJsonValue
    speed: number
    lastUpdated?: Date | string
  }

  export type MaintenanceRecordUpdateWithoutVehicleInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MaintenanceRecordUncheckedUpdateWithoutVehicleInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutVehicleInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type SensorUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: TelemetryUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: TelemetryUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateManyWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleAnalyticsUpdateWithoutVehicleInput = {
    hoursOperated?: IntFieldUpdateOperationsInput | number
    distanceTraveled?: IntFieldUpdateOperationsInput | number
    location?: InputJsonValue | InputJsonValue
    speed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleAnalyticsUncheckedUpdateWithoutVehicleInput = {
    hoursOperated?: IntFieldUpdateOperationsInput | number
    distanceTraveled?: IntFieldUpdateOperationsInput | number
    location?: InputJsonValue | InputJsonValue
    speed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleAnalyticsUncheckedUpdateManyWithoutVehicleInput = {
    hoursOperated?: IntFieldUpdateOperationsInput | number
    distanceTraveled?: IntFieldUpdateOperationsInput | number
    location?: InputJsonValue | InputJsonValue
    speed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryCreateManySensorInput = {
    id?: string
    payload: InputJsonValue
    timestamp?: Date | string
  }

  export type TelemetryUpdateWithoutSensorInput = {
    payload?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryUncheckedUpdateWithoutSensorInput = {
    payload?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryUncheckedUpdateManyWithoutSensorInput = {
    payload?: InputJsonValue | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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