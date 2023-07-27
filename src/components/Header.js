import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AddForm from './AddForm';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname === "/dashboard" ? true : false;
  const [searchKey, setSearchkey] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const userRole = useSelector((state) => state.role);
  const [showAddModal,setShowAddModal] = useState(false);

  const [newMovie,setNewMovie] = useState({
    title:'',
    genres:[],
  })

  const handleAddClick = ()=>{
    setShowAddModal(true);
  }
  const closeModal=()=>{
    setShowAddModal(false);
  }

  const handleSearch = (e) => {
    const updatedSearchKey = e.target.value;
    setSearchkey(updatedSearchKey);
    dispatch({
      type: "SEARCH",
      payload: {
        searchKey: updatedSearchKey,
      },
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (page) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };


  useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () =>{
      if(window.scrollY==0){
        setShow(false);
        console.log(window.scrollY);
      }else{
        setShow(true);
        console.log(window.scrollY);
      }
    }
    );
  });

  return (
    <header className={`topNav ${show && "header__black"}`}>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="nav__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </Link>

          <div className="navbar">
            <div className="admin__btn">
              {page && (
                <div>
                  {userRole === "admin" && (
                    <button className="add__btn" onClick={handleAddClick} >Add Movies</button>
                  )}
                  {showAddModal && <AddForm closeModal={closeModal}/>}
                </div>
              )}
            </div>
            <form className="d-flex">
              {page ? (
                <div className="searchSection">
                  <input
                    type="search"
                    value={searchKey}
                    placeholder="Search for movies"
                    className="searchInput"
                    onChange={handleSearch}
                  ></input>
                </div>
              ) : (
                <select>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              )}
              <button className="btn btn-danger" onClick={clickHandler}>
                {page ? "SignOut" : "SignIn"}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
