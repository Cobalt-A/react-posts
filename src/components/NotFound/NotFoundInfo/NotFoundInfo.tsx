import React, { FC } from "react";
import { Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundInfo: FC = () => {
  return (
    <Container>
      <Alert variant="dark">
        Страница не найдена <Link to="/">Вернуться на главную</Link>?
      </Alert>
    </Container>
  );
};

export default NotFoundInfo;
