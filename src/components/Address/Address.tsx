import React from "react";
import { themedStyled } from "../../settings/theme";
import { StyledLink } from "baseui/link";
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

const Root = themedStyled("address", {
  padding: "2.5vw",
});

const ContactBlock = themedStyled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "13px",
  lineHeight: "20px",
});

const SocialBlock = themedStyled("address", {});

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
      <StyledLink href="mailto:m.balin@icloud.com?subject=Subject">
        m.balin@icloud.com
      </StyledLink>
    </ContactBlock>

    <ContactBlock>
      {useIcons ? (
        <FontAwesomeIcon icon={faPhoneSquareAlt} size="lg" />
      ) : (
        "Call me:"
      )}
      <StyledLink href="tel:+7 (931) 234-06-66">+7 (931) 234-06-66</StyledLink>
    </ContactBlock>

    <SocialBlock>
      <StyledLink href="#">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </StyledLink>

      <StyledLink href="#">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </StyledLink>

      <StyledLink href="#">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </StyledLink>

      <StyledLink href="#">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </StyledLink>

      <StyledLink href="#">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </StyledLink>
    </SocialBlock>
  </Root>
);
