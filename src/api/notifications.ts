import { Request } from './index';
import { Notification } from './entities';
import { RangeParams } from './params';

export function getNotifications(get: Request, params?: RangeParams): Promise<Notification[]> {
  return get('/api/v1/notifications', { params }).then((response) => {
    return response.data as Notification[];
  });
}
