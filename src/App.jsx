import React from 'react';
import { Home } from 'pages';
import { ScrollProvider } from 'components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Style from './app.module.scss';

function App() {
	return (
		<div className={Style.App}>
			<Router>
				<ScrollProvider>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</ScrollProvider>
			</Router>
		</div>
	);
}

export default App;
