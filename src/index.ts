import { COMMENTS_URL } from "./constants.js";
interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string): Promise<Response> => {
  return fetch(url);
};

getData(COMMENTS_URL)
  .then((loadData: Response) => loadData.json())
  .then((data: Comments[]) => {
    data.forEach((comment) => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  });
