export interface Account {
  id: number;
  username: string;
  acct: string;
  display_name: string;
  locked: boolean;
  created_at: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  note: string;
  url: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
}
