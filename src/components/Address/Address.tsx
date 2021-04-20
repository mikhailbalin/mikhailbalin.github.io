import React from "react";
import { themedStyled } from "../../settings/theme";
import { StyledLink } from "baseui/link";

const Root = themedStyled("address", {
  padding: "2.5vw",
});

const ContactBlock = themedStyled("div", {
  fontSize: "13px",
  lineHeight: "20px",
});

export interface AddressProps {
  useIcons?: boolean;
}

export const Address = ({ useIcons = false }: AddressProps) => (
  <Root>
    <ContactBlock>
      Email me:{" "}
      <StyledLink href="mailto:m.balin@icloud.com?subject=Subject">
        m.balin@icloud.com
      </StyledLink>
    </ContactBlock>

    <ContactBlock>
      Call me:{" "}
      <StyledLink href="tel:+7 (931) 234-06-66">+7 (931) 234-06-66</StyledLink>
    </ContactBlock>
  </Root>
);
