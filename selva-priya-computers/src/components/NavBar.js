import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationBar = ({ onQuoteClick, isDisabled }) => {
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
              <StyledLink to={item.link} key={index} $isDisabled={isDisabled}>
                <MenuItem
                  $isActive={item.isActive}
                  tabIndex={isDisabled ? -1 : 0}
                >
                  {item.label}
                </MenuItem>
              </StyledLink>
            ))}
          </MenuWrapper>
          <ButtonWrapper>
            <StyledButton role="button" tabIndex={0} onClick={onQuoteClick}>
              {isDisabled ? "Close" : "Get a Quote"}
            </StyledButton>
          </ButtonWrapper>
        </NavControls>
      </NavWrapper>
    </NavContainer>
  );
};

const menuItems = [
  { label: "HOME", link: "/", isActive: true },
  { label: "SERVICES", link: "/services", isActive: false },
  { label: "PRICING", link: "/pricing", isActive: false },
  { label: "ABOUT", link: "/about", isActive: false },
  { label: "CONTACT", link: "/contact", isActive: false },
];

const NavContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

const NavControls = styled.div`
  display: flex;
  gap: 20px;
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
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "auto")};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;

const MenuItem = styled.div`
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

const StyledButton = styled.button`
  background-color: #ffaaaa;
  color: white;
  padding: 15px 25px;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.9;
  }
`;
