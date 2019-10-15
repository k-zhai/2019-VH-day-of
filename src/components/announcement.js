import React, { useContext } from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import FAQUpperBar from '../images/faqUpperBar.svg';
import FAQLowerBar from '../images/faqLowerBar.svg';
import Pen2 from '../images/stationeryPen2.svg';

import isMobileContext from './isMobileContext';

const Container = styled.div`
	width: 100%;
`;

const FAQLogoStyle = styled.div`
	width: 15em;
	position: relative;
	left: 75%;
`;

const FAQLogoMobileStyle = styled.div`
	width: 11em;
	position: relative;
	margin-right: -1em;
	margin-left: auto;
`;

const FAQUpperBarStyle = styled.div`
	width: 55%;
	top: 3em;
	position: absolute;
	z-index: -100;
`;

const FAQUpperBarMobileStyle = styled.div`
	width: 100%;
	top: -2em;
	position: absolute;
	z-index: -100;
`;

const FAQLowerBarStyle = styled.div`
	width: 55%;
	top: 95%;
	left: 50%;
	position: absolute;
	z-index: -100;
`;

const FAQLowerBarMobileStyle = styled.div`
	width: 100%;
	top: 3em;
	position: absolute;
	z-index: -100;
`;

const TextBody = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 32px;
	margin-left: 3em;
	margin-right: 3em;
`;

const TextBodyMobile = styled.div`
	margin-top: 2em;
	margin-left: 0.3em;
`;

const Pen2MobileStyle = styled.div`
	position: absolute;
	top: 0.2em;
	left: 20%;
	width: 1.6em;
	opacity: 1;
	transform: rotate(-20deg);
`;


const TextBox = styled.div`
	font-size: 0.8em;
	color: #fff;
	background: hsl(228, 53%, 34%);
	margin: 1rem;
	padding: 1em 3em;
	height: 4.5rem;
	border-radius: 30px;
`;

const FAQ = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return null;
	} else {
		return (
			<Container>
				<TextBox>nmn
                    </TextBox>
			</Container>
		);
	}
};

const AnnouncementAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInLeft" // fadeInLeft, or fadeInRight
	>
		<FAQ />
	</InViewMonitor>
);

export default AnnouncementAnimated;
