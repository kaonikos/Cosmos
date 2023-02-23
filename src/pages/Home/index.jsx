import React from 'react';
import { Button } from 'primereact/button';
import ship from '../../assets/cards/ship.jpg';
import office from '../../assets/cards/office.jpg';
import hammer from '../../assets/cards/hammer.jpg';
import contact from '../../assets/cards/contact.jpg';
import logo1 from '../../assets/cards/logo1.png';
import logo3 from '../../assets/cards/logo3.png';
import './styles.css';

const Home = () => {
	return (
		<div className="home">
			<div className="header">
				<div className="text-container">
					<p>Cosmos Legal - Representing with Excellence</p>
				</div>
			</div>
			<div className="card">
				<div className="card-header">
					<p className="mode">Our Expertise</p>
				</div>
				<div className="content">
					<div className="item">
						<img src={ship} />
						<p className="mode">Shipping</p>
					</div>
					<div className="item">
						<img src={office} />
						<p className="mode">Workplace</p>
					</div>
				</div>
			</div>
			<div className="card reverse">
				<div className="card-header">
					<p className="mode">Our Clients</p>
				</div>
				<div className="content">
					<div className="content">
						<div className="col item">
							<img className="logo" src={logo1} />
							<p className="mode">Client 1</p>
						</div>
						<div className="col item">
							<img className="logo" src={logo3} />
							<p className="mode">Client 2</p>
						</div>
					</div>
				</div>
			</div>
			<div className="card">
				<div className="card-header">
					<p className="mode">The Team</p>
				</div>
				<div className="content">
					<div className="col left">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum
						</p>
						<Button label="The Team" />
					</div>
					<div className="item col right">
						<img src={hammer} />
					</div>
				</div>
			</div>
			<div className="card reverse">
				<div className="card-header">
					<p className="mode">Contact Us</p>
				</div>
				<div className="content reverse">
					<div className="col left">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum
						</p>
						<Button label="Contact Us" />
					</div>
					<div className="item col right">
						<img src={contact} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
