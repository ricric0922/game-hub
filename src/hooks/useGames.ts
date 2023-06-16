import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Game, GameQuery } from "../interfaces";

const apiClient = new APIClient<Game>("/games");
const pageSize = 16;

const useGames = (gameQuery: GameQuery) => {
  const params = {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
    page_size: pageSize,
  };

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", params],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          ...params,
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //1m
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
