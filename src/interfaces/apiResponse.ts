/**
 * api response
 */
export interface ApiResponse<T = any> {
  code: number | string;
  message: string;
  data: T;
}
