export async function fetchProperties(params) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`/api/reservas?${query}`, {
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
      },
    });

    const text = await res.text();

    console.log("🧾 Conteúdo bruto da resposta:", text);

    const json = JSON.parse(text);
    console.log("🏨 Propriedades recebidas:", json);

    return json?.properties || [];
  } catch (error) {
    console.error("❌ Erro ao obter propriedades:", error);
    return [];
  }
}
