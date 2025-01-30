import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <LogoWrapper>
          <CompanyName>Selvapriya</CompanyName>
          <CompanyType>Computers</CompanyType>
        </LogoWrapper>
        <NavControls>
          <MenuWrapper role="navigation" aria-label="Main navigation">
            {menuItems.map((item, index) => (
              <StyledLink to={item.link} key={index}>
                <MenuItem
                  $isActive={item.isActive}
                  tabIndex={0}
                  role="menuitem"
                >
                  {item.label}
                </MenuItem>
              </StyledLink>
            ))}
          </MenuWrapper>
          <ButtonWrapper>
            <StyledButton role="button" tabIndex={0}>
              Get a Quote
            </StyledButton>
          </ButtonWrapper>
        </NavControls>
      </NavWrapper>
    </NavContainer>
  );
};

// Define menu items with routes
const menuItems = [
  { label: "HOME", link: "/", isActive: true },
  { label: "SERVICES", link: "/services", isActive: false },
  { label: "PRICING", link: "/pricing", isActive: false },
  { label: "ABOUT", link: "/about", isActive: false },
  { label: "CONTACT", link: "/contact", isActive: false },
];

// Styled Components
const NavContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 40px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

const NavControls = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 400;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  color: rgba(30, 30, 30, 1);
  font-weight: 500;
  text-align: right;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

const CompanyName = styled.span`
  font-weight: 700;
  font-size: 36px;
  color: rgba(30, 30, 30, 1);
  display: block;
`;

const CompanyType = styled.span`
  font-weight: 400;
  font-size: 20px;
  display: block;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 11px;
  color: rgba(30, 30, 30, 1);
  white-space: nowrap;
  text-align: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    white-space: initial;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MenuItem = styled.div`
  align-self: stretch;
  min-height: 52px;
  gap: 8px;
  padding: 17px 24px;
  color: ${(props) =>
    props.$isActive ? "rgba(255, 170, 170, 1)" : "rgba(30, 30, 30, 1)"};
  font-weight: ${(props) => (props.$isActive ? "700" : "400")};
  cursor: pointer;
  &:hover {
    color: rgba(255, 170, 170, 1);
  }
  @media (max-width: 991px) {
    padding: 10px 20px;
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
