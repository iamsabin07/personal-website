import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { Hr } from '../Projects/ProjectsStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style = {{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span> SABIN </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <span className='no-mobile'>
        <Link href = "#about">
          <NavLink>About<Hr className='hh'/></NavLink>
        </Link>
        </span>
      </li>
      <li>
        <Link href = "#projects">
          <NavLink>Projects<Hr className='hh'/></NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#technologies">
          <NavLink>Technologies<Hr className='hh'/></NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#favorites">
          <NavLink>Favorites<Hr className='hh'/></NavLink>
        </Link>
      </li>
      <span className='no-contact'>
      <li>
        <Link href = "#contact">
          <NavLink>Contact<Hr className='hh'/></NavLink>
        </Link>
      </li>
      </span>
      
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/iamsabin07" target = "_blank">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com/iamsabin07" target = "_blank">
        <AiFillFacebook size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/iamsabin07" target = "_blank">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/iamsabin07" target = "_blank">
        <AiFillInstagram size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
