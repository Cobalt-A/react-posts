import React, { FC } from "react";
import { Stack } from "react-bootstrap";
import UserInfo from "../../components/User/UserInfo/UserInfo";
import BackButton from "../../ui/BackButton/BackButton";

const User: FC = () => {
  return (
    <Stack className="mb-3" gap={3}>
      <BackButton />
      <UserInfo />
    </Stack>
  );
};

export default User;
