import React, { FC } from "react";
import { Stack } from "react-bootstrap";
import HomePosts from "../../components/Home/HomePosts/HomePosts";

const Home: FC = () => {
  return (
    <Stack gap={3}>
      <HomePosts />
    </Stack>
  );
};

export default Home;
