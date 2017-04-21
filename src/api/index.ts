import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

export class Api {
  private clientId: string;
  private clientSecret: string;
  private baseConfig: AxiosRequestConfig;
  private client: AxiosInstance;

  constructor(baseUrl: string, clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.baseConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      baseURL: baseUrl,
      responseType: 'json'
    };
    this.client = axios.create(this.baseConfig)
  }

  async authenticate(username: string, password: string): Promise<string> {
    const response = await this.client.post('/oauth/token', {
      'client_id': this.clientId,
      'client_secret': this.clientSecret,
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

  get(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.get(path, Object.assign({}, this.baseConfig, config));
  }

  delete(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.delete(path, Object.assign({}, this.baseConfig, config));
  }

  head(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.head(path, Object.assign({}, this.baseConfig, config));
  }

  post(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.post(path, data, Object.assign({}, this.baseConfig, config));
  }

  put(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.put(path, data, Object.assign({}, this.baseConfig, config));
  }

  patch(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.client.patch(path, data, Object.assign({}, this.baseConfig, config));
  }
}

export interface Request {
  (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}

export interface RequestWithData {
  (path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse>;
}
