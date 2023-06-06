import React, { FC, useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { postsSlice } from "../../../store/reducers/posts";
import Post from "../../../ui/Post/Post";
import PostsMoreButton from "./HomeMoreButton/PostsMoreButton";
import Loader from "../../../ui/Loader/Loader";
import { IPost } from "../../../types/IPost";
import { filterPostsByTitle } from "../../../utils/filters/filters";
import { postSorting } from "../../../utils/sortings/sortings";

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { getPosts, setLoading, setPosts, setPostsPage } = postsSlice.actions;
  const { posts, page, isLoading, isShowMoreButton, searchValue, sortingType } =
    useAppSelector((state) => state.postsReducer);
  const [viewPosts, serViewPosts] = useState<IPost[]>([]);

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(getPosts(page));
    }, 500);
  }, [dispatch, getPosts, page, setLoading]);

  useEffect(() => {
    const filteredPosts = filterPostsByTitle(posts, searchValue);
    const sortedPosts = postSorting(filteredPosts, sortingType);
    serViewPosts(sortedPosts);
  }, [posts, searchValue, sortingType]);

  useEffect(() => {
    return () => {
      dispatch(setPosts([]));
      dispatch(setPostsPage(1));
    };
  }, [dispatch, setPosts, setPostsPage]);

  return (
    <Container className="mt-3 mb-3">
      <Stack gap={3}>
        {viewPosts?.map((post, index) => (
          <Post post={post} key={index} />
        ))}
        {isLoading && <Loader />}
        {isShowMoreButton && <PostsMoreButton />}
      </Stack>
    </Container>
  );
};

export default Posts;
