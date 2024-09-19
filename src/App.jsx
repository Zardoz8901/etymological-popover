import { css } from "@pigment-css/react";
import { globalReset } from "./styles/reset";
import RenderParagraph from "./components/RenderParagraph/renderParagraph";

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

function App() {
  return (
    <div className={appStyle}>
      <RenderParagraph />
    </div>
  );
}

export default App;
