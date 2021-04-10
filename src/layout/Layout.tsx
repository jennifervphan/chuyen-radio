import React from "react";

import NavBar from "../components/NavBar";
import { LayoutStyled } from "./style";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutStyled>
            <NavBar />
            <div>
                {children}
            </div>
        </LayoutStyled>
    )
};

interface LayoutProps {}

export default Layout;
