import React, { useCallback, useState, useRef } from "react";
import * as yup from "yup";
import "core-js/es/promise";
import "core-js/es/set";
import "core-js/es/map";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { useToast } from "../../hooks/toast";
import { useRomanNumbers } from "../../hooks/romanNumbers";

import Input from "../Input";

import { ConvertContainer, InputBlock, ResultBox } from "./styles";

interface SubmitData {
  decimal: number;
  roman: string;
}

type typesConverter = "roman" | "decimal";

const Converter: React.FC = () => {
  const [converterType, setConverterType] = useState<typesConverter>("decimal");
  const [converted, setConverted] = useState("");
  const { toRoman, toDecimal } = useRomanNumbers();
  const { addToast } = useToast();

  function handleChangeConverterType() {
    setConverterType((currentType) => {
      if (currentType === "decimal") return "roman";

      return "decimal";
    });
  }

  const formRef = useRef<FormHandles | null>(null);

  function setData(field: string, value: unknown) {
    const result = formRef.current?.setFieldValue(field, value);

    return result;
  }

  async function handleSubmit(data: SubmitData) {
    const validRoman = /[ivxlcdm]/gi;

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
        string: {
          matches: "Valores válidos: I, V, X, L, C, D, M",
        },
      });

      const schema = yup.object().shape({
        decimal: yup.number().integer().min(1).max(3999),
        roman: yup.string().matches(validRoman),
      });

      await schema.validate(data);

      let convertedNumber: string;
      let roman: string;

      if (data.decimal) {
        convertedNumber = toRoman(Number(data.decimal));
      } else {
        [convertedNumber, roman] = toDecimal(data.roman);
        setData("roman", roman);
      }

      setConverted(convertedNumber);
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

  function changeTextUsingConverterType(
    textToDecimalState: string,
    textToRomanState: string,
  ) {
    if (converterType === "decimal") return textToDecimalState;

    return textToRomanState;
  }

  const clearInputValue = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      let { value } = e.currentTarget;
      value = value.replace(/\D/g, "");

      e.currentTarget.value = value;
    },
    [],
  );

  const preventsBasicMistake = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const invalidRoman = /[^ivxlcdm]/gi;

      const invalidIRoman = /(i){4,}/gi;
      const invalidXRoman = /(x){4,}/gi;
      const invalidCRoman = /(c){4,}/gi;
      const invalidMRoman = /(m){4,}/gi;

      const invalidVRoman = /(v)+/gi;
      const invalidLRoman = /(l)+/gi;
      const invalidDRoman = /(d)+/gi;

      let text = e.currentTarget.value.replace(invalidRoman, "").toUpperCase();
      text = text.replace(invalidIRoman, "III");
      text = text.replace(invalidXRoman, "XXX");
      text = text.replace(invalidCRoman, "CCC");
      text = text.replace(invalidMRoman, "MMM");

      text = text.replace(invalidVRoman, "V");
      text = text.replace(invalidLRoman, "L");
      text = text.replace(invalidDRoman, "D");

      e.currentTarget.value = text;
    },
    [],
  );

  return (
    <ConvertContainer>
      <button
        type="button"
        id="change-converter"
        onClick={handleChangeConverterType}
      >
        {changeTextUsingConverterType(
          "Romano para Decimal",
          "Decimal para Romano",
        )}
      </button>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <fieldset>
          <h3>
            {changeTextUsingConverterType(
              "Digite um número de 1 a 3999",
              "Romano de I a MMMCMXCIX",
            )}
          </h3>
          <InputBlock>
            {converterType === "decimal" ? (
              <Input
                type="text"
                name="decimal"
                id="decimal"
                className="textbox"
                onKeyUp={clearInputValue}
              />
            ) : (
              <Input
                type="text"
                name="roman"
                id="roman"
                className="textbox"
                onKeyUp={preventsBasicMistake}
              />
            )}
            <button type="submit">Converter</button>
          </InputBlock>
        </fieldset>
      </Form>
      <ResultBox className="result">
        <h4>
          {changeTextUsingConverterType(
            "O número romano correspondente é:",
            "O número decimal correspondente é:",
          )}
        </h4>
        <div className="result-content">{converted}</div>
      </ResultBox>
    </ConvertContainer>
  );
};

export default Converter;
