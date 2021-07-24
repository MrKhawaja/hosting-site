import React from "react";
import { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

import { recaptchaKey, register } from "../methods/user";

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().max(50, "Too Long!").required("Required"),
  last_name: Yup.string().max(50, "Too Long!").required("Required"),
  username: Yup.string().max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").max(255).required("Required"),
  password: Yup.string()
    .min(8, "Has to be Atleast 8 Characters")
    .max(1024, "Max 1024 Char")
    .required("Required"),
});
const recaptchaRef = React.createRef();

class Register extends Component {
  handleVerify = (token) => {
    this.setState({ recaptcha: token });
  };
  state = {
    registered: false,
    recaptcha: "",
  };

  render() {
    return (
      <>
        <div
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          className="container"
        >
          <div className="form">
            {this.state.registered && (
              <h1
                style={{
                  color: "#6cff00",
                  textAlign: "center",
                  padding: "1em",
                  fontSize: "3rem",
                }}
              >
                Successfully
                <br /> Registered
              </h1>
            )}
            {!this.state.registered && (
              <>
                <h1>Register</h1>
                <Formik
                  initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    last_name: "",
                    first_name: "",
                  }}
                  validationSchema={RegisterSchema}
                  onSubmit={async (values, { setFieldError }) => {
                    if (this.state.recaptcha == "")
                      return setFieldError("username", "Complete Captcha");
                    const response = await register({
                      ...values,
                      recaptcha: this.state.recaptcha,
                    });
                    if (response == "OK") {
                      this.setState({ registered: true });
                    } else {
                      setFieldError("username", response);
                    }
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Field
                        placeholder="username"
                        className="form-input"
                        name="username"
                      />
                      {errors.username && touched.username ? (
                        <div className="form-error">{errors.username}</div>
                      ) : null}
                      <Field
                        placeholder="first name"
                        className="form-input"
                        name="first_name"
                      />
                      {errors.first_name && touched.first_name ? (
                        <div className="form-error">{errors.first_name}</div>
                      ) : null}
                      <Field
                        placeholder="last name"
                        className="form-input"
                        name="last_name"
                      />
                      {errors.last_name && touched.last_name ? (
                        <div className="form-error">{errors.last_name}</div>
                      ) : null}
                      <Field
                        placeholder="email"
                        className="form-input"
                        name="email"
                        type="email"
                      />
                      {errors.email && touched.email ? (
                        <div className="form-error">{errors.email}</div>
                      ) : null}
                      <Field
                        placeholder="password"
                        className="form-input"
                        name="password"
                        type="password"
                      />
                      {errors.password && touched.password ? (
                        <div className="form-error">{errors.password}</div>
                      ) : null}
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={this.handleVerify}
                      />
                      <button className="btn btn-wide btn-black" type="submit">
                        Register
                      </button>
                    </Form>
                  )}
                </Formik>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Register;
