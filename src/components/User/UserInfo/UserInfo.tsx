import React, { FC, useEffect } from "react";
import { Container, Card, Spinner, Alert, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userSlice } from "../../../store/reducers/user";
import { useParams } from "react-router-dom";
import UserPosts from "./UserPosts/UserPosts";

const UserInfo: FC = () => {
  const dispatch = useAppDispatch();
  const { getUser, setUser } = userSlice.actions;
  const { user } = useAppSelector((state) => state.userReducer);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUser(id));
    }, 500);
  }, [dispatch, getUser, id]);

  useEffect(() => {
    return () => {
      dispatch(setUser(undefined));
    };
  }, [dispatch, setUser]);

  return (
    <Container>
      <Stack gap={3}>
        {user === undefined && (
          <Spinner className="mx-auto" animation="border" role="status">
            <span className="visually-hidden">Загрузка...</span>
          </Spinner>
        )}
        {user && (
          <Card>
            <Card.Body>
              <Card.Title>Имя: {user.name}</Card.Title>
              <Card.Title>Логин: {user.username}</Card.Title>
              <Card.Title>Email: {user.email}</Card.Title>
              <Card.Title>Телефон: {user.phone}</Card.Title>
              <Card.Title>Сайт: {user.website}</Card.Title>
              <UserPosts />
            </Card.Body>
          </Card>
        )}
        {user === null && <Alert variant="dark">Пользователь не найден</Alert>}
      </Stack>
    </Container>
  );
};

export default UserInfo;
