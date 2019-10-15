import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import LogoOnly from '../images/logoOnly.svg';
import LogoVandyHacksText from '../images/textVandyHacks.svg';
import UpperLeftAnimated from '../components/upperLeftLogo';
import isMobileContext from './isMobileContext';
 

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	position: relative;
	width: 100%;
	text-align: left;
	min-height: calc(100vh - 10em);
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

const LogoGridStyle = styled.div`
	position: absolute;
	top: 14em;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 60%;
	opacity: 1;
	z-index: -1;
`;

const LogoGridStyleMobile = styled.div`
	position: absolute;
	top: 12em;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	opacity: 1;
	z-index: -1;
`;

const LogoOnlyStyle = styled.div`
	display: inline-block;
	width: 30%;
	justify-content: center;
	fill-opacity: 1;
	z-index: 2;
`;

const LogoOnlyStyleMobile = styled.div`
	display: inline-block;
	width: 60%;
	justify-content: center;
	fill-opacity: 1;
	z-index: 2;
`;

const LogoVandyHacksTextStyle = styled.div`
	width: 30em;
	margin: 1.5em auto 0.3em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	fill: white;
	fill-opacity: 1;
	z-index: 2;
`;

const LogoVandyHacksTextStyleMobile = styled.div`
	width: auto;
	margin: 1.5em auto 0.3em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	fill: white;
	fill-opacity: 1;
	z-index: 2;
`;

const LocationDateTextStyle = styled.div`
	width: 20em;
	margin: 0.6em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`;

const LocationDateTextStyleMobile = styled.div`
	width: auto;
	margin: 0.6em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`;


const LeftContainer = styled.div`
	position: static;
	width: 50%;
	height: 100%;
	opacity: 1;
	float: left;
`;

const DayOf = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return null;
	} else
		return (
			<Container>
				<LeftContainer>
					<UpperLeftAnimated />
				</LeftContainer>
			</Container>
		);
};

export default DayOf;
