import { IPost } from "../../types/IPost";
import { postSortingType } from "../../types/SortingTypes";

export const postSorting = (posts: IPost[], type: postSortingType): IPost[] => {
  switch (type) {
    case "titleUp":
      return posts.sort((a, b) => (a.title > b.title ? 1 : -1));
    case "titleDown":
      return posts.sort((a, b) => (a.title < b.title ? 1 : -1));
    default:
      return posts;
  }
};
