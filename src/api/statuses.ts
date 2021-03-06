import { Request, RequestWithData } from './index';
import { Account, Card, Context, Status } from './entities';
import { RangeParams, TimelineParams } from './params';
import { Toot } from './form-data';
import { convertTimelineParams } from './helpers';

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

export function getRebloggedBy(get: Request, id: number, params?: RangeParams): Promise<Account[]> {
  return get(`/api/v1/statuses/${id}/reblogged_by`, { params }).then((response) => {
    return response.data as Account[];
  });
}

export function getFavouritedBy(get: Request, id: number, params?: RangeParams): Promise<Account[]> {
  return get(`/api/v1/statuses/${id}/favourited_by`, { params }).then((response) => {
    return response.data as Account[];
  });
}

export function postStatus(post: RequestWithData, toot: Toot): Promise<Status> {
  return post(`/api/v1/statuses`, toot).then((response) => {
    return response.data as Status;
  });
}

export function deleteStatus(deleteRequest: Request, id: number): Promise<void> {
  return deleteRequest(`/api/v1/statuses/${id}`).then((response) => {
    return;
  });
}

export function reblog(post: RequestWithData, id: number): Promise<Status> {
  return post(`/api/v1/statuses/${id}/reblog`).then((response) => {
    return response.data as Status;
  });
}

export function unreblog(post: RequestWithData, id: number): Promise<Status> {
  return post(`/api/v1/statuses/${id}/unreblog`).then((response) => {
    return response.data as Status;
  });
}

export function favourite(post: RequestWithData, id: number): Promise<Status> {
  return post(`/api/v1/statuses/${id}/favourite`).then((response) => {
    return response.data as Status;
  });
}

export function unfavourite(post: RequestWithData, id: number): Promise<Status> {
  return post(`/api/v1/statuses/${id}/unfavourite`).then((response) => {
    return response.data as Status;
  });
}

export function getTimelineHome(get: Request, params?: RangeParams): Promise<Status[]> {
  return get(`/api/v1/statuses/timelines/home`, { params }).then((response) => {
    return response.data as Status[];
  });
}

export function getTimelinePublic(get: Request, params?: TimelineParams): Promise<Status[]> {
  const realParams = convertTimelineParams(params);
  return get(`/api/v1/statuses/timelines/public`, { params: realParams }).then((response) => {
    return response.data as Status[];
  });
}

export function getTimelineHashtag(get: Request, tag: string, params?: TimelineParams): Promise<Status[]> {
  const escapedTag = encodeURIComponent(tag);
  const realParams = convertTimelineParams(params);
  return get(`/api/v1/statuses/timelines/tag/${escapedTag}`, { params: realParams }).then((response) => {
    return response.data as Status[];
  });
}
