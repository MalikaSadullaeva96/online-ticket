/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import loginImg from "../../assets/img/login.svg"
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function RegisterPage() {

  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const password1 = useRef();

  const onSubmit = (e) => {
    
    e.preventDefault();
    const data = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      email: email.current.value,
      username: username.current.value,
      password: password.current.value,
      password1: password1.current.value,
    }

    axios.post(`${process.env.REACT_APP_API_URL}/user/registration/`, data, {
      headers: { "Content-Type": "application/json" },
    }).then((res) => { 
      if(res.status === 201) {
        toast.success("Signed up successfully!"); 
        window.location.replace("/sign-in"); 
        return;
      }
      else if (res.status === 200) toast.warning("An error occurred! Try again!")
      else toast.error(toast.success(res.data.detail))
    })
    .catch(err => console.log(err))
  };

  return (
    <div id="register" className="llogin container p-4">
      <div className="row w-100 g-5 d-flex justify-content-evenly">
        <div className="d-none d-md-block col-md-5 my-auto">
          <img src={loginImg} alt="Image" className="img-fluid"/>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <div className="screen">
            <div className="screen__content">
              <form id="form" onSubmit={onSubmit} className="login">
                <div className="login__field">
                  <input type="text" ref={first_name} className="login__input" placeholder="First name" required/>
                </div>
                <div className="login__field">
                  <input type="text" ref={last_name} className="login__input" placeholder="Last name" required/>
                </div>
                <div className="login__field">
                  <input type="email" ref={email} className="login__input" placeholder="Email" required/>
                </div>
                <div className="login__field">
                  <input type="text" ref={username} className="login__input" placeholder="User name" required/>
                </div>
                <div className="login__field">
                  <input ref={password} type="password" className="login__input" placeholder="Password" required/>
                </div>
                <div className="login__field">
                  <input ref={password1} type="password" className="login__input" placeholder="Confirm password" required/>
                </div>
                <button type="submit" className="button login__submit">
                  <span className="button__text">Register In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <div id="bold" className="text-center mt-2">
                  <Link to="/sign-in" className=" text-warning">Log In <i className="fas fa-chevron-right mx-2"></i></Link>
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
