import { Request } from './index';
import { Report } from './entities';

export function getReports(get: Request): Promise<Report[]> {
  return get('/api/v1/reports').then((response) => {
    return response.data as Report[];
  })
}
