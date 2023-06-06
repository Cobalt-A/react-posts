import React, { FC, MouseEvent } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/redux";
import { postsSlice } from "../../../store/reducers/posts";
import { postSortingType } from "../../../types/SortingTypes";

const HomeSorting: FC = () => {
  const dispatch = useAppDispatch();
  const { setSortingType } = postsSlice.actions;

  const clickHandler = (event: MouseEvent<HTMLAnchorElement>): void => {
    dispatch(setSortingType(event.currentTarget.dataset.type as postSortingType));
  };

  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Сортировка
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item variant="dark" data-type="titleUp" onClick={clickHandler}>
            Название по возрастанию
          </Dropdown.Item>
          <Dropdown.Item data-type="titleDown" onClick={clickHandler}>
            Название по убыванию
          </Dropdown.Item>
          <Dropdown.Item data-type="none" onClick={clickHandler}>
            Отменить сортировку
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default HomeSorting;
