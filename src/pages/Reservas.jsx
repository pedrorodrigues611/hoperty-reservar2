import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import PropertyCard from '../components/PropertyCard'

function Reservas() {
  const [properties, setProperties] = useState([])
  const [params, setParams] = useState({ location: '', guests: '2', checkin: '', checkout: '' })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const location = urlParams.get('location') || ''
    const guests = urlParams.get('guests') || '2'
    const checkin = urlParams.get('checkin') || ''
    const checkout = urlParams.get('checkout') || ''

    const searchParams = { location, guests, checkin, checkout }
    setParams(searchParams)

    fetch(`/api/reservas?location=${location}&guests=${guests}&checkin=${checkin}&checkout=${checkout}`)
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error('Erro:', err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <SearchBar initialParams={params} />
        <h2 className="text-3xl font-bold mt-10 mb-6">Resultados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} data={property} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reservas