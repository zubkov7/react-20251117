import { Fragment } from "react";
import { headphones } from "../../constants/mock";
import { Reviews } from "../reviews/reviews";
import { Layout } from "../layout/layout";
import { HeadphoneListItem } from "../headphone/headphone";

export const App = ({ title }) => {
  return (
    <Layout sidebar={<div>SIDEBAR</div>}>
      <div>
        <h1>{title}</h1>
        <ol>
          {headphones.map((headphone) => (
            <HeadphoneListItem key={headphone.id} headphone={headphone} />
          ))}
        </ol>
      </div>
      <div>footer</div>
    </Layout>
  );
};
