import React, { createContext, useContext, useReducer } from "react";

export interface IFormData {
  name?: string;
  position?: string;
  challenges?: string;
  crm?: string;
  industry?: string;
}

interface IFormState {
  currentStep: number;
  formData: IFormData;
}

type FormAction =
  | { type: "SET_STEP"; step: number }
  | { type: "SET_DATA"; data: Partial<FormData> };

const initialState: IFormState = {
  currentStep: 0,
  formData: {},
};

function formReducer(state: IFormState, action: FormAction): IFormState {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, currentStep: action.step };
    case "SET_DATA":
      return { ...state, formData: { ...state.formData, ...action.data } };
    default:
      return state;
  }
}

const FormContext = createContext<
  | {
      state: IFormState;
      dispatch: React.Dispatch<FormAction>;
    }
  | undefined
>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext se debe usar dentro de un FormProvider");
  return context;
};
