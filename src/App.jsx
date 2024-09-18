import { css } from "@pigment-css/react";
import { globalReset } from "./styles/reset";
import Popover from "./components/Popover/Popover";
globalReset;

const appStyle = css({
  backgroundColor: "inherit",
  minHeight: "100vh",
  width: "60vw",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "20px",
  gap: "20px",
});

const headerStyle = css({
  color: "black",
});

const paragraphStyle = css({
  color: "black",
});

function App() {
  return (
    <div className={appStyle}>
      <h1 className={headerStyle}>The History of Typography</h1>
      <p className={paragraphStyle}>
        Typography has evolved significantly over the centuries. From the early
        days of handwritten manuscripts to the advent of the printing press, the
        way we present text has undergone numerous transformations.
      </p>
      <Popover />
      <p className={paragraphStyle}>
        In the digital age, typography continues to play a crucial role in
        design and communication. Modern tools and technologies have made it
        easier than ever to experiment with different fonts and styles.
      </p>
      <p className={paragraphStyle}>
        Understanding the history and principles of typography can greatly
        enhance one&apos;s ability to create visually appealing and effective
        designs.
      </p>
    </div>
  );
}

export default App;
