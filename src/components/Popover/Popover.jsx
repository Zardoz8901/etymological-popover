import React from "react";
import { css } from "@pigment-css/react";

const popoverStyle = css({
  position: "relative",
  border: "2px solid black",
  padding: "10px",
  borderRadius: "2px",
});
const arrowStyle = css({
  position: "absolute",
  top: "-12px", // Positioned just above the popover border
  left: "50%",
  transform: "translateX(-50%)",
  width: "24px",
  height: "12px",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "16px",
    height: "16px",
    transform: "translateX(-50%) rotate(45deg)",
    top: "75%",
    left: "50%",
    border: "2px solid black",
    borderBottom: "none",
    borderRight: "none",
    backgroundColor: "lightyellow",
  },
});

function Popover() {
  const [popoverText, setPopoverText] = React.useState("");

  const text = "Hello World";

  return (
    <div className={popoverStyle}>
      <div className={arrowStyle} />
      {text}
      <p>{popoverText}</p>
    </div>
  );
}

export default Popover;
