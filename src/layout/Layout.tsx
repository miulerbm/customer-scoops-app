import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

const ContentArea = styled.div`
  flex: 0.75;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  color: #333;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const ImageArea = styled.div`
  flex: 1.25;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background-image: url("/assets/background-right.webp");
  background-size: contain;
  background-position: bottom 0px right 0px;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const PersonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  width: 100%;

  img {
    margin-left: 15rem;
    width: 50%;
    max-width: 524px;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    padding-right: 0;
  }
`;

const MobileBanner = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;

    width: 90%;
    margin-left: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <MobileBanner>
        <img src="/assets/mobile-banner.webp" alt="Banner móvil" />
      </MobileBanner>
      <ContentArea>{children}</ContentArea>
      <ImageArea>
        <PersonContainer>
          <img src="/assets/man-right-bg.webp" alt="Persona con teléfono" />
        </PersonContainer>
      </ImageArea>
    </Container>
  );
};
