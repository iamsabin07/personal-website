import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './HobbiesStyles';
import { hobbies } from '../../constants/constants';
import SingleCard from './SingleCard';

const Hobbies = () => (
  <Section id = "favorites">
    <SectionDivider/>
    <SectionTitle>
      My Favorites
    </SectionTitle>
    <Boxes>
      {hobbies.map((card,index)=>(
        <SingleCard index = {index} image={card.image} text = {card.text} image2 = {card.image2} text2 = {card.text2}/>
      ))}
    </Boxes>
  </Section>
);

export default Hobbies;
