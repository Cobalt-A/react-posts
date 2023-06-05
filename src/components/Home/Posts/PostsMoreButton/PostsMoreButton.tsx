import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { postsSlice } from "../../../../store/reducers/posts";

const PostsMoreButton: FC = () => {
  const dispatch = useAppDispatch();
  const { setPostsPage } = postsSlice.actions;
  const { page } = useAppSelector((state) => state.postsReducer);

  const clickHandler = (): void => {
    dispatch(setPostsPage(page + 1));
  };

  return (
    <Button onClick={clickHandler} variant="dark">
      Показать еще
    </Button>
  );
};

export default PostsMoreButton;
