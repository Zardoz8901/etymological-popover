import { css } from "@pigment-css/react";
import { globalReset } from "./styles/reset";

globalReset;

const headerStyle = css({
  color: "teal",
});

const paragraphStyle = css({
  color: "orange",
});

function App() {
  return (
    <div>
      <h1 className={headerStyle}>Test Heading</h1>
      <p className={paragraphStyle}>
        This is a test paragraph with some <strong>bold text</strong>.
      </p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      <button>Test Button</button>
    </div>
  );
}

export default App;
