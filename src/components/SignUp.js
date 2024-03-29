import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Link } from "react-router-dom";
export function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `https://replit.com/@arpitashrivast1/share-it/api/v1/auth`,
        {
          username,
          password,
        }
      );
      if (res.data.user.username) {
        dispatch(loginUser(res.data.user));
      } else {
        alert("Can't create account 😐");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter Password"
        password={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/signin">Have an account already?</Link>
      <button type="submit" className="btn">
        Sign Up
      </button>
    </form>
  );
}
