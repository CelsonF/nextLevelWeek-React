import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/Map-Marker.svg'

import '../Styles/Pages/Orphanages-map.css';
// import { tileLayer } from 'leaflet';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um organato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visia :) </p>
                </header>

                <footer>
                    <strong> Minas Gerais </strong>
                    <span> Belo Horizonte </span>
                </footer>
            </aside>

            <Map
             center={[-19.9544856,-43.9629348]}
             zoom={12}
             style={{ width:'100%',height:'100%'}}>

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}

                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
             </Map>

            <Link to="" className="create-orphanage"> 
                <FiPlus size={32} color="#FFF"    />
             </Link>

        </div>
    );
}

export default OrphanagesMap;