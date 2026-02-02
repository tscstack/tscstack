/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as data_auth from "../data/auth.js";
import type * as data_polar from "../data/polar.js";
import type * as http from "../http.js";
import type * as libs_polar from "../libs/polar.js";
import type * as webhooks_clerk from "../webhooks/clerk.js";
import type * as webhooks_polar from "../webhooks/polar.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "data/auth": typeof data_auth;
  "data/polar": typeof data_polar;
  http: typeof http;
  "libs/polar": typeof libs_polar;
  "webhooks/clerk": typeof webhooks_clerk;
  "webhooks/polar": typeof webhooks_polar;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
