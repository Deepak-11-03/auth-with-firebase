import React, { useState } from "react";
import "./Form.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
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
   if(user.password.length < 6){
    setErrorMsg("Minimum length of password should be 6")
   }
   else{
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(() => {
      alert("Account registered");
      setUser({ email: "", password: "" });
      navigate("/login");
    })
    .catch(() => {
      setErrorMsg("This email is already exist");
    });
   }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="formpage">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Signup here</h2>
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
        <button type="submit">Signup</button>
        <h5>{errorMsg}</h5>
      </form>
    </div>
  );
}

export default Signup;
