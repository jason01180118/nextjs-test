// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const datas = [
    { id: '1', name: '123' },
    { id: '2', name: '456' },
  ];
  const { id } = req.query;
  let status = 400;
  datas.map((data) => {
    if (data.id === id) {
      res.status(200).json({ name: data.name });
      status = 200;
    }
  });
  if (status === 400) {
    res.status(400).json({ error: 'failed to load data' });
  }
}
