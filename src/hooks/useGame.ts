import { useQuery } from "@tanstack/react-query";
import { Game } from "../interfaces";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
