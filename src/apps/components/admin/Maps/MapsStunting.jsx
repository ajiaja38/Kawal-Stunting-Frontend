import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { useSelector } from 'react-redux'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { CompanyGuid } from '../../../api/resource/GuidCompany'

const MapsStunting = () => {
  const { maps } = useSelector((state) => state.data)
  const { COMPANY_GUID } = jwtDecode(localStorage.getItem('token'))
  const { itg } = CompanyGuid

  return (
    <div className='w-full h-[29rem] rounded-xl shadow-xl'>
      <MapContainer
        className='w-full h-full rounded-md outline-none z-0'
        center={COMPANY_GUID === itg ? [-6.929391, 107.6269033] : [2.723873107469269, 117.54042155791763]}
        zoom={9}
        scrollWheelZoom={true}>
        <TileLayer
          attribution=''
          url="https://vectormap.pptik.id/styles/klokantech-basic/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading>
          {
            maps.map((data, index) => (
              <Marker
                key={index}
                position={[data.LAT, data.LONG]}
                icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                eventHandlers={{
                  mouseover: (e) => {
                    e.target.openPopup()
                  }
                }}
              >
                <Popup>
                  <div
                    className='
                      flex flex-col gap-2
                      justify-center items-center
                    '
                  >
                    { data.NAME }

                    <Link to={`/data-anak/${data.GUID}`}>
                      <button
                        className='
                          p-2
                          w-16
                          bg-main text-white hover:bg-secondary active:bg-main
                          rounded-md
                        '>
                        Detail
                      </button>
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))
          }
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}

export default MapsStunting
