import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';
import StationeryPen from '../images/stationeryPen3.svg';
import StationeryBox from '../images/stationeryBox.svg';
import BubbleBox from '../images/speechbubble.svg';

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
	min-height: calc(101vh - 10em);
	animation: ${fadeIn} 1s linear;
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
	top: 10.3em;
	left: 77%;
	width: 3.3em;
	opacity: 1;
`;

const BoxStyleMobile = styled.div`
	position: absolute;
	top: 7.3em;
	left: 73%;
	width: 3.3em;
	opacity: 1;
`;

const PenStyle = styled.div`
	position: absolute;
	top: 9.3em;
	left: 89%;
	width: 3.4em;
	opacity: 1;
`;

const PenStyleMobile = styled.div`
	position: absolute;
	top: 1.3em;
	left: 72%;
	width: 3.4em;
	opacity: 1;
`;

const BubbleStyle = styled.div`
	position: relative;
	top: 1em;
	left: -3em;
	width: 20em;
	opacity: 1;
`;

const BubbleStyleMobile = styled.div`
	position: relative;
	top: 1em;
	left: 0em;
	width: 20em;
	opacity: 1;
	margin-bottom: 3em;
`;

const ScheduleBox = () => {
	const isMobile = useContext(isMobileContext);

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
			{{ isMobile } ? (
				<>
					<BubbleStyleMobile>
						<BubbleBox />
					</BubbleStyleMobile>
					<BoxStyleMobile>
						<StationeryBox />
					</BoxStyleMobile>
					<PenStyleMobile>
						<StationeryPen />
					</PenStyleMobile>
				</>
			) : (
				<>
					<BoxTitleContainer style={{ width: '10em' }}>
						<BubbleStyle>
							<BubbleBox />
						</BubbleStyle>
					</BoxTitleContainer>
					<BoxStyle>
						<StationeryBox />
					</BoxStyle>
					<PenStyle>
						<StationeryPen />
					</PenStyle>
				</>
			)}
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
