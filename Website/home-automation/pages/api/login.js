// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import crypto from  "crypto" 
export default function handler(req, res) {
  console.log(req.body)
  console.log(crypto.createHash('sha256').update('input').digest('hex'))
  res.status(200).json({ name: 'John Doe' })
}
