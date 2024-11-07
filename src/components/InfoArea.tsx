import React from "react";
import styled from "styled-components";

interface InfoAreaProps {
  children: React.ReactNode;
}

const InfoContainer = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`;

const InfoArea: React.FC<InfoAreaProps> = ({ children }) => {
  return <InfoContainer>{children}</InfoContainer>;
};

export default InfoArea;
