import React from "react";

import Landing from "../../components/Landing";
import Converter from "../../components/Converter";
import RomanNumeralTwo from "../../components/RomanNumeralTwo";
import RomanNumeralFifteen from "../../components/RomanNumeralFifteen";
import RomanNumeralFifty from "../../components/RomanNumeralFifty";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <RomanNumeralTwo id="II" />
      <RomanNumeralFifteen id="XV" />
      <RomanNumeralFifty id="L" />
      <Landing />
      <Converter />
    </Container>
  );
};

export default Dashboard;
