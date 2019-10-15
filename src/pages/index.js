import React, { useState, useCallback, useEffect } from 'react';
// import { Link } from 'gatsby';
// try build again before i push it
import styled from 'styled-components';

<<<<<<< HEAD
import BigLogoWithGridAnimated from '../components/bigLogo';
import WelcomeAnimated from '../components/welcome';
import FAQAnimated from '../components/faq/faq';
import ScheduleAnimated from '../components/schedule';
import SponsorBoxAnimated from '../components/sponsorBox';
import useWindowWidth from '../components/utils/useWindowWidth.js';
import InvertButton from '../components/invertButton.js';
=======
// import BigLogoWithGridAnimated from '../components/bigLogo';
// import WelcomeAnimated from '../components/welcome';
// import FAQAnimated from '../components/faq/faq';
// import ScheduleAnimated from '../components/schedule';
// import SponsorBoxAnimated from '../components/sponsorBox';
import Dayof from '../components/dayOf';
import isMobileContext from '../components/isMobileContext';
import SEO from '../components/seo';
>>>>>>> v1

import '../../node_modules/animate.css/animate.min.css';
import '../css/layout.css';

const Container = styled.div`
	width: 100%;
	margin: 1em;
`;

const IndexPage = () => {
<<<<<<< HEAD
	const isMobile = useWindowWidth() <= 768;
	return (
		<Container>
			<BigLogoWithGridAnimated isMobile={isMobile} />
			<WelcomeAnimated isMobile={isMobile} />
			<FAQAnimated isMobile={isMobile} />
			<ScheduleAnimated isMobile={isMobile} />
			<SponsorBoxAnimated isMobile={isMobile} />
			<InvertButton />
		</Container>
=======
	const [isMobile, setIsMobile] = useState(undefined);

	const handleWindowResize = useCallback(() => {
		setIsMobile(window.innerWidth < 768);
	}, [setIsMobile]);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		// First resize
		const timeout = setInterval(() => {
			handleWindowResize();
		}, 250);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [handleWindowResize]);

	return isMobile === undefined ? null : (
		<>
			<Container>
				<SEO />
				<isMobileContext.Provider value={isMobile}>
					<Dayof />
				</isMobileContext.Provider>
				{/* <a
					id="mlh-trust-badge"
					style={{
						display: 'block',
						maxWidth: '100px',
						minWidth: '60px',
						position: 'fixed',
						right: '50px',
						top: 0,
						width: '10%',
						zIndex: 10000,
					}}
					href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg"
						alt="Major League Hacking 2020 Hackathon Season"
						style={{ width: '100%' }}
					/>
				</a> */}
			</Container>
			{/* <Footer /> */}
		</>
>>>>>>> v1
	);
};

export default IndexPage;
