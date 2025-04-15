const API_KEY = import.meta.env.VITE_BEDS24_API_KEY;

export async function fetchProperties({ location, guests, checkin, checkout }) {
  const res = await fetch("/api/reservas?location=" + location + "&guests=" + guests + "&checkin=" + checkin + "&checkout=" + checkout);
  const json = await res.json();

  // 👇 Aqui podes adicionar o log
  console.log("✅ Dados recebidos da API:", json);

  return json.properties || [];
}
