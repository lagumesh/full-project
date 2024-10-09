/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/search` | `/(tabs)/settings` | `/(tabs)/shop` | `/(tabs)/wishlist` | `/Checkout` | `/Shopping` | `/SignUp` | `/_sitemap` | `/home` | `/payment` | `/search` | `/settings` | `/shop` | `/wishlist`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
