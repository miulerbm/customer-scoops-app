import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBarContainer = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const Progress = styled.div<{ width: string }>`
  height: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  width: ${(props) => props.width};
  transition: width 0.3s ease;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const width = `${((currentStep + 1) / totalSteps) * 100}%`;

  return (
    <ProgressBarContainer
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuetext={`Paso ${currentStep + 1} de ${totalSteps}`}
    >
      <Progress width={width} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
