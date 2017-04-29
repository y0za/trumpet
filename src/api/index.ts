import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import * as e from './entities';
import * as p from './params';
import * as fd from './form-data'
import * as accounts from './accounts'

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
    this.client = axios.create(this.baseConfig)
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
    return accounts.getAccount(this.get, id)
  }

  getCurrentUser(): Promise<e.Account> {
    return accounts.getCurrentUser(this.get)
  }

  updateCurrentUser(profile: fd.Profile): Promise<e.Account> {
    return accounts.updateCurrentUser(this.patch, profile)
  }

  getAccountFollowers(id: number, params?: p.RangeParams): Promise<e.Account[]> {
    return accounts.getAccountFollowers(this.get, id, params)
  }

  getAccountFollowing(id: number, params?: p.RangeParams): Promise<e.Account[]> {
    return accounts.getAccountFollowing(this.get, id, params)
  }

  getAccountStatuses(id: number, params?: p.StatusesParams): Promise<e.Status[]> {
    return accounts.getAccountStatuses(this.get, id, params)
  }

  followAccount(id: number): Promise<e.Relationship> {
    return accounts.followAccount(this.post, id)
  }

  unfollowAccount(id: number): Promise<e.Relationship> {
    return accounts.unfollowAccount(this.post, id)
  }

  blockAccount(id: number): Promise<e.Relationship> {
    return accounts.blockAccount(this.post, id)
  }

  unblockAccount(id: number): Promise<e.Relationship> {
    return accounts.blockAccount(this.post, id)
  }

  muteAccount(id: number): Promise<e.Relationship> {
    return accounts.muteAccount(this.post, id)
  }

  unmuteAccount(id: number): Promise<e.Relationship> {
    return accounts.unmuteAccount(this.post, id)
  }

  getAccountRelationships(params?: p.RelationshipsParams): Promise<e.Relationship[]> {
    return accounts.getAccountRelationships(this.get, params)
  }

  searchAccounts(params?: p.SearchAccountsParams): Promise<e.Account[]> {
    return accounts.searchAccounts(this.get, params)
  }
}

export interface Request {
  (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}

export interface RequestWithData {
  (path: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}
