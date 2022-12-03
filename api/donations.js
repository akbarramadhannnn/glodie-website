import axios from "../lib/axiosDefault";

export const ApiGetDonationsLists = async () => {
  const response = await axios.get(`/donations`);
  return response;
};
