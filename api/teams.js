import axios from "../lib/axiosDefault";

export const ApiGetTeamsLists = async () => {
  const response = await axios.get(`/teams`);
  return response;
};
