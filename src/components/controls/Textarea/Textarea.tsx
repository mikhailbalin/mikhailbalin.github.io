import React from "react";
import { FormControl } from "baseui/form-control";
import { Textarea } from "baseui/textarea";
import { useField } from "formik";
import { Theme } from "baseui/theme";
import { BaseInputOverrides, BaseInputProps, SharedProps } from "baseui/input";
import { getBorder } from "../utils/getBorder";
import { getLabelStyles } from "../utils/getLabelStyles";

interface MyTextareaProps
  extends Pick<BaseInputProps<HTMLTextAreaElement>, "placeholder"> {
  label: string;
  name: string;
  caption?: string;
}

export const MyTextarea = ({
  label,
  name,
  caption,
  placeholder,
}: MyTextareaProps) => {
  const [field, meta] = useField<string>(name);
  const error = meta.touched && meta.error;

  return (
    <FormControl
      htmlFor={name}
      label={label}
      caption={caption}
      error={error}
      overrides={{
        Label: {
          style: getLabelStyles,
        },
      }}
    >
      <Textarea
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
        error={!!error}
        placeholder={placeholder}
        overrides={
          {
            Root: {
              style: ({
                $isFocused,
                $disabled,
                $error,
                $theme: { colors },
              }: { $theme: Theme } & React.PropsWithChildren<SharedProps>) => ({
                ...getBorder({ $isFocused, $disabled, $error, colors }),
              }),
            },
          } as BaseInputOverrides<SharedProps>
        }
      />
    </FormControl>
  );
};
