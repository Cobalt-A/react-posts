import React, { FC, Fragment, ReactNode } from "react";
import MainHeader from "../MainHeader/MainHeader";

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
