import React from "react";
import MovieRow from "./MovieRow";

const movies = [
  "https://youthvietnam.vn/wp-content/uploads/2021/06/Poster-phim-quang-cao-co-hieu-qua-khong.jpg",
  "https://youthvietnam.vn/wp-content/uploads/2021/06/Cac-yeu-to-giup-poster-phim-thanh-cong.jpg",
  "https://youthvietnam.vn/wp-content/uploads/2021/06/mau-poster-phim-viet-nam.jpg",
  "https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809230YFLaGg3GI3SV21M.jpg",
  "https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809284X4pyEDCj7CFMsGu.jpg",
  "https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809317niNpzY2khA3tzMg.jpg",
  "https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg",
  "https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809401rAfP9FLErkemlp1.jpg",
];

function Contents(props) {
  return (
    <div>
      <MovieRow movies={movies} title="Netflix Originals" isNetflix={true} />
      <MovieRow movies={movies} title="Trending Movies" />
      <MovieRow movies={movies} title="Top Rated Movies " />
      <MovieRow movies={movies} title="Action Movies" />
      <MovieRow movies={movies} title="Comedy Movies" />
      <MovieRow movies={movies} title="Horror Movies" />
      <MovieRow movies={movies} title="Romance Movies" />
      <MovieRow movies={movies} title="Documentaries " />
    </div>
  );
}

export default Contents;
