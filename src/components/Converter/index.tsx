import React, { useCallback, useState, useRef } from "react";
import * as yup from "yup";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import yupCreateSchema from "../../config/yup";

import { useToast } from "../../hooks/toast";
import { useRomanNumbers } from "../../hooks/romanNumbers";

import Input from "../Input";

import { ConvertContainer, InputBlock, ResultBox } from "./styles";
import { removeRomanNumeralWritingErrors } from "../../utils/removeRomanNumeralWritingErrors";

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
  const formRef = useRef<FormHandles>(null);

  function handleChangeConverterType() {
    setConverterType((currentType) => {
      if (currentType === "decimal") return "roman";

      return "decimal";
    });
  }

  function setData(field: string, value: unknown) {
    const result = formRef.current?.setFieldValue(field, value);

    return result;
  }

  async function handleSubmit(data: SubmitData) {
    const validRoman = /[ivxlcdm]/gi;

    try {
      const schema = yupCreateSchema({
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
      const text = e.currentTarget.value;

      e.currentTarget.value = removeRomanNumeralWritingErrors(text);
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
