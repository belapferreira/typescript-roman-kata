import React, { useContext, createContext, useCallback } from "react";

interface RomanNumbersContextData {
  toRoman(n: number): string;
  toDecimal(roman: string): [string, string];
}

interface RomanNumbersProviderProps {
  children: React.ReactNode;
}

const ToolsContext = createContext<RomanNumbersContextData>(
  {} as RomanNumbersContextData,
);
const RomanNumbersProvider: React.FC<RomanNumbersProviderProps> = ({
  children,
}: RomanNumbersProviderProps) => {
  const getRomanNumeral = useCallback(
    (place: number, digit: number): string => {
      if (digit === 0) {
        return "";
      }
      const placeSymbols = ["I", "X", "C", "M", ""];
      const placeHalfSymbols = ["V", "L", "D", ""];
      const symbol = placeSymbols[place];
      const halfSymbol = placeHalfSymbols[place];
      const nextSymbol = placeSymbols[place + 1];
      switch (true) {
        case digit <= 3:
          return symbol.repeat(digit);
        case digit === 4:
          return symbol + halfSymbol;
        case digit <= 8:
          return halfSymbol + symbol.repeat(digit - 5);
        case digit === 9:
          return symbol + nextSymbol;
        default:
      }

      return "";
    },
    [],
  );

  const toRoman = useCallback(
    (n: number): string => {
      if (n <= 0 || n > 3999) {
        throw new RangeError("Number out of range for Roman numerals.");
      }
      const numStr = n.toString();
      return numStr
        .split("")
        .map((digit, index) =>
          getRomanNumeral(numStr.length - index - 1, parseInt(digit, 10)),
        )
        .join("");
    },
    [getRomanNumeral],
  );

  const getDecimalNumber = useCallback((roman: string) => {
    const placeSymbols = ["I", "X", "C", "M", ""];
    const placeHalfSymbols = ["V", "L", "D", ""];
    const placeSymbolsF = [1, 10, 100, 1000, 0];
    const placeHalfSymbolsF = [5, 50, 500, 0];

    const posPlaceSymbol = placeSymbols.indexOf(roman);
    const posPlaceHalfSymbol = placeHalfSymbols.indexOf(roman);

    if (posPlaceSymbol >= 0) {
      return placeSymbolsF[posPlaceSymbol];
    }

    return placeHalfSymbolsF[posPlaceHalfSymbol];
  }, []);

  const toDecimal = useCallback(
    (roman: string): [string, string] => {
      let total = 0;

      const romans = roman.split("");

      for (let index = 0; index < romans.length; index += 1) {
        const symbol = romans[index];
        const value = getDecimalNumber(symbol);
        const previousValue = getDecimalNumber(romans[index - 1]);

        if (index === 0) {
          total += value;
        }

        if (previousValue < value) {
          total += value - previousValue * 2;
        }

        if (previousValue >= value) {
          total += value;
        }
      }

      return [total.toString(), toRoman(total)];
    },
    [toRoman, getDecimalNumber],
  );

  const value = React.useMemo(
    () => ({
      toRoman,
      toDecimal,
    }),
    [toRoman, toDecimal],
  );

  return (
    <ToolsContext.Provider value={value}>{children}</ToolsContext.Provider>
  );
};

function useRomanNumbers(): RomanNumbersContextData {
  const context = useContext(ToolsContext);

  if (!context) {
    throw new Error("useRomanNumbers must be within a RomanNumbersProvider.");
  }

  return context;
}

export { RomanNumbersProvider, useRomanNumbers };
