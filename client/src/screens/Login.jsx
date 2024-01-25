import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  let navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signin",
        values
      );

      if (response.status === 200) {
        const uid = response.data.uid;
        navigate(`/dashboard/profile`, { state: response.data });
      } else {
        console.error("Error signing in:", response.data.error);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center mb-8">
          <div>
            <NavLink />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <div className="mb-4">
          <label htmlFor="email">Email or Username</label>
          <Field
            type="text"
            id="email"
            name="email"
            className="w-full border p-2"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            className="w-full border p-2"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
