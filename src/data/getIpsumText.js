import axios from "axios";

const URL = "https://hipsum.co/api/";

export const getIpsumText = async (count) => {
  const { data } = await axios.get(URL, {
    params: {
      paras: count,
      type: "hipster-centric",
    },
  });

  console.log(data);
  return data;
};
