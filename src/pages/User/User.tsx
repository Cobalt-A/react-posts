import React, { FC } from "react";
import { Stack } from "react-bootstrap";
import UserInfo from "../../components/User/UserInfo/UserInfo";

const User: FC = () => {
  return (
    <Stack gap={3}>
      <UserInfo />
    </Stack>
  );
};

export default User;
