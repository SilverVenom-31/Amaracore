import axios from "axios";

const BASE_URL = "https://60ac9dff9e2d6b0017457815.mockapi.io";

export const getUsersList = () => {
  return axios.get(BASE_URL + "/ag/contacts");
};
