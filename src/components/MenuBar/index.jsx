/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Ripple } from 'primereact/ripple';
import { Actions } from '../../reducer/actions';
import './styles.css';

const MenuBar = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const currentPage = useSelector((state) => state.currentPage);
	const setCurrentPage = (payload) => dispatch({ type: Actions.SetCurrentPage, payload });

	const [left, setLeft] = useState(null);
	const [bottom, setBottom] = useState(null);
	const [width, setWidth] = useState(0);

	useEffect(
		() => {
			let element;
			let rect;
			console.log('hi');
			if (document.getElementById(currentPage)) {
				element = document.getElementById(currentPage);
				rect = element.getBoundingClientRect();
				setLeft(rect.left);
				setBottom(rect.bottom);
				setWidth(rect.right - rect.left);
			} else {
				setWidth(0);
			}
		}, [currentPage]
	);

	return (
		<div className="menu-bar">
			<div
				className="logo"
				onClick={() => {
					setCurrentPage('home');
					navigate('/Home');
				}}
			>
				<p>COSMOS.LEGAL</p>
				<div className="divider" />
				<p className="sub-title">Law Firm</p>
			</div>
			<div className="options">
				{/* <div */}
				{/*	className="p-ripple" */}
				{/*	onClick={() => { */}
				{/*		setCurrentPage('home'); */}
				{/*		navigate('/Home'); */}
				{/*	}} */}
				{/*	id="home" */}
				{/* > */}
				{/*	<p style={currentPage === 'home' ? { color: 'white' } : {}}>Home</p> */}
				{/*	<Ripple /> */}
				{/* </div> */}
				<div
					className="p-ripple"
					onClick={() => {
						setCurrentPage('news');
						navigate('/News');
					}}
					id="news"
				>
					<p style={currentPage === 'news' ? { color: 'white' } : {}}>News</p>
					<Ripple />
				</div>
				<div
					className="p-ripple"
					onClick={() => {
						setCurrentPage('about');
						navigate('/About');
					}}
					id="about"
				>
					<p style={currentPage === 'about' ? { color: 'white' } : {}}>About us</p>
					<Ripple />
				</div>
				<div
					className="p-ripple"
					onClick={() => {
						setCurrentPage('contact');
						navigate('/Contact');
					}}
					id="contact"
				>
					<p style={currentPage === 'contact' ? { color: 'white' } : {}}>Contact us</p>
					<Ripple />
				</div>
				<div className="bar" style={{ left, width, top: (bottom - 2), transition: 'left 0.3s' }} />
			</div>

		</div>
	);
};

export default MenuBar;
