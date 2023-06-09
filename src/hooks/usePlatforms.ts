import useData from "./useData";

export interface usePlatform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<usePlatform>("/platforms/lists/parents");

export default usePlatforms;
