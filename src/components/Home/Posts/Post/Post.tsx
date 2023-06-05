import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { IPost } from "../../../../types/IPost";

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Card.Link href="#">Подробнее</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Post;
