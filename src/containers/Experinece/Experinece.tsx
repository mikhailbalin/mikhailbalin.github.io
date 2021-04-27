import React from "react";
import { CareerBlock } from "../../components/CareerBlock/CareerBlock";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/styled";
import { Career } from "./Experinece.styles";

const jobs = [
  {
    dates: "2009 - 2010",
    name: "Marco Interactive",
    description:
      "At magnum periculum adiit in quo enim inter argumentum conclusionemque rationis et dolorum. Censes aut reiciendis voluptatibus maiores alias consequatur.",
    position: "Internship",
  },
  {
    dates: "2010 - 2011",
    name: "DIGEST CORP.",
    description:
      "At magnum periculum adiit in quo enim inter argumentum conclusionemque rationis et dolorum. Censes aut reiciendis voluptatibus maiores alias consequatur.",
    position: "Junior Designer",
  },
];

export const Experinece = () => {
  return (
    <Section>
      <SectionTitle title="Experinece" />

      <Career>
        {jobs.map((job) => (
          <CareerBlock key={job.name} {...job} />
        ))}
      </Career>
    </Section>
  );
};
