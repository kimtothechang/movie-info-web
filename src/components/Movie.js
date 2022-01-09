import PropTypes, { any } from "prop-types";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "../css/reset.css";

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <MovieCard>
      <MovieDetail>
        <img src={coverImg} />
        <MovieInner>
          <h2>
            <Link className="reset_anchor" to={`/movie/${id}`}>
              {title}
            </Link>
          </h2>
          {genres && (
            <div>
              {genres.map((genre) => (
                <span key={genre}>{genre} </span>
              ))}
            </div>
          )}
        </MovieInner>
      </MovieDetail>
      <p>{summary.length > 410 ? `${summary.slice(0, 410)}...` : summary}</p>
    </MovieCard>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

const MovieCard = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 12px;
  background-color: #f6f6f6;
`;

const MovieDetail = styled.div`
  display: flex;
`;

const MovieInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
