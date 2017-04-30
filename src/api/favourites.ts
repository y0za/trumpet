import { Request } from './index';
import { Status } from './entities';
import { RangeParams } from './params';

export function getFavourites(get: Request, params?: RangeParams): Promise<Status[]> {
  return get('/api/v1/favourites').then((response) => {
    return response.data as Status[];
  });
}

