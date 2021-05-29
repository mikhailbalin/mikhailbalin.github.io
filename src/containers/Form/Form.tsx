import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/controls/Input";
import { Textarea } from "../../components/controls/Textarea";
import { Select } from "../../components/controls/Select";
import { Button } from "../../components/Button";

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

export const Form = () => {
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
      <FormikForm>
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

        <Button type="submit">Submit Message</Button>
      </FormikForm>
    </Formik>
  );
};
