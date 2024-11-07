import styled from "styled-components";

interface OptionButtonProps {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const OptionButtonC = styled.button<OptionButtonProps>`
  padding: 0.5rem 0.5rem;
  border: 2px solid ${({ selected }) => (selected ? "#231331" : "#DDD")};
  background-color: ${({ selected }) => (selected ? "#231331" : "transparent")};
  color: ${({ selected }) => (selected ? "#FFF" : "#3A2D63")};
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.25rem;

  &:hover {
    border-color: #3a2d63;
  }

  @media (max-width: 768px) {
    padding: 0.2rem 0.2rem;
    font-size: 0.75rem;
  }
`;

const OptionButton: React.FC<OptionButtonProps> = ({
  selected,
  onClick,
  children,
}) => {
  return (
    <OptionButtonC selected={selected} onClick={onClick}>
      {children}
    </OptionButtonC>
  );
};

export default OptionButton;
