export async function fetchProperties(params) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`/api/reservas?${query}`);
    const text = await res.text();

    console.log("🧾 Conteúdo bruto da resposta:", text); // <- ISTO VAI MOSTRAR O QUE A API DEVOLVEU

    const json = JSON.parse(text); // aqui é onde pode estar a falhar
    console.log("🏨 Propriedades recebidas:", json);
    return json?.properties || [];
  } catch (error) {
    console.error("❌ Erro ao obter propriedades:", error);
    return [];
  }
}
