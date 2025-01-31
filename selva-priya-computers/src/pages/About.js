import * as React from "react";
import styled from "styled-components";

const missionData = [
  {
    text: "At Selvapriya Computers, our mission is rooted in a steadfast commitment to quality and innovation. For over 40 years, we have been a trusted partner in providing premium printing solutions and design services, catering to a diverse clientele. Our goal is to empower individuals and businesses by delivering products that not only meet but exceed their expectations in terms of performance, aesthetics, and durability.",
  },
  {
    text: "We are driven by a passion for excellence, constantly evolving our techniques and embracing the latest advancements in technology to ensure our customers receive the best possible solutions. Whether it's a simple print job or a complex design project, we approach every task with meticulous attention to detail and a customer-first mindset.",
  },
  {
    text: "Our mission extends beyond just delivering products; it's about creating meaningful experiences and fostering long-term relationships. By combining our expertise, dedication, and innovative spirit, we aim to be the go-to destination for all your printing and design needs, helping you bring your vision to life with unmatched precision and care.",
  },
];

const purposeData = [
  {
    text: "The purpose of Selvapriya Computers is to provide exceptional printing and design solutions that empower our clients to communicate their ideas effectively and leave a lasting impression. We aim to bridge the gap between creativity and technology by offering high-quality products that reflect the unique vision of each customer.",
  },
  {
    text: "With a deep-rooted focus on quality, we strive to elevate the standards of the printing industry while fostering trust and reliability. Our purpose is not only to meet the immediate needs of our clients but also to contribute to their long-term success by delivering solutions that combine functionality, innovation, and aesthetic excellence.",
  },
];

function AboutUsPage() {
  return (
    <Main role="main">
      <ImageContainer>
        <CompanyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/180bac2e2a9cde6473ddcd39d1b8fe8d05fb375df891ad106ac1792475a11db0?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
          alt="Selvapriya Computers facility"
        />
        <ContentBlock>
          <TextSection
            subtitle="About Us"
            title="Precision, Quality, and Legacy"
            description="Founded in 1984, SelvaPriya Computers has built a legacy of quality, trust, and service in the printing industry. With a commitment to continually evolve, we combine expertise with modern design to bring you the best in printing solutions. We believe in putting quality first-always."
          />
        </ContentBlock>
      </ImageContainer>
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        {missionData.map((item, index) => (
          <Paragraph key={index}>{item.text}</Paragraph>
        ))}
      </Section>
      <Section>
        <SectionTitle>Our Purpose</SectionTitle>
        {purposeData.map((item, index) => (
          <Paragraph key={index}>{item.text}</Paragraph>
        ))}
      </Section>
    </Main>
  );
}

const Main = styled.main`
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  font-family: Philosopher, Regular;
  color: rgba(30, 30, 30, 1);
  font-weight: 400;
  text-align: center;
  padding-top: 100px;
  @media (max-width: 991px) {
    padding: 100px 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CompanyImage = styled.img`
  aspect-ratio: 2.45;
  object-fit: contain;
  object-position: center;
  width: 100%;
  align-self: stretch;
  margin-top: 8%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContentBlock = styled.div`
  background-color: rgba(207, 230, 242, 1);
  z-index: 10;
  display: flex;
  width: 100%;
  max-width: 1239px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 78px 80px;
  position: absolute;
  top: 10%; /* Position it starting from the middle of the CompanyImage */
  left: 10%;
  transform: translateY(-50%); /* To ensure it starts exactly from the middle */
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const TextSection = ({ subtitle, title, description }) => (
  <>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </>
);

const Subtitle = styled.h2`
  font-size: 32px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-top: 36px;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  align-self: stretch;
  margin-top: 36px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Section = styled.section`
  width: 1030px;
  margin-top: 98px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 36px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin-top: 24px;
  &:first-of-type {
    margin-top: 0;
  }
`;

export default AboutUsPage;
