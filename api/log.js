export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('👀 Victim data:', data); // OR save to database
    res.status(200).json({ status: 'logged' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}