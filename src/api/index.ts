import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import * as e from './entities';
import * as p from './params';
import * as fd from './form-data';
import * as accounts from './accounts';
import * as blocks from './blocks';
import * as favourites from './favourites';
import * as followRequests from './follow-requests';
import * as follows from './follows';
import * as instance from './instance';
import * as media from './media';
import * as mutes from './mutes';
import * as statuses from './statuses';

export class Api {
  private baseConfig: AxiosRequestConfig;
  private client: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      baseURL: baseUrl,
      responseType: 'json'
    };
    this.client = axios.create(this.baseConfig);
  }

  async authenticate(clientId: string, clientSecret: string, username: string, password: string): Promise<string> {
    const response = await this.client.post('/oauth/token', {
      'client_id': clientId,
      'client_secret': clientSecret,
      'grant_type': 'password',
      'username': username,
      'password': password,
      'scope': 'read write follow'
    });

    const accessToken = response.data['access_token'] as string;
    this.baseConfig.headers['Authorization'] = `Bearer ${accessToken}`;
    this.client = axios.create(this.baseConfig);

    return Promise.resolve(accessToken);
  }

  setAccessToken(accessToken: string): void {
    this.baseConfig.headers['Authorization'] = `Bearer ${accessToken}`;
    this.client = axios.create(this.baseConfig);
  }

  get = (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return this.client.get(path, Object.assign({}, this.baseConfig, config));
  }

  delete = (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return this.client.delete(path, Object.assign({}, this.baseConfig, config));
  }

  head = (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return this.client.head(path, Object.assign({}, this.baseConfig, config));
  }

  post = (path: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return this.client.post(path, data, Object.assign({}, this.baseConfig, config));
  }

  put = (path: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return this.client.put(path, data, Object.assign({}, this.baseConfig, config));
  }

  patch = (path: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return this.client.patch(path, data, Object.assign({}, this.baseConfig, config));
  }

  getAccount(id: number): Promise<e.Account> {
    return accounts.getAccount(this.get, id);
  }

  getCurrentUser(): Promise<e.Account> {
    return accounts.getCurrentUser(this.get);
  }

  updateCurrentUser(profile: fd.Profile): Promise<e.Account> {
    return accounts.updateCurrentUser(this.patch, profile);
  }

  getAccountFollowers(id: number, params?: p.RangeParams): Promise<e.Account[]> {
    return accounts.getAccountFollowers(this.get, id, params);
  }

  getAccountFollowing(id: number, params?: p.RangeParams): Promise<e.Account[]> {
    return accounts.getAccountFollowing(this.get, id, params);
  }

  getAccountStatuses(id: number, params?: p.StatusesParams): Promise<e.Status[]> {
    return accounts.getAccountStatuses(this.get, id, params);
  }

  followAccount(id: number): Promise<e.Relationship> {
    return accounts.followAccount(this.post, id);
  }

  unfollowAccount(id: number): Promise<e.Relationship> {
    return accounts.unfollowAccount(this.post, id);
  }

  blockAccount(id: number): Promise<e.Relationship> {
    return accounts.blockAccount(this.post, id);
  }

  unblockAccount(id: number): Promise<e.Relationship> {
    return accounts.blockAccount(this.post, id);
  }

  muteAccount(id: number): Promise<e.Relationship> {
    return accounts.muteAccount(this.post, id);
  }

  unmuteAccount(id: number): Promise<e.Relationship> {
    return accounts.unmuteAccount(this.post, id);
  }

  getAccountRelationships(params?: p.RelationshipsParams): Promise<e.Relationship[]> {
    return accounts.getAccountRelationships(this.get, params);
  }

  searchAccounts(params?: p.SearchAccountsParams): Promise<e.Account[]> {
    return accounts.searchAccounts(this.get, params);
  }

  getBlocks(params?: p.RangeParams): Promise<e.Account[]> {
    return blocks.getBlocks(this.get, params);
  }

  getFavourites(params?: p.RangeParams): Promise<e.Status[]> {
    return favourites.getFavourites(this.get, params);
  }

  getFollowRequests(params?: p.RangeParams): Promise<e.Account[]> {
    return followRequests.getFollowRequests(this.get, params);
  }

  authorizeFollowRequest(id: number): Promise<void> {
    return followRequests.authorizeFollowRequest(this.post, id);
  }

  rejectFollowRequest(id: number): Promise<void> {
    return followRequests.rejectFollowRequest(this.post, id);
  }

  followRemoteUser(uri: string): Promise<e.Account> {
    return follows.followRemoteUser(this.post, uri);
  }

  getInstance(): Promise<e.Instance> {
    return instance.getInstance(this.get);
  }

  uploadMedia(file: File): Promise<e.Attachment> {
    return media.uploadMedia(this.post, file);
  }

  getMutes(params?: p.RangeParams): Promise<e.Account[]> {
    return mutes.getMutes(this.get, params);
  }

  getStatus(id: number): Promise<e.Status> {
    return statuses.getStatus(this.get, id);
  }

  getStatusContext(id: number): Promise<e.Context> {
    return statuses.getStatusContext(this.get, id);
  }

  getStatusCard(id: number): Promise<e.Card | null> {
    return statuses.getStatusCard(this.get, id);
  }

  getRebloggedBy(id: number, params?: p.RangeParams): Promise<e.Account[]> {
    return statuses.getRebloggedBy(this.get, id, params);
  }

  getFavouritedBy(id: number, params?: p.RangeParams): Promise<e.Account[]> {
    return statuses.getFavouritedBy(this.get, id, params);
  }

  postStatus(post: RequestWithData, toot: fd.Toot): Promise<e.Status> {
    return statuses.postStatus(this.post, toot);
  }

  deleteStatus(id: number): Promise<void> {
    return statuses.deleteStatus(this.delete, id);
  }

  reblog(id: number): Promise<e.Status> {
    return statuses.reblog(this.post, id);
  }

  unreblog(id: number): Promise<e.Status> {
    return statuses.unreblog(this.post, id);
  }

  favourite(id: number): Promise<e.Status> {
    return statuses.favourite(this.post, id);
  }

  unfavourite(id: number): Promise<e.Status> {
    return statuses.unfavourite(this.post, id);
  }

  getTimelineHome(params?: p.RangeParams): Promise<e.Status[]> {
    return statuses.getTimelineHome(this.get, params);
  }

  getTimelinePublic(params?: p.TimelineParams): Promise<e.Status[]> {
    return statuses.getTimelinePublic(this.get, params);
  }

  getTimelineHashtag(tag: string, params?: p.TimelineParams): Promise<e.Status[]> {
    return statuses.getTimelineHashtag(this.get, tag, params);
  }
}

export interface Request {
  (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}

export interface RequestWithData {
  (path: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}
