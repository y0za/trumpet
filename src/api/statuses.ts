import { Request } from './index';
import { Card, Context, Status } from './entities';

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

export function getStatusCard(get: Request, id: number): Promise<Card | null> {
  return get(`/api/v1/statuses/${id}/card`).then((response) => {
    if (Object.keys(response.data).length === 0) {
      return null;
    }
    return response.data as Card;
  });
}
