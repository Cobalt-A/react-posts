import React, { FC } from "react";
import { Spinner } from "react-bootstrap";

const Loader: FC = () => {
  return (
    <Spinner className="mx-auto" animation="border" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </Spinner>
  );
};

export default Loader;
