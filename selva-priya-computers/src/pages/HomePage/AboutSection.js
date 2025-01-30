import * as React from "react";
import styled from "styled-components";

export function AboutSection() {
  const aboutData = {
    subtitle: "About Us",
    title: "Precision, Quality, and Legacy",
    description:
      "Founded in 1984, SelvaPriya Computers has built a legacy of quality, trust, and service in the printing industry. With a commitment to continually evolve, we combine expertise with modern design to bring you the best in printing solutions. We believe in putting quality first-always.",
    buttonText: "Know More",
  };

  return (
    <AboutContainer role="region" aria-label="About Us Section">
      <AboutWrapper>
        <ContentContainer>
          <AboutHeading subtitle={aboutData.subtitle} title={aboutData.title} />
          <AboutContent description={aboutData.description} />
          <ButtonWrapper>
            <StyledButton role="button" tabIndex={0}>
              Know More
            </StyledButton>
          </ButtonWrapper>
        </ContentContainer>
      </AboutWrapper>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-family: Philosopher, regular;
  color: rgb(30, 30, 30);
  font-weight: 400;
  margin-bottom: 80px;
`;

const AboutWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid rgb(30, 30, 30);

  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1012px;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const AboutHeading = ({ subtitle, title }) => (
  <>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
  </>
);

const Subtitle = styled.h2`
  font-size: 32px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-top: 36px;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const AboutContent = ({ description }) => (
  <Description>{description}</Description>
);

const Description = styled.p`
  font-size: 20px;
  text-align: center;
  align-self: stretch;
  margin-top: 36px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const StyledButton = styled.div`
  align-self: stretch;
  background-color: rgba(255, 170, 170, 1);
  gap: 10px;
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  padding: 17px 24px;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    outline: 2px solid rgba(255, 170, 170, 0.5);
    outline-offset: 2px;
  }
  @media (max-width: 991px) {
    padding: 15px 30px;
    width: 100%;
  }
`;
