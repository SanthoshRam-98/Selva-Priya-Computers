import React from "react";
import styled from "styled-components";

// Example icons (replace these with actual URLs or local imports if needed)
const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f61db3384504bc3b9107b107fe907cc3019427cba15d2bc0ae2690bb2249d130?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
    title: "Reliability",
    description:
      "With over 40 years in the industry, we bring unmatched expertise and dedication to every project. Our proven track record of quality and reliability has built lasting client relationships. When you choose SelvaPriya Computers, you're choosing trusted, dependable service every time.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0192ed4bee0374317c54a6df9985bac3396afaa7af92dd65d6527f93833d7a5?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
    title: "Customer Focus",
    description:
      "Your satisfaction is our top priority, and we tailor our services to meet your unique needs. Our team goes the extra mile to ensure each project is handled with care and precision. At SelvaPriya Computers, we're committed to delivering results that not only meet but exceed your expectations.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45162deebe59d6fa7021484f5fb4b6ba66cb132f1a17a016c7f74ba02ece81ae?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
    title: "Innovation",
    description:
      "At SelvaPriya Computers, we stay ahead by adopting the latest trends and technologies in printing and design. Our innovative approach allows us to deliver fresh, impactful solutions that keep pace with changing demands. With us, you gain access to cutting-edge techniques and high-quality results every time.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <SubHeading>Why Choose Us</SubHeading>
        <MainHeading>Quality That Speaks for Itself</MainHeading>
        <Description>
          With decades of experience, we know that quality can never be
          compromised. Each project is handled with precision and attention to
          detail, ensuring your satisfaction every time.
        </Description>
      </SectionHeader>
      <FeaturesContainer>
        <FeaturesList>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </FeaturesList>
      </FeaturesContainer>
    </SectionWrapper>
  );
};

const FeatureCard = ({ feature }) => {
  const { icon, title, description } = feature;
  return (
    <CardWrapper>
      <FeatureIcon src={icon} alt={title} loading="lazy" />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </CardWrapper>
  );
};

// Styled Components
const SectionWrapper = styled.div`
  background-color: #daf2ff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #1e1e1e;
  font: 400 32px Philosopher, Regular;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 80px;
  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 1030px;
  width: 100%;
`;

const SubHeading = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const MainHeading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 36px 0 0;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  margin: 36px 0 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeaturesContainer = styled.div`
  margin-top: 98px;
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: center;
  padding: 89px 80px;
  border: 4px solid #1e1e1e;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 40px 20px;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 853px;
  max-width: 100%;
  align-items: center;
  gap: 64px;

  @media (max-width: 991px) {
    gap: 40px;
  }
`;

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FeatureIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 64px;
`;

const FeatureTitle = styled.h3`
  font-weight: 700;
  margin: 24px 0 0;
  font-size: 32px;
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 36px 0 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default WhyChooseUsSection;
