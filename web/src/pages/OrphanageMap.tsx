import React from 'react'

import { Link } from 'react-router-dom' //isso daqui eh o que dá dinamismo na troca de páginas
import { FiPlus } from 'react-icons/fi' //isso daqui eh pra usar os ícones
import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'

function OrphanageMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Recife</strong>
                    <span>Pernambuco</span>
                </footer>
            </aside>

            <Map
                center = {[-8.0625545,-34.9175702]}
                zoom = {15}
                style={{
                    width:'100%',
                    height: '100%'
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={26} color = '#FFF' />
            </Link>
        </div>
    )
}

export default OrphanageMap