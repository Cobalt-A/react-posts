import React, { FC, useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { postsSlice } from "../../../store/reducers/posts";
import Post from "../../../ui/Post/Post";

const UserPosts: FC = () => {
  const dispatch = useAppDispatch();
  const { getPosts } = postsSlice.actions;
  const { posts, page } = useAppSelector((state) => state.postsReducer);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts(page));
    }, 500);
  }, [dispatch, getPosts, page]);

  return (
    <Container>
      <Stack gap={3}>
        {posts?.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </Stack>
    </Container>
  );
};

export default UserPosts;
