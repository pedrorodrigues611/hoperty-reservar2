export async function fetchProperties({ location, guests, checkin, checkout }) {
  try {
    const res = await fetch(`/api/reservas?location=${location}&guests=${guests}&checkin=${checkin}&checkout=${checkout}`);
    const text = await res.text();
    console.log('📦 RESPOSTA API RAW:', text);
    const json = JSON.parse(text);
    return json.properties || [];
  } catch (err) {
    console.error('❌ Erro ao conectar à API Beds24:', err);
    return [];
  }
}