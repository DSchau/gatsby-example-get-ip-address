/*
 * x-forwarded-for is for reverse proxy
 * connection.remoteAddress is typical path
 */
export default async function getIPAddress(req, res) {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress

  return res.status(200).json({
    ip,
    options: [req.ip, req.headers['x-forwarded-for'], req.connection.remoteAddress]
  })
}
