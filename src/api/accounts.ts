import { Request, RequestWithData } from './index';
import { Account, Profile } from './entities';

export function getAccount(get: Request, id: number): Promise<Account> {
  return get(`/api/v1/accounts/${id}`).then((response) => {
    return response.data as Account
  });
}

export function getCurrentUser(get: Request): Promise<Account> {
  return get('/api/v1/accounts/verify_credentials').then((response) => {
    return response.data as Account
  })
}

export function updateCurrentUser(patch: RequestWithData, profile: Profile): Promise<Account> {
  return patch('/api/v1/accounts/update_credentials', profile).then((response) => {
    return response.data as Account
  })
}
