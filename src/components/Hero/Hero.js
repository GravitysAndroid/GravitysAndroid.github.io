import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to <br />
				My portfolio
			</SectionTitle>
			<SectionText>This is the section text, this can be anything at all. This is getting lengthy now</SectionText>
			<Button onClick={() => (window.location = 'https://google.com')}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
