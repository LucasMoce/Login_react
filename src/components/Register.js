import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <h1>Sign Up</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
