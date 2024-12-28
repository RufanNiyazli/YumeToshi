import { useFormik } from "formik";
import { userSchema } from "../Schemas/RegisterFormSchema";
import "../Css/Register.css";
import React from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
    validationSchema: userSchema,
    onSubmit: async (values, actions) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        await updateProfile(userCredential.user, {
          displayName: values.name,
        });

        toast.success("User created successfully!");
        actions.resetForm();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <div className="register-container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Please Enter Your Email Address."
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <p className="issue">{formik.errors.email}</p>}
        </div>
        <div>
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            name="name"
            placeholder="Please Enter UserName."
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && <p className="issue">{formik.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Please Enter Your Password."
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && <p className="issue">{formik.errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Your Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Please Confirm Your Password."
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && (
            <p className="issue">{formik.errors.confirmPassword}</p>
          )}
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="term"
            checked={formik.values.term}
            onChange={formik.handleChange}
          />
          <label htmlFor="term">Please accept terms</label>
        </div>
        {formik.errors.term && <p className="issue">{formik.errors.term}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
