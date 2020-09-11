import React from "react";

import { RomanNumbersProvider } from "./romanNumbers";
import { ToastProvider } from "./toast";

const AppProvider: React.FC = ({ children }) => {
  return (
    <RomanNumbersProvider>
      <ToastProvider>{children}</ToastProvider>
    </RomanNumbersProvider>
  );
};

export default AppProvider;
