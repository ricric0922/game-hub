import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../interfaces";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId || 0);
  const platform = usePlatform(gameQuery.platformId || 0);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
