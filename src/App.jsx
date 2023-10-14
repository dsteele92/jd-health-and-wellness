import React from 'react';
import { Home } from 'pages';
import { Navbar } from 'components';
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
