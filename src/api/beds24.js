export async function fetchProperties({ location, guests, checkin, checkout }) {
  console.log("🔍 Simulating API fetch with params:", { location, guests, checkin, checkout });

  return [
    {
      propertyId: 1,
      name: "Casa da Madeira",
      location: "Madeira",
      image: "https://source.unsplash.com/400x300/?house,sea",
      price: 180,
      guests: 2,
    },
    {
      propertyId: 2,
      name: "Villa Funchal",
      location: "Madeira",
      image: "https://source.unsplash.com/400x300/?villa,luxury",
      price: 250,
      guests: 4,
    },
    {
      propertyId: 3,
      name: "Sunset Lodge",
      location: "Madeira",
      image: "https://source.unsplash.com/400x300/?lodge,view",
      price: 150,
      guests: 2,
    }
  ];
}

