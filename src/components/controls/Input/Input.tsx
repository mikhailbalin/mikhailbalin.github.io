import React from "react";
import { FormControl } from "baseui/form-control";
import { Input, BaseInputProps } from "baseui/input";
import { useField } from "formik";
import { getBorder } from "../utils/getBorder";
import { Theme } from "baseui/theme";
import { getLabelStyles } from "../utils/getLabelStyles";

interface MyInputProps
  extends Pick<BaseInputProps<HTMLInputElement>, "placeholder"> {
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
  placeholder,
}: MyInputProps) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;

  return (
    <FormControl
      htmlFor={name}
      label={label}
      caption={() => caption}
      error={error}
      overrides={{
        Label: {
          style: getLabelStyles,
        },
      }}
    >
      <Input
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
        error={!!error}
        type={type}
        placeholder={placeholder}
        overrides={{
          Root: {
            style: ({ $isFocused, $disabled, $error, $theme: { colors } }) => ({
              ...getBorder({ $isFocused, $disabled, $error, colors }),
            }),
          },
        }}
      />
    </FormControl>
  );
};
