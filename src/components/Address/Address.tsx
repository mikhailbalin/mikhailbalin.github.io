import React from "react";
import {
  CustomTheme,
  themedStyled,
  themedWithStyle,
} from "../../settings/theme";
import { LinkProps, StyledLink } from "baseui/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "../Link";
import { StyletronComponent } from "styletron-react";

const Root = themedStyled("address", {
  padding: "2.5vw",
});

const ContactBlock = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: $theme.sizing.scale300,
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale300,
  color: $theme.colors.primaryA,
  ...$theme.typography.font150,
}));

const SocialBlock = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  marginTop: $theme.sizing.scale850,
}));

const SocialLink = themedWithStyle<
  StyletronComponent<LinkProps>,
  { $theme?: CustomTheme }
>(StyledLink, ({ $theme }) => ({
  display: "block",
  marginRight: $theme.sizing.scale700,
  transitionProperty: "transform",
  transitionDuration: $theme.animation.timing400,
  transitionTimingFunction: $theme.animation.easeInOutCurve,

  ":hover": {
    color: $theme.colors.primaryA,
    transform: "scale(1.2)",
  },
}));

export interface AddressProps {
  useIcons?: boolean;
}

export const Address = ({ useIcons = false }: AddressProps) => (
  <Root>
    <ContactBlock>
      {useIcons ? (
        <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
      ) : (
        "Email me:"
      )}
      <Link href="mailto:m.balin@icloud.com?subject=Subject" size="small">
        m.balin@icloud.com
      </Link>
    </ContactBlock>

    <ContactBlock>
      {useIcons ? (
        <FontAwesomeIcon icon={faPhoneSquareAlt} size="lg" />
      ) : (
        "Call me:"
      )}
      <Link href="tel:+7 (931) 234-06-66" size="small">
        +7 (931) 234-06-66
      </Link>
    </ContactBlock>

    <SocialBlock>
      <SocialLink href="#">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </SocialLink>

      <SocialLink href="#">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </SocialLink>

      <SocialLink href="#">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </SocialLink>

      <SocialLink href="#">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </SocialLink>

      <SocialLink href="#">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </SocialLink>
    </SocialBlock>
  </Root>
);
