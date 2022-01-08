import PropTypes, { any } from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      {genres && (
        <div>
          {genres.map((genre) => (
            <span key={genre}>{genre} </span>
          ))}
        </div>
      )}
      <p>{summary}</p>
    </div>
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
