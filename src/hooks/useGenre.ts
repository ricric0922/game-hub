import useGenres from "./useGenres";

const useGenre = (id: number) => {
  const { data } = useGenres();
  return data?.results.find((d) => d.id === id);
};

export default useGenre;
