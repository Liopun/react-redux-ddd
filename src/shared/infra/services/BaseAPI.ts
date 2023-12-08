//@ts-ignore
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { apiCfg } from '../../../config/api';
import { get } from 'lodash'

export abstract class BaseAPI {
  protected baseUrl: string;
  private axiosInstance: AxiosInstance;
  private retryCount: number;
  private maxRetries: number;

  constructor () {
    this.baseUrl = apiCfg.baseUrl
    this.retryCount = 0
    this.maxRetries = 0
    axios.defaults.withCredentials = true
    this.axiosInstance = axios.create()
    this.enableInterceptors();
  }

  private enableInterceptors (): void {
    this.axiosInstance.interceptors.response.use(
      this.getSuccessResponseHandler(),
      this.getErrorResponseHandler()
    )
  }

  private getSuccessResponseHandler () {
    return (response: AxiosResponse) => {
      return response;
    }
  }

  private didAccessTokenExpire (response: AxiosResponse): boolean {
    return get(response, 'data.message') === "missing access token cookie";
  }

  private async renewAuthentication (): Promise<void> {
    await axios({
      method: 'GET',
      url: `${this.baseUrl}/users/auth/refresh`,
    });
  }

  private getErrorResponseHandler () {
    this.retryCount = 0;
    this.maxRetries = 3;
    return async (error: any) => {
      // let retryCount = 0;
      // const maxRetries = 3;

      const retryRequest = async () => {
        try {
          // Get the new access token
          await this.renewAuthentication();

          // Retry request
          console.debug("REtrieeeeed...", this.maxRetries, this.retryCount)
          return setTimeout(() => this.axiosInstance.request(error.config), 100);
        } catch (err) {
          console.error(err);
          if (window.location.pathname != '/signin') {
            window.location.href = '/signin';
          }
          throw err; // Re-throw the error if retry fails
        }
      }

      const handleRetry = async () => {
        if (this.retryCount < this.maxRetries) {
          this.retryCount++;
          return retryRequest();
        } else {
          if (window.location.pathname != '/signin') {
            window.location.href = '/signin';
          }
          // Reject the promise if max retries are reached
          return Promise.reject({ ...error });
        }
      };

      if (this.didAccessTokenExpire(error.response)) {
        return handleRetry();
      }

      return Promise.reject({ ...error })
    }
  }

  protected get (url: string, params?: any, headers?: any): Promise<any> {
    return this.axiosInstance({
      method: 'GET',
      url: `${this.baseUrl}${url}`,
      params: params ? params : null,
      headers: headers ? headers : null
    })
  }

  protected post (url: string, data?: any, params?: any, headers?: any): Promise<any> {
    return this.axiosInstance({
      method: 'POST',
      url: `${this.baseUrl}${url}`,
      data: data ? data : null,
      params: params ? params : null,
      headers: headers ? headers : null
    })
  }

  protected delete (url: string, data?: any, params?: any, headers?: any): Promise<any> {
    return this.axiosInstance({
      method: 'DELETE',
      url: `${this.baseUrl}${url}`,
      data: data ? data : null,
      params: params ? params : null,
      headers: headers ? headers : null
    })
  }
}