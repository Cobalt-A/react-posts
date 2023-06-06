import { IPost } from "../../types/IPost";

export const filterPostsByTitle = (posts: IPost[], title: string): IPost[] => {
  return posts.filter((post) => post.title.toLowerCase().indexOf(title) !== -1);
};
