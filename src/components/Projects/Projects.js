import React, { useState } from 'react';
import {useRouter} from'next/router';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Hrs } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, projects2 } from '../../constants/constants';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const handleClick = (e) =>{
    e.preventDefault();
    if(showMore){
      setShowMore(false);
      router.push('/#projects')
    }
    else{
      setShowMore(true);
    }

  }

  return(
    <Section  id="projects">
    <SectionDivider />
    <SectionTitle >Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit})=>(
        <BlogCard key={id}>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
            <CardInfo>{description}</CardInfo>
          </TitleContent>
          <div>
            <br/>
            <TitleContent>
            <span style={{fontWeight: 'bold' }}>TECHNOLOGIES:</span>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key = {i}>{tag}</Tag>
                ))}
              </TagList>
            </TitleContent>
          </div>
          <UtilityList>
            <ExternalLinks href ={source}>Code</ExternalLinks>
            {visit && <ExternalLinks href ={visit}>Website</ExternalLinks> }
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    {showMore && 
    <GridContainer>
          {projects2.map(({id, image, title, description, tags, source, visit})=>(
            <BlogCard key={id}>
              <Img src = {image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr/>
                <CardInfo>{description}</CardInfo>
              </TitleContent>
              <div>
                <br/>
                <TitleContent>
                <span style={{fontWeight: 'bold' }}>TECHNOLOGIES:</span>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key = {i}>{tag}</Tag>
                    ))}
                  </TagList>
                </TitleContent>
              </div>
              <UtilityList>
                <ExternalLinks href ={source} target="_blank">Code</ExternalLinks>
                {visit && <ExternalLinks href ={visit} target="_blank">Website</ExternalLinks> }
              </UtilityList>
            </BlogCard>
          ))}
        </GridContainer>
    }
    
    <div onClick={(e)=>handleClick(e)} className ="show-more">
    <HeaderThree>{showMore? "Show Less" : "Show More"}</HeaderThree>
    <Hrs/>
    </div>
  </Section>
  )

};

export default Projects;