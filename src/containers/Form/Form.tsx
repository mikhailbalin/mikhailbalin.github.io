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
  { id: "1", budget: "$2000 - $5000" },
  { id: "2", budget: "$5000 - $10000" },
  { id: "3", budget: "$10000+" },
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
        <Input name="firstName" label="Name" placeholder="Your name" />

        <Input name="lastName" label="Last Name" placeholder="Your last name" />

        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Contact Email"
        />

        <Select
          label="Budget"
          name="budget"
          options={options}
          labelKey="budget"
          valueKey="id"
        />

        <Textarea
          name="message"
          label="Message"
          placeholder="Describe your project..."
        />

        <Button type="submit">Submit Message</Button>
      </FormikForm>
    </Formik>
  );
};
