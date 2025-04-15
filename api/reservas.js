export default async function handler(req, res) {
  const { location, guests, checkin, checkout } = req.query

  try {
    const response = await fetch("https://api.beds24.com/json/getProperties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authentication: { apiKey: process.env.VITE_BEDS24_API_KEY },
        parameters: { location, guests, checkin, checkout, includeRooms: true }
      })
    })

    const data = await response.json()
    res.status(200).json(data.properties || [])
  } catch (error) {
    res.status(500).json({ error: "Erro ao conectar à Beds24" })
  }
}