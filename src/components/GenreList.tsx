import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
