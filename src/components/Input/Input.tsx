import React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { useField } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  caption?: string;
}

export const CustomInput = ({ label, name, caption }: CustomInputProps) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;

  return (
    <FormControl
      htmlFor={name}
      label={label}
      caption={() => caption}
      error={error}
    >
      <Input
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
        error={!!error}
      />
    </FormControl>
  );
};
