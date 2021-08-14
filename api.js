import axios from "axios";

export const getTodos = () => {
  return axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos/"
  });
};
