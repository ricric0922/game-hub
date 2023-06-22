import usePlatforms from "./usePlatforms";

const usePlatform = (id: number) => {
  const { data } = usePlatforms();
  return data?.results.find((d) => d.id === id);
};

export default usePlatform;
