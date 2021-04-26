import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "../Link";
import { ContactBlock, Root, SocialBlock, SocialLink } from "./Address.styles";

export interface AddressProps {
  useIcons?: boolean;
  showSocial?: boolean;
  size?: "default" | "small";
}

export const Address = ({
  useIcons = false,
  showSocial = false,
  size = "default",
}: AddressProps) => (
  <Root>
    <ContactBlock $size={size}>
      {useIcons ? <FontAwesomeIcon icon={faEnvelope} size="2x" /> : "Email me:"}
      <Link href="mailto:m.balin@icloud.com?subject=Subject" size={size}>
        m.balin@icloud.com
      </Link>
    </ContactBlock>

    <ContactBlock $size={size}>
      {useIcons ? <FontAwesomeIcon icon={faPhoneAlt} size="2x" /> : "Call me:"}
      <Link href="tel:+7 (931) 234-06-66" size={size}>
        +7 (931) 234-06-66
      </Link>
    </ContactBlock>

    {showSocial && (
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
    )}
  </Root>
);
