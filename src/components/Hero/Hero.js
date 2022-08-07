import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br/>
        SABIN THAPA
      </SectionTitle>
      <SectionText>
        Web Developer Intern @ Applied Dynamic Solutions and a Chess Lover.<br/>
        I build things for the web. Currently focused on mastering the full-stack development.<br/>
        I love playing the King's Pawn Opening and Sicilian Defense.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;