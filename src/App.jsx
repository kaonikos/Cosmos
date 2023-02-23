import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrimeReact from 'primereact/api';
import { MenuBar, Footer } from './components';
import { Home } from './pages';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import '@fortawesome/fontawesome-pro/css/all.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './App.css';

PrimeReact.ripple = true;

const App = () => {
	return (
		<div className="app">
			<Router>
				<MenuBar />
				<Routes>
					<Route exact path="/" element={<Navigate replace to="/Home" />} />
					<Route path="/Home" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
