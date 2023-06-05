import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { IComment } from "../../types/IComment";

interface PostCommentProps {
  comment: IComment;
}

const Comment: FC<PostCommentProps> = ({ comment }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
