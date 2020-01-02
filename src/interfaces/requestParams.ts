export interface RequestParams {
  cancelId?: symbol;
}

export interface RequestWithDataParams<T = {}> extends RequestParams {
  data: T;
}
