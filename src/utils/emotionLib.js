import React from "react"
//emotions
import { Global, css, ThemeProvider, useTheme } from "@emotion/react"
import styled from "@emotion/styled"

import { Link } from "gatsby"

//framer-motion
import { motion } from "framer-motion"

//=====================================

//GlobalWrapper
const GlobalWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  font-family: "Times New Roman", Times, serif;
  overflow: hidden;
`
//Logo
const Logo = styled(Link)`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* color: ${props => props.theme.text}; */
  color: white;
`
//CustomLink
const CustomLink = styled(Link)`
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  color: ${props => props.theme.text};

  text-decoration: underline solid transparent;
  transition: text-decoration 0.8s ease;

  &:hover {
    text-decoration: underline solid 3px ${props => props.theme.text};
  }
`

//ToggleContainer
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 2.5rem;

  //removes button border
  &:focus {
    outline: none;
  }

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`

//borderLines
const BorderLine = styled(motion.span)`
  border-bottom: black 2px solid;
  height: 30px;
  position: absolute;
`

//HomeTextWrapper
const HomeTextWraper = styled(motion.div)`
  width: "100%";
  padding: 20px 0px 50px 0px;
`
//HomeTextBlock
const HomeTextBlock = styled(motion.div)`
  width: "100%";
  position: relative;
  padding: 10px 10px 10px 0px;
`

// Using css prop provides a concise and flexible API to style the components. //
const underline = css`
  text-decoration: underline;
`
// const User = props => (
//   <UserWrapper>
//     <Avatar src={props.avatar} alt="" />
//     <Description>
//       <Username>{props.username}</Username>
//       <Excerpt>{props.excerpt}</Excerpt>
//     </Description>
//   </UserWrapper>
// )

export {
  CustomLink,
  Logo,
  GlobalWrapper,
  ToggleContainer,
  BorderLine,
  HomeTextWraper,
  HomeTextBlock,
}
