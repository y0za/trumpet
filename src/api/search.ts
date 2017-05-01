import { Request } from './index';
import { Results } from './entities';
import { SearchParams } from './params';

export function search(get: Request, params: SearchParams): Promise<Results> {
  return get('/api/v1/search', { params }).then((response) => {
    return response.data as Results;
  });
}
