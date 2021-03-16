import React from "react";
import { FormControl, FormControlProps } from "baseui/form-control";
import { Input, InputProps } from "baseui/input";
import { useField } from "formik";
// import { Assign } from "utility-types";

export interface MyInputProps {
  label: string;
  name: string;
  caption?: string;
}

export const MyInput = ({ label, name, caption }: MyInputProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;

  return (
    // <>
    //   <label htmlFor={props.id || props.name}>{label}</label>
    //   <input className="text-input" {...field} {...props} />
    //   {meta.touched && meta.error ? (
    //     <div className="error">{meta.error}</div>
    //   ) : null}
    // </>
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
