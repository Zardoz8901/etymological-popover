import React from "react";
import { css } from "@pigment-css/react";
import UseClick from "../../hooks/useClick";
import Popover from "../Popover/Popover";

const headerStyle = css({
  color: "black",
});

const paragraphStyle = css({
  zIndex: 1,
  isolation: "isolate",
  position: "relative",
  color: "black",
});

const paragraphText = [
  "Typography has evolved significantly over the centuries. From the early days of handwritten manuscripts to the advent of the printing press, the way we present text has undergone numerous transformations.",
  "In the digital age, typography continues to play a crucial role in design and communication. Modern tools and technologies have made it easier than ever to experiment with different fonts and styles.",
  "Understanding the history and principles of typography can greatly enhance one&apos;s ability to create visually appealing and effective designs.",
];
function renderParagraph() {
  const { clicked, handleClick, mousePosition } = UseClick();

  return (
    <>
      <h1 className={headerStyle}>The History of Typography</h1>
      {paragraphText.map((text, index) => {
        return (
          <div key={index}>
            <p className={paragraphStyle} onClick={handleClick}>
              {text}
            </p>
            {clicked && <Popover position={mousePosition} text={text} />}
          </div>
        );
      })}
    </>
  );
}

export default renderParagraph;
