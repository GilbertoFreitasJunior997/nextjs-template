export type OmitMerge<T, K extends object> = Omit<T, keyof K> & K;

export type ActionSuccessResult<T> = {
  success: true;
  data: T;
  message?: string;
};
export type ActionErrorResult = { success: false; error: unknown };
export type ActionDataResult<T> = ActionSuccessResult<T> | ActionErrorResult;
export type ActionResult<T> =
  | ActionDataResult<T>
  | Promise<ActionDataResult<T>>;

export type Route = {
  name: string;
  path: string;
};
