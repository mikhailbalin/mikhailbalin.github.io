import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
// import { Optional } from "utility-types";
import * as Yup from "yup";

export default {
  title: "Controls/Formik",
} as Meta;

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const SignupForm = () => {
  const formik = useFormik<Values>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export const Basic: Story = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {
      const errors: Record<string, string> = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);
