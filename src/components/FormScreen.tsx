import React from "react";
import styled from "styled-components";

interface FormScreenProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin-right: auto;
  margin-left: 1.5rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  flex: 1;
  width: 100%;
`;

const FormScreen: React.FC<FormScreenProps> = ({ children }) => {
  return (
    <Container>
      <Logo
        src="/src/assets/customer-scoops-logo.webp"
        alt="Customer Scoops Logo"
      />
      <Content>{children}</Content>
    </Container>
  );
};

export default FormScreen;
