import { Request } from './index';
import { Account } from './entities';
import { RangeParams } from './params';

export function getMutes(get: Request, params?: RangeParams): Promise<Account[]> {
  return get('/api/v1/mutes', { params }).then((response) => {
    return response.data as Account[];
  });
}
