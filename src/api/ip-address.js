export default async function getIPAddress(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

  return res.status(200).json({
    ip
  })
}
