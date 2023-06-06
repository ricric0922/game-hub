import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "60bae2c570fc4f26b45be08d33884f01",
  },
});
