import React from "react";
import styled from "styled-components";

interface OptionsAreaProps {
  children: React.ReactNode;
  columns?: number;
}

const OptionsContainer = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: 0.25rem;
  padding: 0.25rem;
  border-radius: 8px;
  margin: 1rem 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${({ $columns }) => Math.max(1, $columns - 1)},
      1fr
    );
    margin: 0.5rem;
  }
`;

const OptionsArea: React.FC<OptionsAreaProps> = ({ children, columns = 3 }) => {
  return <OptionsContainer $columns={columns}>{children}</OptionsContainer>;
};

export default OptionsArea;
