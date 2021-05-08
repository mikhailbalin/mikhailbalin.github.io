import React from "react";
import { Link } from "../../../components/Link";
import { navLinks } from "../../../constants";
import { Root, Links } from "./Footer.styles";

export const Footer = () => {
  return (
    <Root>
      <Links>
        {Object.entries(navLinks).map(([link, name]) => (
          <Link
            key={name}
            to={link}
            linkStyle={{
              marginTop: "6px",
              marginRight: "24px",
              marginBottom: "6px",
              paddingTop: "2px",
              paddingBottom: "2px",
            }}
          >
            {name}
          </Link>
        ))}
      </Links>
    </Root>
  );
};
