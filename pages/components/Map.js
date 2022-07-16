import React from 'react'
import { useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import mapboxgl from 'mapbox-gl'
import * as mapBoxGl from 'mapbox-gl';


mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hhemFhbHkiLCJhIjoiY2w1aGZoOGRwMDhoaTNkdGVrbTd1NHc0OCJ9.96UDG49EaqVkC5a1Vo_Syg'

    // mapBoxGl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js', () => { });




const Map = (props) => {

    useEffect(() => {



        const map = new mapboxgl.Map({
            container: "map",

            style: 'mapbox://styles/mapbox/streets-v11',
            center: [26.8206, 30.8025],
            zoom: 3
        });
        // Add geolocate control to the map.
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            })
        );


        if (props.pickupCoordinate) {
            addToMap(map, props.pickupCoordinate)

        }

        if (props.dropoffCoordinates) {
            addDropToMap(map, props.dropoffCoordinates)

        }

        if (props.pickupCoordinate && props.dropoffCoordinates) {
            map.fitBounds([props.dropoffCoordinates, props.pickupCoordinate], {
                padding: 60
            });

        }


    }, [props.pickupCoordinate, props.dropoffCoordinates]);


    const addToMap = (map, coordinates) => {

        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);

    }

    const addDropToMap = (map, coordinates) => {

        // Create a default Marker, colored black, rotated 45 degrees.
        const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
            .setLngLat(coordinates)
            .addTo(map);

    }


    return (
        <Wrapper id='map'></Wrapper>
    )
}


export default Map


const Wrapper = tw.div`
flex-1 h-1/2

`
