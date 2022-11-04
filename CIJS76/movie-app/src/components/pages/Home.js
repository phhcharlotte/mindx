import React, { useEffect, useState } from "react";
import Intro from "../intro/Intro";
import Contents from "../Contents/Contents";
import Menus from "../Menus/Menus";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMoviesDetail, setIsShowMoviesDetail] = useState(false);

  useEffect(() => {
    setIsShowMoviesDetail(MovieDetail ? true : false);
  }, [MovieDetail]);
  return (
    <div>
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail movie={MovieDetail} showModal={isShowMoviesDetail} />
    </div>
  );
}

export default Home;
