import React, { FC, useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { postsSlice } from "../../../store/reducers/posts";
import Post from "../../../ui/Post/Post";
import PostsMoreButton from "./HomeMoreButton/PostsMoreButton";
import Loader from "../../../ui/Loader/Loader";
import { IPost } from "../../../types/IPost";

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { getPosts, setLoading, setPosts } = postsSlice.actions;
  const { posts, page, isLoading, isShowMoreButton, searchValue } = useAppSelector(
    (state) => state.postsReducer
  );
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(getPosts(page));
    }, 500);
  }, [dispatch, getPosts, page, setLoading]);

  useEffect(() => {
    const searchedPosts = posts.filter(
      (post) => post.title.toLowerCase().indexOf(searchValue) !== -1
    );
    setFilteredPosts(searchedPosts);
  }, [posts, searchValue]);

  useEffect(() => {
    return () => {
      dispatch(setPosts([]));
    };
  }, [dispatch, setPosts]);

  return (
    <Container className="mt-3 mb-3">
      <Stack gap={3}>
        {filteredPosts?.map((post, index) => (
          <Post post={post} key={index} />
        ))}
        {isLoading && <Loader />}
        {isShowMoreButton && <PostsMoreButton />}
      </Stack>
    </Container>
  );
};

export default Posts;
