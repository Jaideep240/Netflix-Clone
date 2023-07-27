import { useState } from "react";
import { useDispatch } from "react-redux";

const AddForm = ({ closeModal }) => {
  const [newMovie, setNewMovie] = useState({
    id:1000,
    title: "",
    year: "",
    genres: [],
    dirName: "",
    actName: [],
    plot: "",
    img: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  return (
    <div className="form">
      <form
        className="form__modal"
        onSubmit={() => {
          dispatch({
            type: "ADDMOVIE",
            payload: {
              title: newMovie.title,
              year: newMovie.year,
              genres: newMovie.genres,
              dirName: newMovie.dirName,
              actName: newMovie.actName,
              plot: newMovie.plot,
              img: newMovie.img,
            },
          });
        }}
      >
        <h3>Add Movies</h3>
        <input
          type="text"
          placeholder="Enter the title of movie"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter the year movie released in"
          name="year"
          value={newMovie.year}
          onChange={(handleInputChange)}
        />
        <input
          type="text"
          placeholder="Enter the genres"
          name="genres"
          value={newMovie.genres}
          onChange={(handleInputChange)}
        />
        <input
          type="text"
          placeholder="Enter the name of director"
          name="dirName"
          value={newMovie.dirName}
          onChange={(handleInputChange)}
        />
        <input
          type="text"
          placeholder="Enter the names of actors"
          name="actName"
          value={newMovie.actName}
          onChange={(handleInputChange)}
        />
        <input
          type="text"
          placeholder="Describe the plot of movie"
          name="plot"
          value={newMovie.plot}
          onChange={(handleInputChange)}
        />
        <input
          type="text"
          placeholder="Enter the movie url"
          name="img"
          value={newMovie.img}
          onChange={(handleInputChange)}
        />
        <div className="buttons">
          <button type="submit">Add</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
