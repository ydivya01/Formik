import "./styles.css";

import { Formik } from "formik";

export default function Component() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          mobileNumber: "",
          age: 0,
          emailID: ""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username is required.";
          } else if (values.username.length < 3) {
            errors.username = "Username should have minimum length of 3";
          }

          if (!values.mobileNumber) {
            errors.mobileNumber = "Mobile number is required";
          } else if (values.mobileNumber.length !== 10) {
            errors.mobileNumber = "Mobile number is should have length of 10";
          } else if (values.mobileNumber.match("^[6-9]d{9}$")) {
            errors.mobileNumber = "Enter valid mobile number";
          }

          // if (!values.emailID) {
          //   errors.emailID = "Email ID is required";
          // } else if (values.emailID.type !== "email") {
          //   errors.emailID = "Enter valid email address";
          // } else if (
          //   values.emailID.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
          // ) {
          //   errors.emailID = "Enter Valid Email address";
          // }

          if (!values.age) {
            errors.age = "Age is required";
          } else if (values.age.maximum < 100) {
            errors.age = "Age should be less than 100";
          }
          return errors;
        }}
      >
        {({ values, handleSubmit, handleChange, touched, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                ></input>
                {errors.username ? <div>{errors.username}</div> : ""}
              </div>
              <div className="field">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  onChange={handleChange}
                ></input>
                {errors.mobileNumber ? <div>{errors.mobileNumber}</div> : ""}
              </div>
              <div className="field">
                <label htmlFor="emailId">Email ID</label>
                <input
                  type="text"
                  name="emailId"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="field">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" onChange={handleChange}></input>
              </div>
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
