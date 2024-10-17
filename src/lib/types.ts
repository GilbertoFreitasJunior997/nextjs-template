export type OmitKeys<T, K extends object> = Omit<T, keyof K>;

export type OmitMerge<T, K extends object> = Omit<T, keyof K> & K;
