import React from "react";
import styled from "styled-components";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const IndicatorContainer = styled.div`
  position: absolute;
  z-index: 9;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

const CurrentStep = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Divider = styled.span`
  margin: 0 8px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const TotalSteps = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <IndicatorContainer>
      <CurrentStep>{String(currentStep + 1).padStart(2, "0")}</CurrentStep>
      <Divider>|</Divider>
      <TotalSteps>{String(totalSteps).padStart(2, "0")}</TotalSteps>
    </IndicatorContainer>
  );
};

export default StepIndicator;
