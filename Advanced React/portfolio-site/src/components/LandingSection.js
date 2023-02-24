import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import pudi from  "../images/pudi.jpg"

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const boldText = {
  fontWeight: "bold"
};

const imageStyle = {
  width: "100px",
  height: "100px",
  overflow: "hidden",
  borderRadius: "50%"
};

const bioText = {
  fontSize: '36px',
  fontWeight: 'bold',
};

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <img src={pudi} alt="awesome developer" style={imageStyle}/>
  <p style={boldText}>{greeting}</p> 
  <h1 style={bioText}>{bio1}</h1>
  <h1 style={bioText}>{bio2}</h1>
  </FullScreenSection>
);

export default LandingSection;
