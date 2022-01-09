import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styled from "@emotion/styled";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoveis = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMoveis();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ContainerPadding>
          <MovieContainer>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </MovieContainer>
        </ContainerPadding>
      )}
    </div>
  );
};

export default Home;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 500px);
  grid-auto-rows: auto;
  gap: 20px;
`;

const ContainerPadding = styled.div`
  padding: 80px;
  background-color: #d6d6d6;
`;
