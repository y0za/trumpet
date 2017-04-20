import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class Api {
  private clientId: string;
  private clientSecret: string;
  private baseConfig: AxiosRequestConfig;

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
  }

  async authenticate(username: string, password: string): Promise<string> {
    const response = await axios.post('/oauth/token', {
      'client_id': this.clientId,
      'client_secret': this.clientSecret,
      'grant_type': 'password',
      'username': username,
      'password': password,
      'scope': 'read write follow'
    }, this.baseConfig);

    const accessToken = response.data['access_token'] as string;
    this.baseConfig.headers['Authorization'] = `Bearer ${accessToken}`;
    return Promise.resolve(accessToken);
  }

  get(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.get(path, Object.assign({}, this.baseConfig, config));
  }

  delete(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.delete(path, Object.assign({}, this.baseConfig, config));
  }

  head(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.head(path, Object.assign({}, this.baseConfig, config));
  }

  post(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(path, data, Object.assign({}, this.baseConfig, config));
  }

  put(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.put(path, data, Object.assign({}, this.baseConfig, config));
  }

  patch(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.patch(path, data, Object.assign({}, this.baseConfig, config));
  }
}
