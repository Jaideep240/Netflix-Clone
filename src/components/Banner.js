import { useEffect, useState } from "react";
import Movies from "./movies.json";
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  // const [movieId, setMovieId] = useState([]);

  const handleMovieTrailer = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      MovieTrailer(movie.title || '').then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch(()=>console.log('Temporarily unavailable!!'));
    }
  }

  const opts = {
    height: '600',
    width: '70%',
    playerVars: {
      autoplay: 1,
    },
  }
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Movies.length);
    setMovie(Movies[randomIndex]);
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie.posterUrl})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={()=>handleMovieTrailer(movie)} >Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{movie.plot}</p>
      </div>
      <div className="banner--fadeBottom"></div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} style={{marginTop:'250px',display:'flex',justifyContent:'center'}}/>}
    </div>
  );
};

export default Banner;
