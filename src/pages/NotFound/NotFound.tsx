import React, { FC } from "react";
import { Stack } from "react-bootstrap";
import NotFoundInfo from "../../components/NotFound/NotFoundInfo/NotFoundInfo";

const NotFound: FC = () => {
  return (
    <Stack gap={3}>
      <NotFoundInfo />
    </Stack>
  );
};

export default NotFound;
