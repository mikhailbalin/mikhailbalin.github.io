import * as React from "react";
import { FormControl } from "baseui/form-control";
import { OnChangeParams, Select, SelectProps } from "baseui/select";
import { useFormikContext } from "formik";

interface MySelectProps
  extends Pick<SelectProps, "options" | "labelKey" | "valueKey"> {
  label: string;
  name: string;
  caption?: string;
}

export const MySelect = ({
  label,
  name,
  caption,
  options,
  labelKey,
  valueKey,
}: MySelectProps) => {
  const { getFieldHelpers, getFieldProps, getFieldMeta } = useFormikContext();
  const { setValue } = getFieldHelpers(name);
  const field = getFieldProps(name);
  const meta = getFieldMeta(name);

  const error = meta.touched && meta.error;

  return (
    <FormControl htmlFor={name} label={label} caption={caption} error={error}>
      <Select
        id={field.name}
        onBlur={field.onBlur}
        onChange={(params: OnChangeParams) => {
          console.log({ params });
          setValue(params.value);
        }}
        value={field.value}
        options={options}
        labelKey={labelKey}
        valueKey={valueKey}
        error={!!error}
      />
    </FormControl>
  );
};
