import React from "react";
import { Link } from "../../../components/Link";
import { navLinks } from "../../../constants";
import { useThemedStyletron } from "../../../settings/theme";
import { Root, Links, Legal, Divider } from "./Footer.styles";

export const Footer = () => {
  const [, theme] = useThemedStyletron();

  return (
    <Root>
      <Links>
        {Object.entries(navLinks).map(([link, name]) => (
          <Link
            key={name}
            to={link}
            linkStyle={{
              marginTop: theme.sizing.scale200,
              marginRight: theme.sizing.scale800,
              marginBottom: theme.sizing.scale200,
              paddingTop: theme.sizing.scale0,
              paddingBottom: theme.sizing.scale0,
              ...theme.typography.font160,

              [theme.mediaQuery.tablet]: {
                marginRight: theme.sizing.scale900,
                ...theme.typography.font260,
              },
            }}
          >
            {name}
          </Link>
        ))}
      </Links>

      <Legal>
        Created with 💙
        <Divider />
        <Link
          to={"/licensing"}
          linkStyle={{
            ...theme.typography.font50,
          }}
        >
          Licensing
        </Link>
      </Legal>
    </Root>
  );
};
