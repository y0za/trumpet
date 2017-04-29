import { Request } from './index';
import { Status } from './entities';

export function getStatus(get: Request, id: number): Promise<Status> {
  return get(`/api/v1/statuses/${id}`).then((response) => {
    return response.data as Status;
  });
}

