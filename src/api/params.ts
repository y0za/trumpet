export interface RangeParams {
  max_id?: number;
  since_id?: number;
  limit?: number;
}

export interface RelationshipsParams {
  id?: number | number[];
}

export interface SearchAccountsParams extends SearchParams {
  limit?: number;
}

export interface SearchParams {
  q: string;
  resolve?: boolean;
}

export interface StatusesParams extends RangeParams {
  only_media?: boolean;
  exclude_replies?: boolean;
}
