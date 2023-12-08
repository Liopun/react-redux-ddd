import { AxiosError } from "axios";
import { right, left } from "../../../shared/core/Either";
import { Result } from "../../../shared/core/Result";
import { APIResponse } from "../../../shared/infra/services/APIResponse";
import { BaseAPI } from "../../../shared/infra/services/BaseAPI";
import { User } from "../models/user";

export interface IUsersService {
    getCurrentUserProfile (): Promise<User>;
    signUp (email: string, password: string): Promise<APIResponse<string>>;
    signIn (username: string, password: string): Promise<APIResponse<void>>;
    signOut (): Promise<APIResponse<void>>;
    claimUsername (username: string): Promise<APIResponse<void>>;
    updateProfile (bio: string): Promise<APIResponse<void>>;
    activateAccount (code: string): Promise<APIResponse<string>>;
}

export class UsersService extends BaseAPI implements IUsersService {
    async getCurrentUserProfile (): Promise<User> {
        const response = await this.get('/users/profile', null);
        console.debug("******", response.data.data)
        return response.data.data as User;
    }

    public async signOut (): Promise<APIResponse<void>> {
        try {
          await this.get('/users/signout', null)
          return right(Result.ok<void>());
        } catch (err) {
            const error = err as AxiosError
            return left(error.response ? (error.response.data as { message: string }).message : "Connection failed")
        }
    }

    async signIn (username: string, password: string): Promise<APIResponse<void>> {
        try {
          await this.post('/users/signin', { username, password },null);
          return right(Result.ok<void>());
        } catch (err) {
            const error = err as AxiosError
            return left(error.response ? (error.response.data as { message: string }).message : "Connection failed")
        }
    }

    async signUp (email: string, password: string): Promise<APIResponse<string>> {
        try {
          const response = await this.post('/users/signup', { email, password });
          return right(Result.ok<string>(response.data.message));
        } catch (err) {
            const error = err as AxiosError
            return left(error.response ? (error.response.data as { message: string }).message : "Connection failed")
        }
    }

    async claimUsername (username: string): Promise<APIResponse<void>> {
        try {
          await this.post('/users/username/claim', { username });
          return right(Result.ok<void>());
        } catch (err) {
            const error = err as AxiosError
            return left(error.response ? (error.response.data as { message: string }).message : "Connection failed")
        }
    }

    async updateProfile (bio: string): Promise<APIResponse<void>> {
        try {
          await this.post('/users', { bio });
          return right(Result.ok<void>());
        } catch (err) {
            const error = err as AxiosError
            return left(error.response ? (error.response.data as { message: string }).message : "Connection failed")
        }
    }

    async activateAccount (code: string): Promise<APIResponse<string>> {
        try {
            const response = await this.get(`/users/activate/${code}`, null);
            return right(Result.ok<string>(response.data.message));
          } catch (err) {
              const error = err as AxiosError
              return left(error.response ? (error.response.data as { message: string }).message : "Connection failed")
          }
    }
}