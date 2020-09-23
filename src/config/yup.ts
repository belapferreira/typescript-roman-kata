import * as yup from "yup";
import "core-js/es/promise";
import "core-js/es/set";
import "core-js/es/map";

const localeMessages = {
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
};

yup.setLocale(localeMessages);

export default (
  shape: yup.ObjectSchemaDefinition<
    Record<string, unknown>,
    Record<string, unknown>
  >,
): yup.ObjectSchema => {
  const schema = yup.object().shape(shape);

  return schema;
};
