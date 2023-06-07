import React, { FC, Fragment, ReactNode } from "react";
import MainHeader from "../Header/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      {children}
    </Fragment>
  );
};

export default MainLayout;
