import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

const items = [1, 2, 3, 4, 5];

// reactRoot.render(
//   createElement(
//     "ul",
//     {
//       style: { color: "red" },
//       className: "some-class another-class",
//       onClick: () => {
//         console.log("click");
//       },
//     },
//     items.map((item) => createElement("li", {}, item))
//   )
// );

console.log(reactRoot);

reactRoot.render(
  <ul className='some-class another-class' style={{ color: "red" }}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
