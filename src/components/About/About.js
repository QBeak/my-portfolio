// import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'

const JSXStyled = styled.div`
border: 1px solid black;
align-items center;
background-color:rgba(255, 255, 255,.80);
flex-wrap: wrap;
height: 250px;
position: relative;
`
const PStyle = styled.p`
margin-left: 35%;
margin-right: 35%;
color: rgba(22, 24, 26, 0.95);
`
const AboutH1 = styled.h1`
margin-top: 50px;
color: rgba(22, 24, 26, 0.95);
`
const ButtonStyle = styled.button`
color: rgba(22, 24, 26, 0.95);
box-shadow: 3px 6px 5px #0bceaf;
border-radius: 10px;
border: 0px;
padding: 15px;
font-family: 'poppins', sans-serif;
`


const About = () => {
  return (
    <JSXStyled>
        <AboutH1>About Me</AboutH1>
        <PStyle>Alexander Abara is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to solve real world problems.</PStyle>
        <ButtonStyle>READ MORE</ButtonStyle>
    </JSXStyled>
  )
}

export default About