import React, { FC, useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { postsSlice } from "../../../store/reducers/posts";
import Post from "./Post/Post";
import PostsMoreButton from "./PostsMoreButton/PostsMoreButton";

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { getPosts } = postsSlice.actions;
  const { posts, page } = useAppSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, getPosts, page]);

  return (
    <Container>
      <Stack gap={3}>
        {posts?.map((post, index) => (
          <Post post={post} key={index} />
        ))}
        <PostsMoreButton />
      </Stack>
    </Container>
  );
};

export default Posts;
