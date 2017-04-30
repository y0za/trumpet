import { Request } from './index';
import { Account } from './entities';
import { RangeParams } from './params';

export function getBlocks(get: Request, params?: RangeParams): Promise<Account[]> {
  return get('/api/v1/blocks').then((response) => {
    return response.data as Account[];
  });
}
