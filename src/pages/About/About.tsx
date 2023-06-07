import React, { FC } from "react";
import AboutInfo from "../../components/About/AboutInfo/AboutInfo";
import { Stack } from "react-bootstrap";

const About: FC = () => {
  return (
    <Stack className="mb-3" gap={3}>
      <AboutInfo />
    </Stack>
  );
};

export default About;
