import { Request } from './index';
import { Account } from './entities';
import { RangeParams } from './params';

export function getFollowRequests(get: Request, params?: RangeParams): Promise<Account[]> {
  return get('/api/v1/follow_requests').then((response) => {
    return response.data as Account[];
  });
}

