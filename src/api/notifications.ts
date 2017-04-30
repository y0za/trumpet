import { Request, RequestWithData } from './index';
import { Notification } from './entities';
import { RangeParams } from './params';

export function getNotifications(get: Request, params?: RangeParams): Promise<Notification[]> {
  return get('/api/v1/notifications', { params }).then((response) => {
    return response.data as Notification[];
  });
}

export function getNotification(get: Request, id: number): Promise<Notification> {
  return get(`/api/v1/notifications/${id}`).then((response) => {
    return response.data as Notification;
  });
}

export function clearNotifications(post: RequestWithData): Promise<void> {
  return post(`/api/v1/notifications/clear`).then((response) => {
    return;
  });
}
