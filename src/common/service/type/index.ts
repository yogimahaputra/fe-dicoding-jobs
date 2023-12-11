import { IBaseResponse } from '@/common/type/response';

export interface IQuery<T> {
  data?: IBaseResponse<T>;
  error: string | null;
  isError: boolean;
  isPending: boolean;
}
export interface IQueryDetail<T> {
  data?: T;
  error: string | null;
  isError: boolean;
  isPending: boolean;
}
