import React from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Left Section */}
        <ContainerSection>
          <LeftSection>
            <Heading>Let's keep in touch!</Heading>
            <Description>
              Find us on any of these platforms, we respond in 1-2 business
              days.
            </Description>
            <SocialIcons>
              <SocialIcon
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </SocialIcon>
              <SocialIcon
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIcon>
            </SocialIcons>
          </LeftSection>

          {/* Middle Section */}
          <MiddleSection>
            <SubHeading>USEFUL LINKS</SubHeading>
            <LinkList>
              <LinkItem>
                <FooterLink href="/">Home</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/services">Services</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/pricing">Pricing</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/about">About</FooterLink>
              </LinkItem>
            </LinkList>
          </MiddleSection>

          {/* Right Section */}
          <RightSection>
            <SubHeading>OTHER RESOURCES</SubHeading>
            <LinkList>
              <LinkItem>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </LinkItem>
            </LinkList>
          </RightSection>
        </ContainerSection>
        <Divider />
      </FooterContainer>

      <Copyright>
        Copyright © {new Date().getFullYear()} by Selvapriya Computers.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;

// Styled Components
const FooterWrapper = styled.footer`
  background-color: #1e1e1e;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  flex-shrink: 0; /* Prevent shrinking */
`;

const FooterContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const ContainerSection = styled.div`
  display: flex;
  gap: 20px;
`;
const LeftSection = styled.div`
  flex: 1;
`;

const MiddleSection = styled.div``;

const RightSection = styled.div``;

const Heading = styled.h2`
  font-size: 32px;
  font-family: "Philosopher", regular;
`;

const SubHeading = styled.h3`
  font-size: 20px;
  font-family: "Philosopher", regular;
`;

const Description = styled.p`
  font-size: 16px;
  color: #939393;
  margin: 20px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px; /* Circle size */
  height: 50px; /* Circle size */
  border-radius: 50%; /* Makes it circular */
  background-color: white;
  color: black; /* Default icon color */
  font-size: 24px; /* Icon size */
  transition: all 0.3s ease;
  box-shadow: 0 0 0 2px transparent; /* Initial transparent outline */

  &:hover {
    background-color: #1e1e1e; /* Keep the background white on hover */
    color: white;
    box-shadow: 0 0 0 2px white; /* Add a white circular outline */
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 12px 0;
`;

const FooterLink = styled.a`
  color: #939393;
  text-decoration: none;
  font-family: "Philosopher", regular;
  &:hover {
    color: white;
  }
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #939393;
  width: 100%;
`;

const Copyright = styled.p`
  font-size: 16px;
  color: #939393;
  text-align: center;
  font-family: "Philosopher", regular;
`;
