import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

import isMobileContext from './isMobileContext';
import Countdown from 'react-countdown-now';

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	margin: 0em;
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

	display: flex;
	justify-content: center; /* align horizontal */
	align-items: center; /* align vertical */
`;

const AnouncementBox = styled.div`
	font-size: 0.8em;
	color: #fff;
	background: hsl(228, 53%, 34%);
	margin: 1rem;
	padding: 1em 3em;
	border-radius: 30px;
	min-height: calc(100vh - 30em);

	display: flex;
	justify-content: center; /* align horizontal */
	align-items: center; /* align vertical */
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

const BoxTitleContainer = styled.div`
	text-align: center;
	flex: auto;
`;

const endEventTime = new Date('2019-11-03T23:59:59.999Z');

const Boxes = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return null;
	} else
		return (
			<Container>
				<ButtonContainer>
					<BoxTitleContainer>
						<h4>Time Remaining</h4>
						<TextBox style={{ fontSize: '1.6em', minWidth: '10em'}}>
							<Countdown date={endEventTime} />
						</TextBox>
					</BoxTitleContainer>
					<BoxTitleContainer>
						<h4>Wifi Login</h4>
						<TextBox>
							Username: 1234
							<br />
							Password: 567890
						</TextBox>
					</BoxTitleContainer>
				</ButtonContainer>
				<BoxTitleContainer>
					<h4>Anouncement</h4>
					<AnouncementBox>
						All that is gold does not glitter, <br /> Not all those who wander are lost; <br />
						The old that is strong does not wither, <br />
						Deep roots are not reached by the frost. <br />
						<br />
						From the ashes a fire shall be woken, <br />
						A light from the shadows shall spring;
						<br />
						Renewed shall be blade that was broken, <br />
						The crownless again shall be king.
					</AnouncementBox>
				</BoxTitleContainer>

				{/* 
				<LogoGridStyle className="fadeIn">
					<Grid />
				</LogoGridStyle> */}
			</Container>
		);
};

const BoxesAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInLeft" // fadeInLeft, or fadeInRight
	>
		<Boxes />
	</InViewMonitor>
);

export default BoxesAnimated;
