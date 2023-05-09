// next
import { NextApiRequest, NextApiResponse } from 'next';
// utils
import cors from 'src/utils/cors';
// _mock
import { mails } from 'src/_mock/_mail';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await cors(req, res);

    const { mailId } = req.query;

    const mail = mails.find((_mail) => _mail.id === mailId);

    if (!mail) {
      return res.status(404).json({
        message: 'Mail not found',
      });
    }

    res.status(200).json({ mail });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
}
