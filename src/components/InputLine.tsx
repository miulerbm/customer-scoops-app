import React from "react";
import styled from "styled-components";

interface InputLineProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const StyledInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid #c5c2c2;
  outline: none;
  padding: 0;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    color: #c5c2c2;
    font-size: 16px;
  }
`;

const InputLine: React.FC<InputLineProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Nombre"}
    />
  );
};

export default InputLine;
