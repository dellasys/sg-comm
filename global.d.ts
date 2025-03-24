type ReplaceDeep<T, U> = {
  [K in keyof T]: K extends keyof U
    ? U[K] extends object
      ? T[K] extends object
        ? ReplaceDeep<T[K], U[K]>
        : U[K]
      : U[K]
    : T[K];
} & Omit<U, keyof T>;
