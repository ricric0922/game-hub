import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../interfaces";
import useGenres from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.find((p) => p.id === gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
