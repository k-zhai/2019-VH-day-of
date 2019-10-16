import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';
import StationeryPen from '../images/stationeryPen3.svg';
import StationeryBox from '../images/stationeryBox.svg';

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	margin: 1em;
	margin-bottom: 0;
	position: relative;
	width: 100%;
	justify-content: left;
	animation: ${fadeIn} 1s linear;
`;

const ContainerMobile = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	margin-top: 2em;
	min-height: calc(101vh - 10em);
	animation: ${fadeIn} 1s linear;
`;

const TextBox = styled.div`
	font-size: 0.8em;
	color: #fff;
	background: hsl(228, 53%, 34%);
	margin: 1rem 1rem;
	padding: 1em 3em;
	border-radius: 30px;
`;

const AnouncementBox = styled.div`
	font-size: 0.8em;
	color: #fff;
	background: hsl(228, 53%, 34%);
	margin: 1rem;
	padding: 1em 3em;
	border-radius: 30px;
	height: calc(100vh - 30em);

	display: flex;
	justify-content: center; /* align horizontal */
	align-items: center; /* align vertical */
`;

// 	justify-content: space-between;

const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
`;

const BoxTitleContainer = styled.div`
	margin: 1em 1.5em;
	position: static;
	width: 12em;
	height: 100%;
	opacity: 1;
	float: left;
`;

const StyledUL = styled.ul`
	list-style-type: none;
	margin: 0;
	margin-top: 1em;
	padding: 0;
`;

const StyledLi = styled.li`
	font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
	border-bottom: 1px solid #ccc;

	&:last-child {
		border: none;
	}

	a {
		text-decoration: none;
		color: hsl(228, 53%, 34%);
		display: block;
		width: 200px;
		font-size: 0.8em;

		-webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
		-moz-transition: font-size 0.3s ease, background-color 0.3s ease;
		-o-transition: font-size 0.3s ease, background-color 0.3s ease;
		-ms-transition: font-size 0.3s ease, background-color 0.3s ease;
		transition: font-size 0.3s ease, background-color 0.3s ease;
	}

	a:hover {
		font-size: 1.5em;
	}
`;

const BoxStyle = styled.div`
	position: absolute;
	top: 3em;
	left: 62%;
	width: 5em;
	opacity: 1;
`;

const PenStyle = styled.div`
	position: absolute;
	top: 5em;
	left: 76%;
	width: 5em;
	opacity: 1;
`;

const PenMobileStyle = styled.div`
	position: absolute;
	top: -5em;
	left: 50%;
	width: 2.5em;
	opacity: 1;
	transform: rotate(-80deg);
`;

const ScheduleBox = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return null;
	} else
		return (
			<Container>
				<BoxTitleContainer>
					<h4>Important Links</h4>
					<StyledUL>
						<StyledLi>
							<a href="#">(๑¯◡¯๑)</a>
						</StyledLi>
						<StyledLi>
							<a href="#">(๑•̀ㅂ•́) ✧</a>
						</StyledLi>
						<StyledLi>
							<a href="#">→_→</a>
						</StyledLi>
						<StyledLi>
							<a href="#">(｡ ･･｡)</a>
						</StyledLi>
						<StyledLi>
							<a href="#">( •̀ᴗ•́ )و ̑̑</a>
						</StyledLi>
					</StyledUL>
				</BoxTitleContainer>
				<BoxStyle>
					<StationeryBox />
				</BoxStyle>
				<PenStyle>
					<StationeryPen />
				</PenStyle>
			</Container>
		);
};

const LinkAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInRight" // fadeInLeft, or fadeInRight
	>
		<ScheduleBox />
	</InViewMonitor>
);

export default LinkAnimated;
