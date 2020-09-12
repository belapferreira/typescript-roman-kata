import React, { useContext, createContext, useCallback } from "react";

interface RomanNumbersContextData {
  toRoman(n: number): string;
}

interface RomanNumbersProvderProps {
  children: React.ReactNode;
}

const ToolsContext = createContext<RomanNumbersContextData>(
  {} as RomanNumbersContextData,
);
const RomanNumbersProvider: React.FC<RomanNumbersProvderProps> = ({
  children,
}: RomanNumbersProvderProps) => {
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

  const toRoman = useCallback((n: number): string => {
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
    // eslint-disable-next-line
  }, []);

  const value = React.useMemo(
    () => ({
      toRoman,
    }),
    [toRoman],
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
