import { FIREBASE_PATH } from '../../../../secrets/keys';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = await (
      await fetch(`${FIREBASE_PATH}.json`)
    ).json();
    const data = [];
  
    for (const key in response) {
      data.push({
        id: key,
        ...response[key],
      });
    }

    res
      .status(200)
      .json({ courses: data });
  }
}
