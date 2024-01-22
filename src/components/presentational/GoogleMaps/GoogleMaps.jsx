import React, { memo } from 'react';
import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 45.51,
	lng: -122.603,
};

const options = {
	strokeColor: '#90d2d2',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: '#dab3ae',
	fillOpacity: 0.35,
	clickable: false,
	draggable: false,
	editable: false,
	visible: true,
	radius: 1000,
	zIndex: 1,
};

const GoogleMaps = memo((props) => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyB17rMLil-lGiQATtZEQUHygKoF0vRRq_w',
		// ...otherOptions
	});

	if (loadError) {
		return <div>Map cannot be loaded right now, sorry.</div>;
	}

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
			<Circle center={center} options={options} />
			<></>
		</GoogleMap>
	) : (
		<div>Loading...</div>
	);
});

export default GoogleMaps;
