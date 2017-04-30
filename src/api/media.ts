import { RequestWithData } from './index';
import { Attachment } from './entities';

export function uploadMedia(post: RequestWithData, file: File): Promise<Attachment> {
  const data = new FormData();
  data.append('file', file);
  return post('/api/v1/media', data).then((response) => {
    return response.data as Attachment;
  });
}
