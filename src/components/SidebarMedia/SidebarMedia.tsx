import React from "react";
import { themedStyled } from "../../settings/theme";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const Wrapper = themedStyled("div", {
  position: "relative",
});

const ButtonWrapper = themedStyled("div", ({ $theme }) => ({
  position: "absolute",
  right: `-${$theme.sizing.scale800}`,
  bottom: $theme.sizing.scale800,
}));

export const SidebarMedia = () => {
  return (
    <Wrapper>
      <img src="https://source.unsplash.com/-NjWIMfTIqI/1000x1500" />

      <ButtonWrapper>
        <Button
          kind="tertiary"
          endEnhancer={<FontAwesomeIcon icon={faFilePdf} size="2x" />}
        >
          Download CV
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
