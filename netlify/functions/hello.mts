import { Config, Context } from '@netlify/functions';
import { bootstrap } from 'src/bootstrap';

let server;

export default async (req: Request, context: Context) => {
  server = server ?? (await bootstrap());
  return server(req, context);
};

export const config: Config = {
  path: '/hello',
};
