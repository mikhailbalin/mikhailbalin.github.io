import React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { useField } from "formik";

interface MyInputProps {
  label: string;
  name: string;
  caption?: string;
  type?: "email" | "number" | "search" | "text";
}

export const MyInput = ({
  label,
  name,
  caption,
  type = "text",
}: MyInputProps) => {
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
        type={type}
        placeholder="Your name"
        overrides={
          {
            // Input: {
            //   style: ({ $theme: { colors }, $isFocused }) => ({
            //     backgroundColor: $isFocused
            //       ? colors.primaryB
            //       : colors.backgroundSecondary,
            //   }),
            // },
            // Root: {
            //   style: ({ $isFocused, $theme: { colors } }) => {
            //     const border = $isFocused
            //       ? colors.primaryB
            //       : colors.backgroundSecondary;
            //     return {
            //       borderLeftColor: border,
            //       borderRightColor: border,
            //       borderTopColor: border,
            //       borderBottomColor: border,
            //     };
            //   },
            // },
          }
        }
      />
    </FormControl>
  );
};
