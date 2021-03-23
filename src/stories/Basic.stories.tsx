import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "../components/controls/Input";
import { Textarea } from "../components/controls/Textarea";
import { Select } from "../components/controls/Select";

export default {
  title: "Controls/Formik",
} as Meta;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  colors: [],
};

const options = [
  { id: "red", color: "Red" },
  { id: "green", color: "Green" },
  { id: "blue", color: "Blue" },
];

export const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        colors: Yup.array().max(1).required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Input name="firstName" label="First Name" />
        <Input name="lastName" label="Last Name" />
        <Input name="email" label="Email Address" type="email" />
        <Textarea name="message" label="Message" />

        <Select
          label="Colors"
          name="colors"
          options={options}
          labelKey="color"
          valueKey="id"
        />

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
