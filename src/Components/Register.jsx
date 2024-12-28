import React from "react";
import { useFormik } from "formik";
import { userSchema } from "../Schemas/RegisterFormSchema";
import "../Css/Register.css";
function RegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      term: false
    },
    validationSchema: userSchema,
    onSubmit: (values, action) => {
      setTimeout(() => {
        action.resetForm();
      }, 2000);
    }
  });

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Please Enter Your Email Address."
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="issue">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            name="name"
            placeholder="Please Enter UserName."
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="issue">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Please Enter Your Password."
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="issue">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Your Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Please Confirm Your Password."
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="issue">{errors.confirmPassword}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "max-content"
          }}
        >
          <input
            type="checkbox"
            name="term"
            checked={values.term}
            onChange={handleChange}
            style={{
              width: "20px",
              height: "20px",
              marginRight: "5px"
            }}
          />
          <label htmlFor="term">Please accept terms</label>
        </div>
        {errors.term && <p className="issue">{errors.term}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
