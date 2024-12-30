import React from "react";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../Schemas/loginFormSchemas";
import { Link } from "react-router";
import "../Css/Login.css";

function Login() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        toast.success("Welcome User");
        actions.resetForm();
        navigate("/home");
      } catch (error) {
        toast.error("Wrong email or password");
      }
    }
  });

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome ${result.user.displayName}`);
      navigate("/home");
    } catch (error) {
      toast.error(error.message || "Google Sign-In Failed");
    }
  };

  return (
    <div className="auth-container">
      <h1>Sign İn</h1>
      <div className="auth">
        <form onSubmit={formik.handleSubmit}>
          <div className="form">
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter your email"
              />
              {formik.errors.email && (
                <p className="error">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter your password"
              />
              {formik.errors.password && (
                <p className="error">{formik.errors.password}</p>
              )}
            </div>
          </div>
          <div className="button">
            <button
              style={{ backgroundColor: "red" }}
              type="button"
              onClick={handleGoogleSignIn}
            >
                
              <FaGoogle style={{ marginRight: "5px" }} />
              Sign in with Google
            </button>
           


            <button style={{ backgroundColor: "blue" }} type="submit">
              Sign In
            </button>
          </div>
          <Link to="/register">Sign up</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
