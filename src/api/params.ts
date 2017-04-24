export interface RangeParams {
  max_id?: number;
  since_id?: number;
  limit?: number;
}

export interface RelationshipsParams extends RangeParams {
  id?: number | number[];
}

export interface StatusesParams extends RangeParams {
  only_media?: boolean;
  exclude_replies?: boolean;
}
