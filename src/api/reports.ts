import { Request, RequestWithData } from './index';
import { Report } from './entities';
import { ReportContent } from './form-data';

export function getReports(get: Request): Promise<Report[]> {
  return get('/api/v1/reports').then((response) => {
    return response.data as Report[];
  });
}

export function report(post: RequestWithData, reportContent: ReportContent): Promise<Report> {
  return post('/api/v1/reports', reportContent).then((response) => {
    return response.data as Report;
  });
}
