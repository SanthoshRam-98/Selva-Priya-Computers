import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 200px;
  background: #fff;
  border: 2px solid black;
  max-width: 900px;
  margin: auto;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    padding: 40px 15px;
    max-width: 90%;
  }
`;

const Heading = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SubHeading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  max-width: 750px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

const KnowMoreButton = styled(Link)`
  background: pink;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: rgba(255, 182, 193, 0.8);
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <SubHeading>Precision, Quality, and Legacy</SubHeading>
      <Text>
        Founded in 1984, SelvaPriya Computers has built a legacy of quality,
        trust, and service in the printing industry. With a commitment to
        continually evolve, we combine expertise with modern design to bring you
        the best in printing solutions. We believe in putting quality first –
        always.
      </Text>
      <KnowMoreButton to="/about">Know More</KnowMoreButton>
    </AboutContainer>
  );
};

export default AboutSection;
