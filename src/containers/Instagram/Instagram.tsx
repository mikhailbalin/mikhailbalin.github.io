import React, { useEffect } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/styled";
import { InstagramFeed, useGlobalState } from "../../hooks/useState";
import { themedStyled } from "../../settings/theme";

const InstagramPhotos = themedStyled("div", ({ $theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridColumnGap: "8px",
}));

export const Instagram = () => {
  const { instagramFeed, setInstagramFeed } = useGlobalState();

  useEffect(() => {
    if (instagramFeed) return;

    fetch(
      `https://v1.nocodeapi.com/mikhailbalin/instagram/HjKwtFsqTYpEWgdW?limit=4`
    )
      .then((response) => response.json())
      .then((resultData: InstagramFeed) => {
        setInstagramFeed(resultData);
      });
  }, []);

  return (
    <Section>
      <SectionTitle title="Instagram" />

      <InstagramPhotos>
        {instagramFeed?.data.map((post) => (
          <a key={post.id}>
            <img src={post.media_url} alt="" />
          </a>
        ))}
      </InstagramPhotos>
    </Section>
  );
};
