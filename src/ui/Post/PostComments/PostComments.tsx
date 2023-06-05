import React, { FC, useState } from "react";
import { Accordion, Stack, Spinner } from "react-bootstrap";
import { getApiResponse } from "../../../api";
import { IComment } from "../../../types/IComment";
import Comment from "../../Comment/Comment";

interface PostCommentsProps {
  postId: number;
}

const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const [postComments, setPostComments] = useState<IComment[]>([]);
  const [isRequested, setIsRequested] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const enterHandler = (): void => {
    if (isRequested) return;
    setLoading(true);
    setTimeout(() => {
      getApiResponse<IComment[]>(`/posts/${postId}/comments`)
      .then((response) => (response ? setPostComments(response) : undefined))
      .then(() => setLoading(false));
      setIsRequested(true);
    }, 500);
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Смотреть комментарии </Accordion.Header>
        <Accordion.Body onEnter={enterHandler}>
          <Stack gap={2}>
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Загрузка...</span>
              </Spinner>
            )}
            {!isLoading &&
              postComments?.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PostComments;
