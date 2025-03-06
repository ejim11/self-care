import React from "react";

const PromptVideo = () => {
  return (
    <video
      width="1200"
      height="740"
      className="w-full "
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="home.mp4" type="video/mp4" />
    </video>
  );
};

export default PromptVideo;
