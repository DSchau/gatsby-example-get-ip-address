/*
 * x-client-ip is for Gatsby Cloud
 * connection.remoteAddress is typical path
 */
export default async function getIPAddress(req, res) {
  const ip = req.headers['x-client-ip'] || req.connection.remoteAddress || req.ip

  return res.status(200).json({
    ip,
  })
}
