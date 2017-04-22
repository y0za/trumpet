import { Request } from './index';
import { Account } from './entities';

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
