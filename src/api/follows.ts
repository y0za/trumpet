import { RequestWithData } from './index';
import { Account } from './entities';

export function followRemoteUser(post: RequestWithData, uri: string): Promise<Account> {
  const params = { uri };
  return post(`/api/v1/follows`, { params }).then((response) => {
    return response.data as Account;
  });
}
