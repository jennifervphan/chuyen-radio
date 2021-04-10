import React from "react";
import styled from "@emotion/styled";

const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TabStyled = styled.a`
  padding: 0 2rem;
  color: black;
  text-decoration: none;
`;

const NavBar: React.FC = () => {
    return (
        <HeaderContainerStyled>
            <div>
                <TabStyled href="/link" className="navbar-item" title="Logo">SOUNDCLOUD</TabStyled>
            </div>
            <TabStyled>JvP&apos; s Radio</TabStyled>
            <HeaderStyled>
                <TabStyled href="/" className="navbar-item" title="Logo">RADIO</TabStyled>
                <TabStyled href="/about" className="navbar-item" title="Logo">ABOUT</TabStyled>
            </HeaderStyled>
        </HeaderContainerStyled>
    )
}

export default NavBar;
