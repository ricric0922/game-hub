import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game, GameQuery } from "../interfaces";

const apiClient = new APIClient<Game>("/games");
const pageSize = 8;

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: pageSize,
        },
      }),
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
