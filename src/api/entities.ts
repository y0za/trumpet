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

export interface Application {
  name: string;
  website: string;
}

export interface Attachment {
  id: number;
  type: 'image' | 'video' | 'gifv';
  url: string;
  remote_url: string;
  preview_url: string;
  text_url: string;
}

export interface Card {
  url: string;
  title: string;
  description: string;
  image: string;
}

export interface Context {
  ancestors: Status[];
  descendants: Status[];
}

export interface Instance {
  uri: string;
  title: string;
  description: string;
  email: string;
}

export interface Mention {
  url: string;
  username: string;
  acct: string;
  id: number;
}

export interface Notification {
  id: number;
  type: 'mention' | 'reblog' | 'favourite' | 'follow';
  created_at: string;
  account: Account;
  status?: Status;
}

export interface Relationship {
  id: number;
  following: boolean;
  followed_by: boolean;
  blocking: boolean;
  muting: boolean;
  requested: boolean;
}

export interface Report {
  id: number;
  action_taken: boolean;
}

export interface Results {
  accounts: Account[];
  statuses: Status[];
  hashtags: string[];
}

export interface Status {
  id: number;
  uri: string;
  url: string;
  account: Account;
  in_reply_to_id?: number;
  in_reply_to_account_id?: number;
  reblog?: Status;
  content: string;
  created_at: string;
  reblog_count: number;
  favourites_count: number;
  reblogged?: boolean;
  favourited?: boolean;
  sensitive: boolean;
  spoiler_text: string;
  visibility: 'public' | 'unlisted' | 'private' | 'direct';
  media_attachments: Attachment[];
  mentions: Mention[];
  tags: Tag[];
  application: Application;
}

export interface Tag {
  name: string;
  url: string;
}
