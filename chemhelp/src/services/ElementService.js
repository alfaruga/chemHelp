import axios from "axios";

const baseUrl = "/api/elements";

const getAll =async () => {
  const response =  await axios.get(baseUrl);
  return response.data
};

const getOne = async  (symbol) => {
  const response = await axios.get(`${baseUrl}/${symbol}`);
  return response.data

};
const exp = {
  getAll,
  getOne,
};

export default exp;
