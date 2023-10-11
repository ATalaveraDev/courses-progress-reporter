import { FIREBASE_PATH } from '../../../../secrets/keys';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = await (await fetch(`${FIREBASE_PATH}/${req.query.courseId}.json`)).json();

    res.status(200).json({ ...response });
  }
}