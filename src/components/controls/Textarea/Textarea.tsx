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
  const [field, meta] = useField<string>(name);
  const error = meta.touched && meta.error;

  return (
    <FormControl htmlFor={name} label={label} caption={caption} error={error}>
      <Textarea
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
        error={!!error}
        placeholder="Describe your project..."
        overrides={
          {
            InputContainer: {
              style: ({ $theme: { colors }, $isFocused }: any) => ({
                backgroundColor: $isFocused
                  ? colors.primaryB
                  : colors.backgroundSecondary,
              }),
            },
            Root: {
              style: ({ $isFocused, $theme: { colors } }: any) => {
                const border = $isFocused
                  ? colors.primaryB
                  : colors.backgroundSecondary;

                return {
                  borderLeftColor: border,
                  borderRightColor: border,
                  borderTopColor: border,
                  borderBottomColor: border,
                };
              },
            },
          } as any
        }
      />
    </FormControl>
  );
};
