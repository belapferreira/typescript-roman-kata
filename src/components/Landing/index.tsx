import React from "react";

import unionIcon from "../../assets/union.svg";
import { LandingContainer, TitleDiv } from "./styles";

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <TitleDiv>
        <h1>Algarismos Romanos</h1>
        <h2>Conversor</h2>
      </TitleDiv>
      <img src={unionIcon} alt="Union" />
    </LandingContainer>
  );
};

export default Landing;
