import React, { useEffect, useState } from "react";
import "./Form.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        localStorage.setItem("token", res.user.accessToken);
        navigate("/");
      })
      .catch(() => {
        setErrorMsg("Email or password wrong");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="formpage">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login here</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <h5>{errorMsg}</h5>
      </form>
    </div>
  );
}

export default Login;
