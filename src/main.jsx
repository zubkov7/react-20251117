import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(<App title='Headphones' style={{}} isVisible />);

console.log(reactRoot);
