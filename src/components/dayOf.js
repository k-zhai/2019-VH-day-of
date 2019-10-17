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
`;

const ContainerMobile = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	margin-top: 2em;
	min-height: calc(101vh - 10em);
	animation: ${fadeIn} 1s linear;
`;

const LeftContainer = styled.div`
	position: static;
	width: calc((100vw - 3em) / 2);
	opacity: 1;
	float: left;
`;

const DayOf = ({ events }) => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return null;
	} else
		return (
			<Container>
				<LeftContainer>
					<UpperLeftAnimated />
					<BoxesAnimated />
				</LeftContainer>
				<LeftContainer>
					<ScheduleAnimated events={events} />
					<LinkAnimated />
				</LeftContainer>
			</Container>
		);
};

export default DayOf;
