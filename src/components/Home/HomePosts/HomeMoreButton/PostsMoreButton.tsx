import React, { FC } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { postsSlice } from "../../../../store/reducers/posts";

const PostsMoreButton: FC = () => {
  const dispatch = useAppDispatch();
  const { setPostsPage, setLoading } = postsSlice.actions;
  const { page, isLoading } = useAppSelector((state) => state.postsReducer);

  const clickHandler = (): void => {
    dispatch(setLoading(true));
    dispatch(setPostsPage(page + 1));
  };

  return (
    <Button onClick={clickHandler} variant="dark">
      {!isLoading && <span>Показать еще</span>}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </Spinner>
      )}
    </Button>
  );
};

export default PostsMoreButton;
