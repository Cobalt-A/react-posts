import React, { FC } from "react";
import { Stack } from "react-bootstrap";
import HomePosts from "../../components/Home/HomePosts/HomePosts";
import HomeSearch from "../../components/Home/HomeSearch/HomeSearch";
import HomeSorting from "../../components/Home/HomeSorting/HomeSorting";

const Home: FC = () => {
  return (
    <Stack gap={3}>
      <HomeSearch />
      <HomeSorting />
      <HomePosts />
    </Stack>
  );
};

export default Home;
