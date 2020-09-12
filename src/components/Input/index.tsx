import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }: InputProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField } = useField(name);

  const clearInputValue = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      let { value } = e.currentTarget;
      value = value.replace(/\D/g, "");

      e.currentTarget.value = value;
    },
    [],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        ref={inputRef}
        defaultValue={defaultValue}
        onKeyUp={clearInputValue}
        {...rest}
      />
    </>
  );
};

export default Input;
