import React from "react";
import { AboutContainer } from "./About.style";
import { Title } from "../../Global.styles";
export default function About() {
  return (
    <AboutContainer>
      <Title onFocus="true">About Page</Title>
    </AboutContainer>
  );
}
