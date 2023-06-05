import React, { FC } from "react";
import { Card, Image } from "react-bootstrap";
import { IPost } from "../../types/IPost";
import { Link } from "react-router-dom";
import PostComments from "./PostComments/PostComments";

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <Card>
      <Card.Body>
        <Link to={`/user/${post.userId}`}>
          <Image src="/images/user.svg" roundedCircle />
        </Link>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <PostComments postId={post.id} />
      </Card.Body>
    </Card>
  );
};

export default Post;
