import React from 'react';
import { DiFirebase, DiJavascript1, DiReact, DiTerminal } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="technologies">
    <br/>
    <SectionDivider/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <br/>
    <SectionText>
      I have great experince in range of modern web development technologies. Covering Frontend, Backend, Database and Testing.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript1 size="5rem"/>
        <ListContainer><span style={{fontWeight: 'bold' }}>LANGUAGES:</span></ListContainer>
        <ListParagraph>JavaScript, C#, Java, HTML, CSS, Python</ListParagraph>
      </ListItem>
      <ListItem>
        <DiReact size="5rem"/>
        <ListContainer><span style={{fontWeight: 'bold' }}>FRAMEWORKS/LIBRARIES:</span></ListContainer>
        <ListParagraph>React.js, Node.js, Next.js, .NET Core, OpenCV</ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem"/>
        <ListContainer><span style={{fontWeight: 'bold' }}>DATABASES:</span></ListContainer>
        <ListParagraph>MongoDB, MySQL, Microsoft SQL Server </ListParagraph>
      </ListItem>
      <ListItem>
        <DiTerminal size="5rem"/>
        <ListContainer><span style={{fontWeight: 'bold' }}>TESTING TOOLS:</span></ListContainer>
        <ListParagraph>Cypress, Postman, Selenium</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
