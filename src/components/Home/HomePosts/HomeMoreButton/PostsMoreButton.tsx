import React, { FC } from "react";
import { Button } from "react-bootstrap";
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
    <Button disabled={isLoading} onClick={clickHandler} variant="dark">
      <span>Показать еще</span>
    </Button>
  );
};

export default PostsMoreButton;
