import { useEffect, useState } from 'react';
import { fetchProperties } from '../api/beds24';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';

export default function Reservas() {
  const [properties, setProperties] = useState([]);
  const [params, setParams] = useState({ location: '', guests: '2', checkin: '', checkout: '' });

  useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get('location') || '';
  const guests = urlParams.get('guests') || '2';
  const checkin = urlParams.get('checkin') || '';
  const checkout = urlParams.get('checkout') || '';
  const searchParams = { location, guests, checkin, checkout };
  setParams(searchParams);

  // ⬇️ Adiciona este log para ver o que a API responde
  fetchProperties(searchParams).then((res) => {
    console.log("🔍 Dados recebidos da API Beds24:", res);
    setProperties(res);
  });
}, []);


  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-7xl mx-auto'>
        <SearchBar initialParams={params} />
        <h2 className='text-3xl font-bold mt-10 mb-6'>Resultados1</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {properties.map((p) => <PropertyCard key={p.propertyId} data={p} />)}
        </div>
      </div>
    </div>
  );
}
