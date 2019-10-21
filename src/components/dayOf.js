import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import UpperLeftAnimated from '../components/upperLeftLogo';
import BoxesAnimated from '../components/wifiBoxes';
import ScheduleAnimated from '../components/schedule';
import LinkAnimated from '../components/importantLink';
import isMobileContext from './isMobileContext';
import { Link } from 'gatsby';

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
	margin: 1em;
`;

const ContainerMobile = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	margin-top: 3em;
	min-height: calc(101vh - 10em);
	animation: ${fadeIn} 1s linear;
`;

const ColContainer = styled.div`
	position: static;
	width: calc((100vw - 4em) / 2);
	opacity: 1;
	float: left;
`;

const DayOf = ({ events }) => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return (
			<ContainerMobile>
				<UpperLeftAnimated />
				<BoxesAnimated />
				<ScheduleAnimated events={events} />
				<LinkAnimated />
			</ContainerMobile>
		);
	} else {
		return (
			<Container>
				<ColContainer>
					<UpperLeftAnimated />
					<BoxesAnimated />
				</ColContainer>
				<ColContainer>
					<ScheduleAnimated events={events} />
					<LinkAnimated />
				</ColContainer>
			</Container>
		);
	}
};

export default DayOf;
