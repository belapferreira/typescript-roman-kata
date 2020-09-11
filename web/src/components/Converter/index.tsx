import React, { useState } from "react";
import { Form } from "@unform/web";

import { useRomanNumbers } from "../../hooks/romanNumbers";

import Input from "../Input";

import { ConvertContainer, InputBlock, ResultBox } from "./styles";

interface SubmitData {
  decimal: string;
}

const Converter: React.FC = () => {
  const [converted, setConverted] = useState("");
  const { toRoman } = useRomanNumbers();

  function handleSubmit(data: SubmitData) {
    if (!data.decimal) {
      return;
    }

    const convertedNumber = toRoman(Number(data.decimal));

    setConverted(String(convertedNumber));
  }

  return (
    <ConvertContainer>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <h3>Digite um número de 1 a 3999</h3>
          <InputBlock>
            <Input
              type="text"
              name="decimal"
              id="decimal"
              className="textbox"
            />
            <button type="submit">Converter</button>
          </InputBlock>
        </fieldset>
      </Form>
      <ResultBox className="result">
        <h4>O número romano correspondente é:</h4>
        <div className="result-content">{converted}</div>
      </ResultBox>
    </ConvertContainer>
  );
};

export default Converter;
