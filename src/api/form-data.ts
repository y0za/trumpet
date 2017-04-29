export interface Profile {
  display_name?: string;
  note?: string;
  avatar?: string;
  header?: string;
}

export interface Toot {
  status: string;
  in_reply_to_id?: number;
  media_ids?: number[];
  sensitive?: boolean;
  spoiler_text?: string;
  visibility?: string;
}
