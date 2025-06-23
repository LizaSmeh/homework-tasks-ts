import { posts } from "./constants.js";
interface Posts {
  id: string;
  title: string;
  body: string;
}

interface Result {
  byId: { [key: string]: Posts };
  allIds: string[];
}

const normalizeData = (unnormalizedData: Posts[]): Result => {
  const result = unnormalizedData.reduce(
    (acc: Result, cur: Posts) => {
      acc = {
        byId: { ...acc.byId, [cur.id]: cur },
        allIds: [...acc.allIds, cur.id],
      };

      return acc;
    },
    { byId: {}, allIds: [] }
  );

  return result;
};

console.log(normalizeData(posts));