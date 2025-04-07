import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Kaart() {
  return (
    <div>
        <MapContainer className="kaart" center={[59.4315, 24.724]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[59.4269, 24.7230]}>
                <Popup>
                Kristiine keskus <br />
                <a 
                target='blank'
                href="https://www.google.com/maps/place/Kristiine+Keskus/@59.4244434,24.7197377,16.42z/data=!4m15!1m8!3m7!1s0x46929499df5616bf:0x400b36d18fc6270!2sTallinn!3b1!8m2!3d59.4369608!4d24.7535747!16zL20vMDdyX3A!3m5!1s0x4692948ff56ecd75:0x4f0fde99c451563a!8m2!3d59.4272443!4d24.7230791!16s%2Fm%2F0w7mjwq?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D">
                Endla 45
                </a>
                </Popup>
            </Marker>
            <Marker position={[59.4219, 24.7939]}>
                <Popup>
                Ülemiste keskus <br />
                <a 
                target='blank'
                href="https://www.google.com/maps/place/%C3%9Clemiste+Centre/@59.4219391,24.7912921,17z/data=!3m1!4b1!4m6!3m5!1s0x4692eb54f4edfe43:0x206e6dcbdf41435e!8m2!3d59.4219391!4d24.793867!16s%2Fm%2F0hrdb05?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D">
                Suur-Sõjamäe tn 4
                </a>
                </Popup>
            </Marker>
        </MapContainer>

    </div>
  )
}

export default Kaart
