/* eslint-disable jsx-a11y/no-static-element-interactions,import/no-extraneous-dependencies */
import React from 'react';
import { Ripple } from 'primereact/ripple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { InputSwitch } from 'primereact/inputswitch';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Actions } from '../../../../reducer/actions';

const Options = (props) => {
	const { left, bottom, width, style } = props;

	const dispatch = useDispatch();

	const navigate = useNavigate();
	
	const darkMode = useSelector((state) => state.darkMode);
	const setDarkMode = (payload) => dispatch({ type: Actions.SetDarkMode, payload });

	const currentPage = useSelector((state) => state.currentPage);
	const setCurrentPage = (payload) => dispatch({ type: Actions.SetCurrentPage, payload });

	const changeTheme = (value) => {
		const element = document.getElementById('theme-css');
		const urlTokens = element.getAttribute('href').split('/');
		urlTokens[urlTokens.length - 1] = value;
		const newURL = urlTokens.join('/');
		replaceLink(element, newURL);
	};

	const changeMode = (value) => {
		const element = document.getElementById('mode-css');
		const urlTokens = element.getAttribute('href').split('/');
		urlTokens[urlTokens.length - 1] = value;
		const newURL = urlTokens.join('/');
		replaceLink(element, newURL);
	};

	const replaceLink = (linkElement, href) => {
		const id = linkElement.getAttribute('id');
		const cloneLinkElement = linkElement.cloneNode(true);

		cloneLinkElement.setAttribute('href', href);
		cloneLinkElement.setAttribute('id', `${id}-clone`);

		linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

		cloneLinkElement.addEventListener('load', () => {
			linkElement.remove();
			cloneLinkElement.setAttribute('id', id);
		});
	};

	return (
		<div className="options" style={style}>
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
					setCurrentPage('expertise');
					navigate('/Expertise');
				}}
				id="expertise"
			>
				<p style={currentPage === 'expertise' ? { color: 'white' } : {}}>Expertise</p>
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
				<p style={currentPage === 'about' ? { color: 'white' } : {}}>The Team</p>
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
			<div className="darkmode">
				<i className="fa-solid fa-circle-half-stroke" />
				<FontAwesomeIcon icon={faCircleHalfStroke} />
				<InputSwitch
					checked={darkMode}
					onChange={(e) => {
						setDarkMode(e.value);
						if (e.value) {
							changeMode('darkMode.css');
							// changeTheme('themeBlack.css');
						} else {
							changeMode('lightMode.css');
							// changeTheme('themeWhite.css');
						}
						document.getElementById('mode').blur();
					}}
				/>
			</div>
		</div>
	);
};

export default Options;
