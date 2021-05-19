import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/styled";
import { Form } from "../Form";

export const ContactMe = () => {
  return (
    <Section>
      <SectionTitle title="Let's work together" />

      <Form />
    </Section>
  );
};
