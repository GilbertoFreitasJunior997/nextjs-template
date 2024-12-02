// biome-ignore lint/suspicious/noExplicitAny:
export type AnyFunction = (...args: any) => any;
export type OmitMerge<T, K extends object> = Omit<T, keyof K> & K;

export type ActionSuccessResult<T> = {
  success: true;
  data: T;
  message?: string;
};
export type ActionErrorResult = { success: false; error: unknown };

export type ActionDataResult<T> = ActionSuccessResult<T> | ActionErrorResult;
export type ActionResult<T> = Promise<ActionDataResult<T>>;
