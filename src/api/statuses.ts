import { Request } from './index';
import { Context, Status } from './entities';

export function getStatus(get: Request, id: number): Promise<Status> {
  return get(`/api/v1/statuses/${id}`).then((response) => {
    return response.data as Status;
  });
}

export function getStatusContext(get: Request, id: number): Promise<Context> {
  return get(`/api/v1/statuses/${id}/context`).then((response) => {
    return response.data as Context;
  });
}
