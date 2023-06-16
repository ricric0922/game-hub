import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "60bae2c570fc4f26b45be08d33884f01",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { ...requestConfig })
      .then((res) => res.data);
  };

  getAll = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data.results);
  };
}

export default APIClient;
