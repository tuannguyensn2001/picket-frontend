export type AppResponse<T = null> = {
  message: string;
  data: T;
};
