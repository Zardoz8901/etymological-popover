import React from "react";
import { css } from "@pigment-css/react";

const popoverStyle = css({
  position: "absolute",
  border: "2px solid black",
  padding: "10px",
  borderRadius: "2px",
  backgroundColor: "mistyrose",
  isolation: "isolate",
  zIndex: 1,
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
    top: "50%",
    left: "50%",
    border: "2px solid black",
    borderBottom: "none",
    borderRight: "none",
    backgroundColor: "mistyrose",
  },
});

function Popover({ position, selectedWord }) {
  const [popoverText, setPopoverText] = React.useState("");
  const popoverRef = React.useRef(null);

  React.useEffect(() => {
    if (popoverRef.current) {
      const rect = popoverRef.current.getBoundingClientRect();
      popoverRef.current.style.left = `${position.x - rect.width / 2}px`;
      popoverRef.current.style.top = `${position.y + 12}px`;
    }
  }, [position]);

  return (
    <div ref={popoverRef} className={popoverStyle}>
      <div className={arrowStyle} />
      <p>{`${position.x},  ${position.y}`}</p>
    </div>
  );
}

export default Popover;
