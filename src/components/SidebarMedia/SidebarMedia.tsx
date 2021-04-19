import React from "react";
import {
  CustomTheme,
  themedStyled,
  useThemedStyletron,
} from "../../settings/theme";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const Wrapper = themedStyled("div", {
  position: "relative",
  padding: "3vw",
});

export const SidebarMedia = () => {
  const [css] = useThemedStyletron();
  return (
    <Wrapper>
      <img src="https://source.unsplash.com/-NjWIMfTIqI/1000x1500" />

      <Button
        kind="tertiary"
        endEnhancer={<FontAwesomeIcon icon={faFilePdf} size="2x" />}
        $style={{
          position: "absolute",
          right: "10px",
          bottom: "10px",
        }}
      >
        Download CV
      </Button>
    </Wrapper>
  );
};
