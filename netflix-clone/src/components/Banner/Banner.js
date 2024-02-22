import React, { useEffect, useState, useRef } from "react";
import movieTrailer from "movie-trailer";
import ReactPlayer from "react-player";
import "./banner.css";
import axios from "axios";
import { API_key, requests } from "../../utils/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const movieTitleRef = useRef("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_key}&language=en-US&page=1`
        );
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );

        movieTitleRef.current =
          movie?.title || movie?.name || movie?.original_name;
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const url = await movieTrailer(movieTitleRef.current);
        console.log(url);
        setTrailerUrl(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams);
        console.log(urlParams.get("v"));
        setTrailerUrl(urlParams.get("v"));
      } catch (error) {
        console.log("error", error);
      }
    };

    const timeoutId = setTimeout(fetchTrailer, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
