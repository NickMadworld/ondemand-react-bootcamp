import React from "react";
import { InfoContainer } from "./Info.style";
import { Title } from "../../Global.styles";
export default function Info() {
  return (
    <InfoContainer>
      <Title onFocus="true">Info Page</Title>
    </InfoContainer>
  );
}
