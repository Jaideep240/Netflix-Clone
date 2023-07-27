import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [isUserExist, setUserExist] = useState(false);
  //   const [isEmailUsed, setIsEmailUsed] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const dispatch = useDispatch();

  const validation = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case "password":
        return value.length >= 6;
      default:
        break;
    }
  };

  const ctaClickHandler = (e) => {
    e.preventDefault();
    if(!validation('email', email) || !validation('password', password)){
        setEmailValid(validation('email', email));
        setPasswordValid(validation('password', password));
        return;
    }
    if (validation('email', email) && validation('password', password)) {
      if (email === "jaideep001@gmail.com" && password === "jaideep001") {
        //set redux user as admin
        dispatch({
          type: "LOGIN",
          payload: {
            role: "admin",
          },
        });
      } else {
        //set redux user as user
        dispatch({
          type: "LOGIN",
          payload: {
            role: "user",
          },
        });
      }
      //redirect to dashboard
      navigate("/dashboard");
    }
  };
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">Sign In</h1>
        <br />
        <form>
          <input
            className="form-control"
            value={email}
            onChange={emailOnChangeHandler}
            type="email"
            placeholder="Email"
          />
          {!emailValid && <p className="text-danger">Email is invalid/blank</p>}
          <input
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          {!passwordValid && (
            <p className="text-danger">Password is invalid/blank</p>
          )}
          <button
            className="btn btn-danger btn-block"
            onClick={ctaClickHandler}
          >
            Sign In
          </button>
          
        </form>
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
};

export default Login;
