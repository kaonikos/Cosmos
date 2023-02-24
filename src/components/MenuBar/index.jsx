/* eslint-disable jsx-a11y/no-static-element-interactions,import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Options } from './components';
import { Actions } from '../../reducer/actions';
import './styles.css';

const MenuBar = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const darkMode = useSelector((state) => state.darkMode);
	const setDarkMode = (payload) => dispatch({ type: Actions.SetDarkMode, payload });

	const currentPage = useSelector((state) => state.currentPage);
	const setCurrentPage = (payload) => dispatch({ type: Actions.SetCurrentPage, payload });

	const [left, setLeft] = useState(null);
	const [bottom, setBottom] = useState(null);
	const [width, setWidth] = useState(0);

	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [alternative, setAlternative] = useState(false);

	useEffect(
		() => {
			const handleResize = () => {
				setScreenWidth(window.innerWidth);
			};
			// Attach the event listener to the window object
			window.addEventListener('resize', handleResize);

			// Remove the event listener when the component unmounts
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}, []
	);

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

	useEffect(
		() => {
			if (alternative) {
				document.body.classList.add('no-scroll');
			} else {
				document.body.classList.add('scroll');
			}
		}, []
	);

	if (screenWidth > 850) {
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
				<Options left={left} bottom={bottom} width={width} />
			</div>
		);
	}

	const { body } = document;
	const html = document.documentElement;

	const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

	return (
		<>
			<div style={{ position: 'absolute', height: `${height}px` }}>
				<div className="alternative-menu-icon" onClick={() => setAlternative(!alternative)} style={alternative ? { gap: '10px' } : { right: '-45px' }}>
					<div className="line first" style={alternative ? { transform: 'rotate(45deg)', width: '70%', marginLeft: '10px' } : {}} />
					<div className="line" style={alternative ? { width: '0' } : {}} />
					<div className="line second" style={alternative ? { transform: 'rotate(-45deg)', width: '70%', marginLeft: '10px' } : {}} />
				</div>
			</div>
			<div className="alternative-menu" style={{ height: `${height + 69}px`, left: alternative ? '0' : '-300px' }}>
				<div className="alternative-options">
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
					<Options left={left} bottom={bottom} width={width} style={{ flexDirection: 'column' }} />
				</div>
			</div>
		</>
	);
};

export default MenuBar;
