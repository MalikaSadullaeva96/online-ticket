/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImg from "../../assets/img/login.svg"
import { Link } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";

export default function LoginPage() {

  const username = useRef(), password = useRef();

  const onSubmit = (e) => {

    e.preventDefault();

    const body = {
      username: username.current.value,
      password: password.current.value,
    }

    axios.post(`${process.env.REACT_APP_API_URL}/user/login/`, body, {
      headers: { "Content-Type": "application/json" },
    }).then((res) => { 
      if(res.status === 200) {
        toast.success("Signed in successfully!"); 
        sessionStorage.setItem('token', "asdasdas");
        setTimeout(() => {
          window.location.replace("/"); 
        }, 1000);
        return;
      }
      else toast.error(toast.error("An error occurred! Try again!"))
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="llogin container p-4">
      <div className="row w-100 g-5 d-flex justify-content-evenly">
        <div className="d-none d-md-block col-md-5 my-auto">
          <img src={loginImg} alt="Image" className="img-fluid"/>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <div className="screen">
            <div className="screen__content">
              <form onSubmit={onSubmit} className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    id="username"
                    ref={username}
                    className="login__input"
                    placeholder="User name"
                    required
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    id="password"
                    ref={password}
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <div id="bold" className="text-center mt-4">
                  <Link to="/sign-up" className=" text-warning">Register <i className="fas fa-chevron-right mx-2"></i></Link>
                </div>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
