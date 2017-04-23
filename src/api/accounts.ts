import { Request, RequestWithData, RangeParams, StatusesParams } from './index';
import { Account, Profile, Relationship, Status } from './entities';

export function getAccount(get: Request, id: number): Promise<Account> {
  return get(`/api/v1/accounts/${id}`).then((response) => {
    return response.data as Account
  });
}

export function getCurrentUser(get: Request): Promise<Account> {
  return get('/api/v1/accounts/verify_credentials').then((response) => {
    return response.data as Account
  })
}

export function updateCurrentUser(patch: RequestWithData, profile: Profile): Promise<Account> {
  return patch('/api/v1/accounts/update_credentials', profile).then((response) => {
    return response.data as Account
  })
}

export function getAccountFollowers(get: Request, id: number, params?: RangeParams): Promise<Account[]> {
  return get(`/api/v1/accounts/${id}/followers`, { params }).then((response) => {
    return response.data as Account[]
  })
}

export function getAccountFollowing(get: Request, id: number, params?: RangeParams): Promise<Account[]> {
  return get(`/api/v1/accounts/${id}/following`, { params }).then((response) => {
    return response.data as Account[]
  })
}

export function getAccountStatuses(get: Request, id: number, params?: StatusesParams): Promise<Status[]> {
  return get(`/api/v1/accounts/${id}/statuses`, { params }).then((response) => {
    return response.data as Status[]
  })
}

export function followAccount(post: RequestWithData, id: number): Promise<Relationship> {
  return post(`/api/v1/accounts/${id}/follow`).then((response) => {
    return response.data as Relationship
  })
}

export function unfollowAccount(post: RequestWithData, id: number): Promise<Relationship> {
  return post(`/api/v1/accounts/${id}/unfollow`).then((response) => {
    return response.data as Relationship
  })
}

export function blockAccount(post: RequestWithData, id: number): Promise<Relationship> {
  return post(`/api/v1/accounts/${id}/block`).then((response) => {
    return response.data as Relationship
  })
}

export function unblockAccount(post: RequestWithData, id: number): Promise<Relationship> {
  return post(`/api/v1/accounts/${id}/unblock`).then((response) => {
    return response.data as Relationship
  })
}
