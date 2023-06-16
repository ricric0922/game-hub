import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import platforms from "../data/platforms";
import { Platform } from "../interfaces";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
