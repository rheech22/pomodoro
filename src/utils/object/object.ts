// 오버로딩의 어려움...
// interface Get {
//   <T extends object, K extends keyof T>(key: K): (obj: T) => T[K];
//   <T extends object, K extends keyof T>(...keys: K[]): (
//     obj: T
//   ) => T;
// }

export const get =
  <T, K extends keyof T>(key: K) =>
  (obj: T): T[K] => {
    return obj[key];
  };

export const getMany =
  <T, K extends keyof T>(...keys: K[]) =>
  (obj: T): T =>
    keys.reduce((acc, cur) => ((acc[cur] = obj[cur]), acc), {} as T);
