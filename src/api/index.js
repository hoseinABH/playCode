import Axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await Axios.get(`${BASE_URL}/posts`);
  const posts = await response.data;

  return posts;
};
export const createPost = async (post) => {
  const config = {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  const response = await Axios.post(
    `${BASE_URL}/posts`,
    JSON.stringify * post,
    config
  );
  const posts = await response.data;

  return posts;
};
