import React from "react";
import { useWindowSize } from "react-use";
import { CareerBlock } from "../../components/CareerBlock/CareerBlock";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/styled";
import { Career } from "./Experinece.styles";

const jobs = [
  {
    dates: "2009 - 2010",
    name: "Marco Interactive",
    description:
      "At magnum periculum adiit in quo enim inter argumentum conclusionemque rationis et dolorum. Censes aut reiciendis voluptatibus maiores alias consequatur. Ut placet inquam tum dicere exorsus est et dolore disputandum putant sed ut alterum aspernandum sentiamus alii autem quibus ego assentior cum teneam sententiam quid sit. Censes aut reiciendis voluptatibus maiores alias consequatur. Alii autem, quibus ego cum memoriter, tum etiam ac ratione intellegi posse et. Et quidem faciunt, ut de homine sensibus reliqui nihil est, omnis iste natus.",
    position: "Internship",
  },
  {
    dates: "2010 - 2011",
    name: "DIGEST CORP.",
    description:
      "At magnum periculum adiit in quo enim inter argumentum conclusionemque rationis et dolorum. Censes aut reiciendis voluptatibus maiores alias consequatur.",
    position: "Junior Designer",
  },
  {
    dates: "2010 - 2011",
    name: "MyTona",
    description:
      "At magnum periculum adiit in quo enim inter argumentum conclusionemque rationis et dolorum. Censes aut reiciendis voluptatibus maiores alias consequatur.",
    position: "Junior Designer",
  },
];
/**
 * 0 1
 * 2
 */
export const Experinece = () => {
  const { height } = useWindowSize();

  return (
    <Section>
      <SectionTitle title="Experinece" />

      <Career>
        {jobs.map((job, index) => (
          <CareerBlock
            key={job.name}
            {...job}
            threshold={height / 2}
            indicatorVisible={index + 1 < jobs.length}
          />
        ))}
      </Career>
    </Section>
  );
};
