import React, { ChangeEvent, FC, useState } from "react";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux";
import { postsSlice } from "../../../store/reducers/posts";

const HomeSearch: FC = () => {
  const [inProgress, setProgress] = useState<boolean>(false);
  const { setSearchValue } = postsSlice.actions;
  const dispatch = useAppDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (inProgress) return;
    setProgress(true);
    setTimeout(() => {
      dispatch(setSearchValue(event.target.value));
      setProgress(false);
    }, 500);
  };

  return (
    <Container>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Поиск..."
          className="me-2"
          aria-label="Search"
          onChange={changeHandler}
        />
      </Form>
    </Container>
  );
};

export default HomeSearch;
