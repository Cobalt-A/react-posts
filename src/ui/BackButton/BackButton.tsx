import React, { FC } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BackButton: FC = () => {
  return (
    <Container>
      <Link to="/">
        <Button variant="dark">
          <span>Вернуться назад</span>
        </Button>
      </Link>
    </Container>
  );
};

export default BackButton;
