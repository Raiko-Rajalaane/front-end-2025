import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Shops() {
  return (
    <div>
      <MapContainer className="leaflet" center={[59.4220, 24.7939]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker  position={[59.4220, 24.7939]}>
          <Popup>
            Ülemiste Keskus <br />
            <a
              target="_blank"
              href="https://maps.app.goo.gl/5Z1HytFPWVR4JQov6">Suur-Sõjamäe tn 4, Tallinn
            </a>
          </Popup>
        </Marker>
      </MapContainer> 

    </div>
  )
}

export default Shops
