import fs from 'fs';
import path from 'path';

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  error: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const allowed = process.env.NODE_ENV == 'development';
  if (!allowed) {
    return res.status(403).json({
      error: 'Endpoint not allowed under production',
    });
  }

  const file = path.join(process.cwd(), 'data', 'projects.json');
  const content = fs.readFileSync(file, {
    encoding: 'utf-8',
  });

  res.status(200).json(JSON.parse(content));
}
