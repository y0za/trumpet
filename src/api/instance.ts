import { Request } from './index';
import { Instance } from './entities';

export function getInstance(get: Request): Promise<Instance> {
  return get('/api/v1/instance').then((response) => {
    return response.data as Instance;
  });
}
