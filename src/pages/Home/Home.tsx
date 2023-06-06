import React, { FC } from "react";
import { Stack } from "react-bootstrap";
import HomePosts from "../../components/Home/HomePosts/HomePosts";
import HomeSearch from "../../components/Home/HomeSearch/HomeSearch";

const Home: FC = () => {
  return (
    <Stack gap={3}>
      <HomeSearch />
      <HomePosts />
    </Stack>
  );
};

export default Home;
