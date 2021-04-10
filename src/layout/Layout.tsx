import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { LayoutStyled, Container } from "./style";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyled>
      <NavBar />
      <Container>
        {children}
      </Container>
      <Footer />
    </LayoutStyled>
  );
};

interface LayoutProps {
}

export default Layout;
