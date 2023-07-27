import Movies from "./movies";
import { IconContext } from "react-icons/lib";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import MovieTrailer from 'movie-trailer';

const List = (props) => {
  // console.log(Movies);
  const searchKey = useSelector((state) => state.searchKey);
  const [trailerUrl, setTrailerUrl] = useState('');
  useEffect(() => {
    console.log(searchKey);
  }, [searchKey]);

  const handleLeftClick = () => {
    let slider = document.getElementById(props.genre);
    slider.scrollLeft = slider.scrollLeft - 540;
  };

  const handleRightClick = () => {
    let slider = document.getElementById(props.genre);
    slider.scrollLeft = slider.scrollLeft + 540;
  };
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
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <IconContext.Provider value={{ size: "2rem", color: "white" }}>
      <div className="list">
        <h1 className="genre__heading">{props.genre}</h1>
        <div className="list__container">
          <div className="leftArrow">
            <GoChevronLeft onClick={handleLeftClick} />
          </div>
          <div className="row">
            <div className="row__posters" id={props.genre}>
              {Movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchKey.toLowerCase())
              ).map((movie) =>
                movie.genres.includes(props.genre) ? (
                  <img
                    className="row__poster row__posterLarge"
                    src={movie.posterUrl}
                    alt={movie.title}
                    key={movie.id}
                    onClick={()=>handleMovieTrailer(movie)}
                  />
                ) : null
              )}
            </div>
          </div>
          <div className="rightArrow">
            <GoChevronRight onClick={handleRightClick} />
          </div>
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </IconContext.Provider>
  );
};

export default List;
