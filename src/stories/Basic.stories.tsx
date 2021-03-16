import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default {
  title: "Controls/Formik",
} as Meta;

export const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
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
