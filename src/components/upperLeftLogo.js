import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';
import MtSvgLines from 'react-mt-svg-lines';

import '../../node_modules/animate.css/animate.min.css';

import LogoVandyHacksText from '../images/textVandyHacks.svg';
import isMobileContext from './isMobileContext';

import SocialMedias from '../components/socialMedia';

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
	&:after {
		content: '';
		border-color: hsl(228, 53%, 34%);
		position: absolute;
		bottom: 0;
		left: -1em;
		width: 33em;
		height: 2px;
		border-bottom-style: dashed;
	}
`;


const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
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
	margin-left: 0;
	left: 0;
	right: 0;
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

const StyledButton = styled.button`
	margin: 1.5em 0.8em;
	text-align: left;
	border: 2px solid hsl(228, 53%, 34%);
	border-radius: 6px;
	background: none;
	color: #293c85;
	font-weight: 500;
	transition: all 0.25s linear;

	user-select: none;

	&:hover,
	&:focus {
		background-color: hsl(228, 53%, 34%);
		color: white;
		cursor: pointer;
	}

	outline: none;
	&::-moz-focus-inner {
		border: 0;
	}
`;

const StyledButtonMobile = styled(StyledButton)`
	margin: 1em auto;
`;

const ScrollAnimateInLineSvg = ({ SvgElement }) => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView=""
		childPropsInView={{ animate: true }}
	>
		<MtSvgLines duration={2500} fade>
			{SvgElement}
		</MtSvgLines>
	</InViewMonitor>
);

const UpperLeft = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return null;
	} else
		return (
			<Container>
				{/* <LogoOnlyStyle>
					<LogoOnly />
				</LogoOnlyStyle> */}

				<LogoVandyHacksTextStyle>
					<LogoVandyHacksText />
				</LogoVandyHacksTextStyle>
				{/* 
				<LocationDateTextStyle>
					<LocationDateText />
				</LocationDateTextStyle> */}
				<ButtonContainer>
					<StyledButton onClick={() => (window.location = 'https://apply.vandyhacks.org')}>
						Hacker Guide
					</StyledButton>
					<StyledButton onClick={() => (window.location = 'https://apply.vandyhacks.org')}>
						Sponsor Guide
					</StyledButton>
					<SocialMedias />
				</ButtonContainer>

				{/* 
				<LogoGridStyle className="fadeIn">
					<Grid />
				</LogoGridStyle> */}
			</Container>
		);
};

const UpperLeftAnimated = () => <ScrollAnimateInLineSvg SvgElement={<UpperLeft />} />;

export default UpperLeftAnimated;
