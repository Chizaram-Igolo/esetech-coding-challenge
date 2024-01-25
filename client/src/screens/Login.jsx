import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, NavLink } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  emailOrUsername: Yup.string().required("Email or Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const initialValues = {
    emailOrUsername: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // Handle login logic here
    console.log(values);
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
          <label htmlFor="emailOrUsername">Email or Username</label>
          <Field
            type="text"
            id="emailOrUsername"
            name="emailOrUsername"
            className="w-full border p-2"
          />
          <ErrorMessage
            name="emailOrUsername"
            component="div"
            className="text-red-500"
          />
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
