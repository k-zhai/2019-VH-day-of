import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import '../../node_modules/animate.css/animate.min.css';

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
	margin: 1em;
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

// can set opcaity 
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

// 	justify-content: space-between;

const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
`;

const BoxTitleContainer = styled.div`
	text-align: center;
`;

const ScheduleBox = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return null;
	} else
		return (
			<Container>
				<BoxTitleContainer>
					<h4>Schedule</h4>
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

const ScheduleAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInRight" // fadeInLeft, or fadeInRight
	>
		<ScheduleBox />
	</InViewMonitor>
);

export default ScheduleAnimated;
