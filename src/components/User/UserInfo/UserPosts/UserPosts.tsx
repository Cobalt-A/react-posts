import React, { FC, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { userPostsSlice } from "../../../../store/reducers/userPosts";
import Post from "../../../../ui/Post/Post";
import { useParams } from "react-router-dom";
import Loader from "../../../../ui/Loader/Loader";

const UserPosts: FC = () => {
  const dispatch = useAppDispatch();
  const { getUserPosts, setLoading, setUserPosts } = userPostsSlice.actions;
  const { posts, isLoading } = useAppSelector((state) => state.userPostsReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(getUserPosts(id));
    }, 500);
  }, [dispatch, getUserPosts, id, setLoading]);

  useEffect(() => {
    return () => {
      dispatch(setUserPosts([]));
    };
  }, [dispatch, setUserPosts]);

  return (
    <Stack gap={3}>
      {isLoading && <Loader />}
      {!isLoading && posts?.map((post, index) => <Post post={post} key={index} />)}
    </Stack>
  );
};

export default UserPosts;
