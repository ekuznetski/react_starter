export type AnyFunction<T = void, U = any> = ((...args: U[]) => T) | null;
export type ExtractComponentProps<
  Type
> = Type extends React.NamedExoticComponent<infer X> ? X : never;
