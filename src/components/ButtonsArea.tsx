import React from "react";
import styled from "styled-components";

interface ButtonsAreaProps {
  children: React.ReactNode;
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding-top: 1rem;

  position: sticky;
  bottom: 0;
  padding: 1rem 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
    gap: 0.25rem;
    padding: 0.75rem 1rem;
  }
`;

const ButtonsArea: React.FC<ButtonsAreaProps> = ({ children }) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

export default ButtonsArea;
