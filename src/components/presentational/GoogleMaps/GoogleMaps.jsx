import React, { memo, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 44.921515,
	lng: -122.981545,
};
const label = {
	lat: 44.9265,
	lng: -122.981545,
};
const mapOptions = {
	scrollwheel: false,
};

const GoogleMaps = memo((props) => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyB17rMLil-lGiQATtZEQUHygKoF0vRRq_w',
		// ...otherOptions
	});

	const [showInfo, setShowInfo] = useState(true);

	if (loadError) {
		return <div>Map cannot be loaded right now, sorry.</div>;
	}

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} options={mapOptions}>
			<Marker position={center} onClick={() => setShowInfo(!showInfo)} />
			{showInfo && (
				<InfoWindow position={label} onCloseClick={() => setShowInfo(false)}>
					<div>
						<p>608 Lancaster Dr SE</p>
						<p>Salem, OR 97317</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	) : (
		<div>Loading...</div>
	);
});

export default GoogleMaps;
