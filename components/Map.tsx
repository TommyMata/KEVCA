'use client'
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const CARTAGO: [number, number] = [9.8647, -83.9192]
const GAM_CENTER: [number, number] = [9.9282, -84.0907]
const GAM_RADIUS = 30000

const pinIcon = L.divIcon({
  html: `<div style="width:16px;height:16px;background:#4fc3f7;border:3px solid white;border-radius:50%;box-shadow:0 0 14px rgba(79,195,247,0.8);"></div>`,
  className: '',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
  popupAnchor: [0, -14],
})

export default function Map() {
  return (
    <section className="coverage-section">
      <div className="container">
        <div className="coverage-header">
          <span className="section-label">Zona de Cobertura</span>
          <h2>Dónde operamos</h2>
          <p>
            Atendemos toda la Gran Área Metropolitana de Costa Rica con base en Cartago Centro.
          </p>
        </div>
        <div className="map-wrapper">
          <MapContainer
            center={[9.91, -84.02]}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Circle
              center={GAM_CENTER}
              radius={GAM_RADIUS}
              pathOptions={{
                color: '#3b2fff',
                fillColor: '#3b2fff',
                fillOpacity: 0.15,
                weight: 2,
              }}
            />
            <Marker position={CARTAGO} icon={pinIcon}>
              <Popup>
                <strong>KEVCA Security Protection</strong><br />
                Cartago Centro, Costa Rica
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
