import { TimelineParams } from './params';

export function convertTimelineParams(params?: TimelineParams): any {
  if (params == null) {
    return null;
  }

  const realParams: any = {};
  for (const key of Object.keys(params)) {
    if (key !== 'local') {
      realParams[key] = (params as any)[key];
    }
  }
  if (params.local) {
    realParams.local = 'true';
  }
  return realParams;
}
