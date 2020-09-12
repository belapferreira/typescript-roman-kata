import React, { useState } from "react";
import * as yup from "yup";
import "core-js/es/promise";
import "core-js/es/set";
import "core-js/es/map";

import { Form } from "@unform/web";

import { useToast } from "../../hooks/toast";
import { useRomanNumbers } from "../../hooks/romanNumbers";

import Input from "../Input";

import { ConvertContainer, InputBlock, ResultBox } from "./styles";

interface SubmitData {
  decimal: number;
}

const Converter: React.FC = () => {
  const [converted, setConverted] = useState("");
  const { toRoman } = useRomanNumbers();
  const { addToast } = useToast();

  async function handleSubmit(data: SubmitData) {
    try {
      yup.setLocale({
        mixed: {
          notType: "Digite um número de 1 a 3999, tente novamente!",
        },
        number: {
          min: "O número deve ser maior ou igual a 1",
          max: "O número deve ser menor ou igual a 3999",
          integer: "Digite um número inteiro",
        },
      });

      const schema = yup.object().shape({
        decimal: yup.number().integer().required().min(1).max(3999),
      });

      await schema.validate(data);

      const convertedNumber = toRoman(Number(data.decimal));

      setConverted(String(convertedNumber));
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        addToast({
          type: "error",
          title: "Erro",
          description: err.message,
        });
      }
    }
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
