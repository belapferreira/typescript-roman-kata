import React from "react";

import Landing from "../../components/Landing";
import Converter from "../../components/Converter";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Landing />
      <Converter />
    </Container>
  );
};

export default Dashboard;
