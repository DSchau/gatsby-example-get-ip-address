export default async function getIPAddress(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  return res.status(200).json({
    ip
  })
}
