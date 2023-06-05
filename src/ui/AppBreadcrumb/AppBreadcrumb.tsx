import React, { FC } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { IPage } from "../../types/IPage";

interface AppBreadcrumbProps {
  pages: IPage[];
}

const AppBreadcrumb: FC<AppBreadcrumbProps> = ({ pages }) => {
  return (
    <Container>
      <Breadcrumb>
        {pages.map((page, index) => (
          <Breadcrumb.Item key={index} href={page.route}>
            {page.title}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Container>
  );
};

export default AppBreadcrumb;
