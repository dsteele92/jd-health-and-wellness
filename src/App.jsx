import React from 'react';
import { Navbar } from 'components';
import { Home } from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Style from './app.module.scss';

function App() {
	return (
		<div className={Style.App}>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
