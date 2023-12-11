export interface IVacancies {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  uuid?: string;
  title: string;
  slug: string;
  position_id: number;
  location_id: number;
  job_type: string;
  amount_need_employee: number | string;
  description: string;
  expiration_date: string | Date;
  offers_remote_work: number;
  is_ranged_salary: number;
  is_visible_salary: number;
  min_salary: number;
  max_salary?: number;
  min_experience: number;
  max_experience?: number;
  location_name?: string;
  position_name?: string;
}
export interface IPositions {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  uuid?: string;
  name: string;
}
export interface ILocations {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  uuid?: string;
  name: string;
}

export type ResponseType = IVacancies;

export interface IBaseResponse<T> {
  current_page: number;
  data: T;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    active: boolean;
    label: string;
    url: string | null;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
