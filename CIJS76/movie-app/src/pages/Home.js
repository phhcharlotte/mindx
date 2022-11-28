import React, { useEffect, useState } from "react";
import Intro from "../components/Contents/Intro";
import Contents from "../components/Contents/Contents";
import Menus from "../components/Menus/Menus";
import MoviesDetail from "../components/MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMoviesDetail, setIsShowMoviesDetail] = useState(false);

  useEffect(() => {
    setIsShowMoviesDetail(MovieDetail ? true : false);
  }, [MovieDetail]);
  return (
    <div>
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail movie={MovieDetail} showModal={isShowMoviesDetail} />
    </div>
  );
}

export default Home;
