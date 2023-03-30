import axios from "axios";

export const getDataApi = () => {
  const url = `https://60816d9073292b0017cdd833.mockapi.io/modes`;

  return axios.get(url).then((response) => {
    return response.data;
  });
};
