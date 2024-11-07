import styled from "styled-components";
import BackIcon from "../assets/svg/back-arrow.svg";
import NextIcon from "../assets/svg/next-arrow.svg";

interface NavigationButtonProps {
  direction: "next" | "back";
  onClick: () => void;
  showArrow?: boolean;
  label?: string;
}

const Button = styled.button<{ direction: "next" | "back" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ direction }) =>
    direction === "next" ? "0.75rem 2rem" : "0.75rem"};
  border: 2px solid #3a2d63;
  background-color: ${({ direction }) =>
    direction === "next" ? "#231331" : "transparent"};
  color: ${({ direction }) => (direction === "next" ? "#FFF" : "#3A2D63")};
  border-radius: ${({ direction }) => (direction === "next" ? "30px" : "50%")};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    margin-left: ${({ direction }) => (direction === "next" ? "0.5rem" : "0")};
    margin-right: ${({ direction }) => (direction === "back" ? "0.5rem" : "0")};
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-color: #3a2d63;
    background-color: ${({ direction }) =>
      direction === "next" ? "#00CCBC" : "#00CCBC"};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem;
    font-size: 0.75rem;

    

    img {
      margin-left: ${({ direction }) =>
        direction === "next" ? "0.5rem" : "0"};
      margin-right: 0;
      width: 10px;
      height: 10px;
    }
  }

  .next-icon {
    @media (max-width: 768px) {
      display: none;
    }
`;

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
  showArrow = true,
  label,
}) => {
  return (
    <Button direction={direction} onClick={onClick}>
      {direction === "back" ? (
        <img src={BackIcon} alt="Back Icon" />
      ) : (
        <>
          {label}
          {showArrow && direction === "next" && (
            <img src={NextIcon} alt="Next Icon" className="next-icon" />
          )}
        </>
      )}
    </Button>
  );
};

export default NavigationButton;
