import Giscus from "@giscus/react";
import React from "react";

export default function GiscusMain() {
  return (
    <Giscus
      id="comments"
      repo="TinkeringButReallyPlayingWithFire/s-mart_remastered"
      repoId="R_kgDOHMiv_A"
      category="Announcements"
      categoryId="DIC_kwDOHMiv_M4COxZ_"
      mapping="https://github.com/TinkeringButReallyPlayingWithFire/s-mart_remastered/discussions/1"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
