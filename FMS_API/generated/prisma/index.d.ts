
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
 * Model SensorReading
 * 
 */
export type SensorReading = $Result.DefaultSelection<Prisma.$SensorReadingPayload>

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
   * `prisma.sensorReading`: Exposes CRUD operations for the **SensorReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorReadings
    * const sensorReadings = await prisma.sensorReading.findMany()
    * ```
    */
  get sensorReading(): Prisma.SensorReadingDelegate<ExtArgs, ClientOptions>;
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
    SensorReading: 'SensorReading'
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
      modelProps: "vehicle" | "maintenanceRecord" | "sensor" | "sensorReading"
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
      SensorReading: {
        payload: Prisma.$SensorReadingPayload<ExtArgs>
        fields: Prisma.SensorReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findFirst: {
            args: Prisma.SensorReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          findMany: {
            args: Prisma.SensorReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>[]
          }
          create: {
            args: Prisma.SensorReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          createMany: {
            args: Prisma.SensorReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SensorReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          update: {
            args: Prisma.SensorReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          deleteMany: {
            args: Prisma.SensorReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SensorReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorReadingPayload>
          }
          aggregate: {
            args: Prisma.SensorReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorReading>
          }
          groupBy: {
            args: Prisma.SensorReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SensorReadingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SensorReadingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SensorReadingCountArgs<ExtArgs>
            result: $Utils.Optional<SensorReadingCountAggregateOutputType> | number
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
    sensorReading?: SensorReadingOmit
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
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRecords?: boolean | VehicleCountOutputTypeCountMaintenanceRecordsArgs
    sensors?: boolean | VehicleCountOutputTypeCountSensorsArgs
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
    where?: SensorReadingWhereInput
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
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      maintenanceRecords: Prisma.$MaintenanceRecordPayload<ExtArgs>[]
      sensors: Prisma.$SensorPayload<ExtArgs>[]
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
      readings: Prisma.$SensorReadingPayload<ExtArgs>[]
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
    readings<T extends Sensor$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    cursor?: SensorReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
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
   * Model SensorReading
   */

  export type AggregateSensorReading = {
    _count: SensorReadingCountAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  export type SensorReadingMinAggregateOutputType = {
    id: string | null
    sensorId: string | null
    timestamp: Date | null
  }

  export type SensorReadingMaxAggregateOutputType = {
    id: string | null
    sensorId: string | null
    timestamp: Date | null
  }

  export type SensorReadingCountAggregateOutputType = {
    id: number
    sensorId: number
    timestamp: number
    payload: number
    _all: number
  }


  export type SensorReadingMinAggregateInputType = {
    id?: true
    sensorId?: true
    timestamp?: true
  }

  export type SensorReadingMaxAggregateInputType = {
    id?: true
    sensorId?: true
    timestamp?: true
  }

  export type SensorReadingCountAggregateInputType = {
    id?: true
    sensorId?: true
    timestamp?: true
    payload?: true
    _all?: true
  }

  export type SensorReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReading to aggregate.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorReadings
    **/
    _count?: true | SensorReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorReadingMaxAggregateInputType
  }

  export type GetSensorReadingAggregateType<T extends SensorReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorReading[P]>
      : GetScalarType<T[P], AggregateSensorReading[P]>
  }




  export type SensorReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorReadingWhereInput
    orderBy?: SensorReadingOrderByWithAggregationInput | SensorReadingOrderByWithAggregationInput[]
    by: SensorReadingScalarFieldEnum[] | SensorReadingScalarFieldEnum
    having?: SensorReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorReadingCountAggregateInputType | true
    _min?: SensorReadingMinAggregateInputType
    _max?: SensorReadingMaxAggregateInputType
  }

  export type SensorReadingGroupByOutputType = {
    id: string
    sensorId: string
    timestamp: Date
    payload: JsonValue
    _count: SensorReadingCountAggregateOutputType | null
    _min: SensorReadingMinAggregateOutputType | null
    _max: SensorReadingMaxAggregateOutputType | null
  }

  type GetSensorReadingGroupByPayload<T extends SensorReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
            : GetScalarType<T[P], SensorReadingGroupByOutputType[P]>
        }
      >
    >


  export type SensorReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorId?: boolean
    timestamp?: boolean
    payload?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorReading"]>



  export type SensorReadingSelectScalar = {
    id?: boolean
    sensorId?: boolean
    timestamp?: boolean
    payload?: boolean
  }

  export type SensorReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sensorId" | "timestamp" | "payload", ExtArgs["result"]["sensorReading"]>
  export type SensorReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $SensorReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorReading"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorId: string
      timestamp: Date
      payload: Prisma.JsonValue
    }, ExtArgs["result"]["sensorReading"]>
    composites: {}
  }

  type SensorReadingGetPayload<S extends boolean | null | undefined | SensorReadingDefaultArgs> = $Result.GetResult<Prisma.$SensorReadingPayload, S>

  type SensorReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorReadingCountAggregateInputType | true
    }

  export interface SensorReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorReading'], meta: { name: 'SensorReading' } }
    /**
     * Find zero or one SensorReading that matches the filter.
     * @param {SensorReadingFindUniqueArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorReadingFindUniqueArgs>(args: SelectSubset<T, SensorReadingFindUniqueArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorReadingFindUniqueOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorReadingFindFirstArgs>(args?: SelectSubset<T, SensorReadingFindFirstArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindFirstOrThrowArgs} args - Arguments to find a SensorReading
     * @example
     * // Get one SensorReading
     * const sensorReading = await prisma.sensorReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany()
     * 
     * // Get first 10 SensorReadings
     * const sensorReadings = await prisma.sensorReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorReadingWithIdOnly = await prisma.sensorReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorReadingFindManyArgs>(args?: SelectSubset<T, SensorReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorReading.
     * @param {SensorReadingCreateArgs} args - Arguments to create a SensorReading.
     * @example
     * // Create one SensorReading
     * const SensorReading = await prisma.sensorReading.create({
     *   data: {
     *     // ... data to create a SensorReading
     *   }
     * })
     * 
     */
    create<T extends SensorReadingCreateArgs>(args: SelectSubset<T, SensorReadingCreateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorReadings.
     * @param {SensorReadingCreateManyArgs} args - Arguments to create many SensorReadings.
     * @example
     * // Create many SensorReadings
     * const sensorReading = await prisma.sensorReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorReadingCreateManyArgs>(args?: SelectSubset<T, SensorReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SensorReading.
     * @param {SensorReadingDeleteArgs} args - Arguments to delete one SensorReading.
     * @example
     * // Delete one SensorReading
     * const SensorReading = await prisma.sensorReading.delete({
     *   where: {
     *     // ... filter to delete one SensorReading
     *   }
     * })
     * 
     */
    delete<T extends SensorReadingDeleteArgs>(args: SelectSubset<T, SensorReadingDeleteArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorReading.
     * @param {SensorReadingUpdateArgs} args - Arguments to update one SensorReading.
     * @example
     * // Update one SensorReading
     * const sensorReading = await prisma.sensorReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorReadingUpdateArgs>(args: SelectSubset<T, SensorReadingUpdateArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorReadings.
     * @param {SensorReadingDeleteManyArgs} args - Arguments to filter SensorReadings to delete.
     * @example
     * // Delete a few SensorReadings
     * const { count } = await prisma.sensorReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorReadingDeleteManyArgs>(args?: SelectSubset<T, SensorReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorReadings
     * const sensorReading = await prisma.sensorReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorReadingUpdateManyArgs>(args: SelectSubset<T, SensorReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SensorReading.
     * @param {SensorReadingUpsertArgs} args - Arguments to update or create a SensorReading.
     * @example
     * // Update or create a SensorReading
     * const sensorReading = await prisma.sensorReading.upsert({
     *   create: {
     *     // ... data to create a SensorReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorReading we want to update
     *   }
     * })
     */
    upsert<T extends SensorReadingUpsertArgs>(args: SelectSubset<T, SensorReadingUpsertArgs<ExtArgs>>): Prisma__SensorReadingClient<$Result.GetResult<Prisma.$SensorReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorReadings that matches the filter.
     * @param {SensorReadingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sensorReading = await prisma.sensorReading.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SensorReadingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SensorReading.
     * @param {SensorReadingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sensorReading = await prisma.sensorReading.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SensorReadingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SensorReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingCountArgs} args - Arguments to filter SensorReadings to count.
     * @example
     * // Count the number of SensorReadings
     * const count = await prisma.sensorReading.count({
     *   where: {
     *     // ... the filter for the SensorReadings we want to count
     *   }
     * })
    **/
    count<T extends SensorReadingCountArgs>(
      args?: Subset<T, SensorReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorReadingAggregateArgs>(args: Subset<T, SensorReadingAggregateArgs>): Prisma.PrismaPromise<GetSensorReadingAggregateType<T>>

    /**
     * Group by SensorReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorReadingGroupByArgs} args - Group by arguments.
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
      T extends SensorReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorReadingGroupByArgs['orderBy'] }
        : { orderBy?: SensorReadingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorReading model
   */
  readonly fields: SensorReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SensorReading model
   */
  interface SensorReadingFieldRefs {
    readonly id: FieldRef<"SensorReading", 'String'>
    readonly sensorId: FieldRef<"SensorReading", 'String'>
    readonly timestamp: FieldRef<"SensorReading", 'DateTime'>
    readonly payload: FieldRef<"SensorReading", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SensorReading findUnique
   */
  export type SensorReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findUniqueOrThrow
   */
  export type SensorReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading findFirst
   */
  export type SensorReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findFirstOrThrow
   */
  export type SensorReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReading to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorReadings.
     */
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading findMany
   */
  export type SensorReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter, which SensorReadings to fetch.
     */
    where?: SensorReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorReadings to fetch.
     */
    orderBy?: SensorReadingOrderByWithRelationInput | SensorReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorReadings.
     */
    cursor?: SensorReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorReadings.
     */
    skip?: number
    distinct?: SensorReadingScalarFieldEnum | SensorReadingScalarFieldEnum[]
  }

  /**
   * SensorReading create
   */
  export type SensorReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorReading.
     */
    data: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
  }

  /**
   * SensorReading createMany
   */
  export type SensorReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorReadings.
     */
    data: SensorReadingCreateManyInput | SensorReadingCreateManyInput[]
  }

  /**
   * SensorReading update
   */
  export type SensorReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorReading.
     */
    data: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
    /**
     * Choose, which SensorReading to update.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading updateMany
   */
  export type SensorReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorReadings.
     */
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyInput>
    /**
     * Filter which SensorReadings to update
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to update.
     */
    limit?: number
  }

  /**
   * SensorReading upsert
   */
  export type SensorReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorReading to update in case it exists.
     */
    where: SensorReadingWhereUniqueInput
    /**
     * In case the SensorReading found by the `where` argument doesn't exist, create a new SensorReading with this data.
     */
    create: XOR<SensorReadingCreateInput, SensorReadingUncheckedCreateInput>
    /**
     * In case the SensorReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorReadingUpdateInput, SensorReadingUncheckedUpdateInput>
  }

  /**
   * SensorReading delete
   */
  export type SensorReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
    /**
     * Filter which SensorReading to delete.
     */
    where: SensorReadingWhereUniqueInput
  }

  /**
   * SensorReading deleteMany
   */
  export type SensorReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorReadings to delete
     */
    where?: SensorReadingWhereInput
    /**
     * Limit how many SensorReadings to delete.
     */
    limit?: number
  }

  /**
   * SensorReading findRaw
   */
  export type SensorReadingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SensorReading aggregateRaw
   */
  export type SensorReadingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SensorReading without action
   */
  export type SensorReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorReading
     */
    select?: SensorReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorReading
     */
    omit?: SensorReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorReadingInclude<ExtArgs> | null
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


  export const SensorReadingScalarFieldEnum: {
    id: 'id',
    sensorId: 'sensorId',
    timestamp: 'timestamp',
    payload: 'payload'
  };

  export type SensorReadingScalarFieldEnum = (typeof SensorReadingScalarFieldEnum)[keyof typeof SensorReadingScalarFieldEnum]


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
    readings?: SensorReadingListRelationFilter
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    readings?: SensorReadingOrderByRelationAggregateInput
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
    readings?: SensorReadingListRelationFilter
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

  export type SensorReadingWhereInput = {
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    id?: StringFilter<"SensorReading"> | string
    sensorId?: StringFilter<"SensorReading"> | string
    timestamp?: DateTimeFilter<"SensorReading"> | Date | string
    payload?: JsonFilter<"SensorReading">
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }

  export type SensorReadingOrderByWithRelationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type SensorReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SensorReadingWhereInput | SensorReadingWhereInput[]
    OR?: SensorReadingWhereInput[]
    NOT?: SensorReadingWhereInput | SensorReadingWhereInput[]
    sensorId?: StringFilter<"SensorReading"> | string
    timestamp?: DateTimeFilter<"SensorReading"> | Date | string
    payload?: JsonFilter<"SensorReading">
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }, "id">

  export type SensorReadingOrderByWithAggregationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
    _count?: SensorReadingCountOrderByAggregateInput
    _max?: SensorReadingMaxOrderByAggregateInput
    _min?: SensorReadingMinOrderByAggregateInput
  }

  export type SensorReadingScalarWhereWithAggregatesInput = {
    AND?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    OR?: SensorReadingScalarWhereWithAggregatesInput[]
    NOT?: SensorReadingScalarWhereWithAggregatesInput | SensorReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SensorReading"> | string
    sensorId?: StringWithAggregatesFilter<"SensorReading"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SensorReading"> | Date | string
    payload?: JsonWithAggregatesFilter<"SensorReading">
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
    readings?: SensorReadingCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateInput = {
    id?: string
    vehicleId: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
    readings?: SensorReadingUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutSensorsNestedInput
    readings?: SensorReadingUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: SensorReadingUncheckedUpdateManyWithoutSensorNestedInput
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

  export type SensorReadingCreateInput = {
    id?: string
    timestamp?: Date | string
    payload: InputJsonValue
    sensor: SensorCreateNestedOneWithoutReadingsInput
  }

  export type SensorReadingUncheckedCreateInput = {
    id?: string
    sensorId: string
    timestamp?: Date | string
    payload: InputJsonValue
  }

  export type SensorReadingUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: InputJsonValue | InputJsonValue
    sensor?: SensorUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type SensorReadingUncheckedUpdateInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: InputJsonValue | InputJsonValue
  }

  export type SensorReadingCreateManyInput = {
    id?: string
    sensorId: string
    timestamp?: Date | string
    payload: InputJsonValue
  }

  export type SensorReadingUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: InputJsonValue | InputJsonValue
  }

  export type SensorReadingUncheckedUpdateManyInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: InputJsonValue | InputJsonValue
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

  export type MaintenanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorOrderByRelationAggregateInput = {
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

  export type SensorReadingListRelationFilter = {
    every?: SensorReadingWhereInput
    some?: SensorReadingWhereInput
    none?: SensorReadingWhereInput
  }

  export type SensorReadingOrderByRelationAggregateInput = {
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

  export type SensorReadingCountOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
  }

  export type SensorReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    timestamp?: SortOrder
  }

  export type SensorReadingMinOrderByAggregateInput = {
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

  export type SensorReadingCreateNestedManyWithoutSensorInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type SensorReadingUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
  }

  export type VehicleUpdateOneRequiredWithoutSensorsNestedInput = {
    create?: XOR<VehicleCreateWithoutSensorsInput, VehicleUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSensorsInput
    upsert?: VehicleUpsertWithoutSensorsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutSensorsInput, VehicleUpdateWithoutSensorsInput>, VehicleUncheckedUpdateWithoutSensorsInput>
  }

  export type SensorReadingUpdateManyWithoutSensorNestedInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutSensorInput | SensorReadingUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutSensorInput | SensorReadingUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutSensorInput | SensorReadingUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
  }

  export type SensorReadingUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput> | SensorReadingCreateWithoutSensorInput[] | SensorReadingUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: SensorReadingCreateOrConnectWithoutSensorInput | SensorReadingCreateOrConnectWithoutSensorInput[]
    upsert?: SensorReadingUpsertWithWhereUniqueWithoutSensorInput | SensorReadingUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: SensorReadingCreateManySensorInputEnvelope
    set?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    disconnect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    delete?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    connect?: SensorReadingWhereUniqueInput | SensorReadingWhereUniqueInput[]
    update?: SensorReadingUpdateWithWhereUniqueWithoutSensorInput | SensorReadingUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: SensorReadingUpdateManyWithWhereWithoutSensorInput | SensorReadingUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
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
    readings?: SensorReadingCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    type: string
    unit: string
    createdAt?: Date | string
    readings?: SensorReadingUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutVehicleInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutVehicleInput, SensorUncheckedCreateWithoutVehicleInput>
  }

  export type SensorCreateManyVehicleInputEnvelope = {
    data: SensorCreateManyVehicleInput | SensorCreateManyVehicleInput[]
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
  }

  export type VehicleCreateOrConnectWithoutSensorsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutSensorsInput, VehicleUncheckedCreateWithoutSensorsInput>
  }

  export type SensorReadingCreateWithoutSensorInput = {
    id?: string
    timestamp?: Date | string
    payload: InputJsonValue
  }

  export type SensorReadingUncheckedCreateWithoutSensorInput = {
    id?: string
    timestamp?: Date | string
    payload: InputJsonValue
  }

  export type SensorReadingCreateOrConnectWithoutSensorInput = {
    where: SensorReadingWhereUniqueInput
    create: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput>
  }

  export type SensorReadingCreateManySensorInputEnvelope = {
    data: SensorReadingCreateManySensorInput | SensorReadingCreateManySensorInput[]
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
  }

  export type SensorReadingUpsertWithWhereUniqueWithoutSensorInput = {
    where: SensorReadingWhereUniqueInput
    update: XOR<SensorReadingUpdateWithoutSensorInput, SensorReadingUncheckedUpdateWithoutSensorInput>
    create: XOR<SensorReadingCreateWithoutSensorInput, SensorReadingUncheckedCreateWithoutSensorInput>
  }

  export type SensorReadingUpdateWithWhereUniqueWithoutSensorInput = {
    where: SensorReadingWhereUniqueInput
    data: XOR<SensorReadingUpdateWithoutSensorInput, SensorReadingUncheckedUpdateWithoutSensorInput>
  }

  export type SensorReadingUpdateManyWithWhereWithoutSensorInput = {
    where: SensorReadingScalarWhereInput
    data: XOR<SensorReadingUpdateManyMutationInput, SensorReadingUncheckedUpdateManyWithoutSensorInput>
  }

  export type SensorReadingScalarWhereInput = {
    AND?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    OR?: SensorReadingScalarWhereInput[]
    NOT?: SensorReadingScalarWhereInput | SensorReadingScalarWhereInput[]
    id?: StringFilter<"SensorReading"> | string
    sensorId?: StringFilter<"SensorReading"> | string
    timestamp?: DateTimeFilter<"SensorReading"> | Date | string
    payload?: JsonFilter<"SensorReading">
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
    readings?: SensorReadingUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: SensorReadingUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateManyWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorReadingCreateManySensorInput = {
    id?: string
    timestamp?: Date | string
    payload: InputJsonValue
  }

  export type SensorReadingUpdateWithoutSensorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: InputJsonValue | InputJsonValue
  }

  export type SensorReadingUncheckedUpdateWithoutSensorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: InputJsonValue | InputJsonValue
  }

  export type SensorReadingUncheckedUpdateManyWithoutSensorInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: InputJsonValue | InputJsonValue
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