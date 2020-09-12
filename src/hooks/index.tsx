import React from "react";

import { RomanNumbersProvider } from "./romanNumbers";
import { ToastProvider } from "./toast";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  return (
    <RomanNumbersProvider>
      <ToastProvider>{children}</ToastProvider>
    </RomanNumbersProvider>
  );
};

export default AppProvider;
