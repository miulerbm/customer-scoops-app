import React from "react";
import { ThemeProvider } from "styled-components";
import { FormProvider } from "./context/FormContext";
import GlobalStyles from "./GlobalStyles";
import FormCustomer from "./views/FormCustomer";
import useTheme from "./hooks/useTheme";

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FormProvider>
        <FormCustomer />
      </FormProvider>
    </ThemeProvider>
  );
};

export default App;
