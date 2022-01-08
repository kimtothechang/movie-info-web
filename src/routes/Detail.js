import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [urlKey, setUrlKey] = useState("");
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetail(json.data.movie);
    setUrlKey(json.data.movie.title.toLowerCase().split(" ").join("-"));
  };
  useEffect(() => {
    getDetail();
  }, []);
  console.log(urlKey);

  return (
    <DetailCard>
      <DetailTitle>{detail.title}</DetailTitle>
      <DetailGenres>
        genres:
        {detail.genres &&
          detail.genres.map((genre) => <span key={genre}>{genre} </span>)}
      </DetailGenres>
      <span>runtime: {detail.runtime}</span>
      <span>rating: {detail.rating}</span>
      <span>
        about more:{" "}
        <A
          target="_blank"
          href={`https://yts.mx/movies/${urlKey}-${detail.year}`}
        >
          link
        </A>
      </span>
      <p>description: </p>
      <p>{detail.description_full}</p>
    </DetailCard>
  );
};

export default Detail;

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #6b9900;
  padding: 20px;
  box-shadow: 0px 0px 5px 5px rgba(107, 153, 0, 0.25);
`;

const DetailTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const DetailGenres = styled.div`
  color: black;
`;

const A = styled.a`
  color: #000;
  text-decoration: none;
  outline: none;

  &:hover {
    color: tan;
  }
`;
