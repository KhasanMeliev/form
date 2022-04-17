import React, { useState } from "react";
import "./styles.css";
function Login() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    resetPassword: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="up">
          <div className="txt_img">
            <div className="pic">
              <img
                src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"
                alt="avatar"
              />
            </div>
            <div className="txt">
              <h3>Hey, it takes less than 60s</h3>
              <p>
                Already have an account? <a href="#login">Log In</a>
              </p>
            </div>
          </div>
        </div>
        <div className="inputs">
          <label>Your Name: *</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            autoComplete="off"
          />
          <label>Email Address: *</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            autoComplete="off"
          />
          <label>Password: *</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            autoComplete="off"
          />
          <label>Repeat Password: *</label>
          <input
            type="password"
            name="resetPassword"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="down">
          <div className="agree">
            <input type="checkbox" />
            <p>
              Check to indicate that you agree to the
              <span>Terms of Service and Privacy Policy</span>.
            </p>
          </div>
          <div className="btn">
            <button>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
