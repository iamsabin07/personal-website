import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Section id = "contact">
        <SectionDivider />
        <SectionTitle>Contact me</SectionTitle>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href = "tel:862-220-3587">
          862-220-3587
        </LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href = "mailto:iamsabin07@gmail.com">
          iamsabin07@gmail.com
        </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Connect with me:
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/iamsabin07"target = "_blank">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com/iamsabin07"target = "_blank">
        <AiFillFacebook size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/iamsabin07"target = "_blank">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/iamsabin07"target = "_blank">
        <AiFillInstagram size = "3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      </Section>
    </FooterWrapper>
  );
};

export default Footer;
