import React from 'react';
import { Home } from 'pages';
import { ScrollProvider } from 'components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Style from './app.module.scss';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

function App() {
	return (
		<MantineProvider>
			<div className={Style.App}>
				<Router>
					<ScrollProvider>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</ScrollProvider>
				</Router>
			</div>
		</MantineProvider>
	);
}

export default App;
