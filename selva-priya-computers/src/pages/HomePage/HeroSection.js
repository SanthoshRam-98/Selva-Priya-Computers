import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hero1 from "../../CorousalImages/hero1.png";
import hero2 from "../../CorousalImages/hero2.png";
import hero3 from "../../CorousalImages/hero3.png";
import hero4 from "../../CorousalImages/hero4.png";

// Local images for the carousel
const images = [hero1, hero2, hero3, hero4];

export function HeroSectionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <CarouselContainer>
        <Carousel>
          {images.map((image, index) => (
            <Slide
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              isVisible={index === currentIndex}
            />
          ))}
        </Carousel>
      </CarouselContainer>

      <ContentWrapper>
        <Title>Welcome to Selvapriya Computers</Title>
        <Subtitle>40 Years of Trusted Quality in Printing & Design</Subtitle>
        <Description>
          Our commitment to quality and innovation has made us a trusted name in
          the printing industry. Explore our services and discover why quality
          matters to us and our clients.
        </Description>
        <ButtonWrapper>
          <StyledButton role="button" tabIndex={0}>
            Get a Quote
          </StyledButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  display: flex;
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Philosopher", regular;
  color: rgba(30, 30, 30, 1);
  margin-bottom: 80px;
  @media (max-width: 991px) {
    flex-direction: column; /* Stack vertically on smaller screens */
    height: auto;
  }
`;

const CarouselContainer = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;

  @media (max-width: 991px) {
    height: 50vh; /* Make carousel take up 50% height on small screens */
  }
`;

const Carousel = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 40%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
  background-color: rgba(240, 248, 255, 0.8); /* Light blue background */

  @media (max-width: 991px) {
    width: 100%;
    padding: 40px;
    align-items: center;
    text-align: center;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 991px) {
    font-size: 0.9rem;
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

export default HeroSectionCarousel;
