import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'

export default function MapComponent({ properties }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <MapContainer center={[18.4861, -69.9312]} zoom={12} scrollWheelZoom className="h-[70vh] w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties
          .filter((item) => item.lat && item.lng)
          .map((item) => (
            <Marker key={item.id} position={[Number(item.lat), Number(item.lng)]}>
              <Popup>
                <div className="space-y-1">
                  <p className="font-semibold">{item.titulo}</p>
                  <p className="text-xs">US$ {Number(item.precio).toLocaleString()}</p>
                  <Link to={`/propiedades/${item.id}`} className="text-xs text-blue-600 underline">
                    Ver detalle
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}
