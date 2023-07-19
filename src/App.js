import "./styles.css";
import { useState } from "react";
import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      mobileNumber: "",
      age: "",
      emailID: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const error = {};
      if (!values.username) {
        error.username = "Username is required.";
      } else if (values.username.length < 3) {
        error.username = "Username should have minimum length of 3";
      }

      if (!values.mobileNumber) {
        error.mobileNumber = "Mobile number is required";
      } else if (values.mobileNumber.length !== 10) {
        error.mobileNumber = "Mobile number is should have length of 10";
      } else if (values.mobileNumber.match("^[6-9]d{9}$")) {
        error.mobileNumber = "Enter valid mobile number";
      }

      if (!values.emailID) {
        error.emailID = "Email ID is required";
      } else if (values.emailID.type !== "email") {
        error.mobileNumber = "Enter valid email address";
      }
      if (!values.age) {
        error.age = "Age is required";
      } else if (values.age.maximum < 100) {
        error.mobileNumber = "Age should be less than 100";
      }
      return error;
    }
  });

  //console.log(formik.values);

  return (
    <div className="App">
      <h1>Formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
          ></input>
          {formik.errors.username ? <div>{formik.errors.username}</div> : ""}
        </div>
        <div className="field">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            onChange={formik.handleChange}
          ></input>
          {formik.errors.mobileNumber ? (
            <div>{formik.errors.mobileNumber}</div>
          ) : (
            ""
          )}
        </div>
        <div className="field">
          <label htmlFor="emailId">Email ID</label>
          <input
            type="text"
            name="emailId"
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            onChange={formik.handleChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
