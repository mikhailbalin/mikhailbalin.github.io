import React from "react";
import { FormControl } from "baseui/form-control";
import { Textarea } from "baseui/textarea";
import { useField } from "formik";

interface MyTextareaProps {
  label: string;
  name: string;
  caption?: string;
}

export const MyTextarea = ({ label, name, caption }: MyTextareaProps) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;

  return (
    <FormControl htmlFor={name} label={label} caption={caption} error={error}>
      <Textarea
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
        error={!!error}
      />
    </FormControl>
  );
};
