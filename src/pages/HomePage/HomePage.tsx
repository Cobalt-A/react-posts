import React, { FC } from "react";
import AppBreadcrumb from "../../ui/AppBreadcrumb/AppBreadcrumb";
import { pages } from "./HomePage.constats";
import { Stack } from "react-bootstrap";
import Posts from "../../components/Home/Posts/Posts";

const HomePage: FC = () => {
  return (
    <Stack gap={3}>
      <AppBreadcrumb pages={pages} />
      <Posts />
    </Stack>
  );
};

export default HomePage;
