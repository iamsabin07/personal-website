import React from "react";
import { Section, SectionDivider, SectionTextAbout, SectionTitle } from "../../styles/GlobalComponents";
import Card from "./Card";
import { imgs } from "../../constants/constants";
import {motion} from 'framer-motion';
const About = () =>{
    const transition =  {duration: 1, type: 'spring'};
    return(
        <Section nopadding id = "about">
        <div className="About"> 
            <div className="awesome">
            <SectionDivider />
            <SectionTitle>About Me</SectionTitle>
            <br/>
            <SectionTextAbout>
                I am a web developer passionate about contributing in quick yet important progress of web. I love designing and developing
                new ideas to solve complex problems. As a Computer Science major and avid learner, I have acquired vast range of skillsets required
                for the web development covering both frontend and backend section of web. I am curently an Intern at Applied Dynamic Solutions.<br/>
                I am also a huge chess lover. I spend most of my free time playing and studying chess. I aspire to participate in a official FIDE recognized
                chess tournament some day.
                <br/>
                 

            </SectionTextAbout>
            <a href = "/Resume.pdf" target="_blank" rel="noreferrer" className="link"><button className="btn">View My Resume
            </button></a> 
            </div>
            <div className="cards">
                <motion.div 
                    whileInView = {{left: '28rem'}}
                    initial = {{left: '43rem'}}
                    transition = {transition}
                    style={{left:'28rem'}}>
                    <Card
                    image={imgs[0].image}
                    heading = {'Frontend Development'}
                    detail = {"HTML, CSS, React, JavaScript, TypeScript"}
                    />
                </motion.div>
                <motion.div                     
                    whileInView = {{top: '16rem',left: '3rem'}}
                    initial = {{top:'16rem',left: '18rem'}}
                    transition = {transition}
                    style={{top:'16rem', left:'3rem'}}>
                    <Card
                    image={imgs[1].image}
                    width = "90px"
                    height="90px"
                    heading = {'Backend Development'}
                    detail = {"C#,.Net Core, NodeJS, SQL, MongoDB"}
                    />
                </motion.div>
                <motion.div                    
                    whileInView = {{top:'31rem',left: '28rem'}}
                    initial = {{top:'31rem',left: '43rem'}}
                    transition = {transition}
                    style={{top:'31rem',left:'28rem'}}>
                    <Card
                    image={imgs[2].image}
                    heading = {'Testing'}
                    detail = {"Cypress, Postman, Selenium"}
                    />
                </motion.div>
            </div>
        </div>         
        </Section>
    )
}

export default About;