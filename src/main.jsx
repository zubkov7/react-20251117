import { createRoot } from "react-dom/client";
import { headphones } from "./constants/mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    <h1>Headphones</h1>
    <ol>
      {headphones.map(({ name, id, reviews, codecs }) => (
        <li key={id}>
          <h2>{name}</h2>
          <h3>Reviews</h3>
          <ul>
            {reviews.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
          <h3>Codecs</h3>
          <ul>
            {codecs.map((codec) => (
              <li key={codec}>{codec}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </div>
);
