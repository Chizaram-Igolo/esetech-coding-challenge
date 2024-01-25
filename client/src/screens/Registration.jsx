import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, NavLink } from "react-router-dom";

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Registration = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    // Handle registration logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center mb-8">
          <div>
            <NavLink />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Register</h2>

        <div className="mb-4">
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="w-full border p-2"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border p-2"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="w-full border p-2"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            className="w-full border p-2"
          />
          <ErrorMessage
            name="username"
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

        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border p-2"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
        >
          Register
        </button>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </Form>
    </Formik>
  );
};

export default Registration;
