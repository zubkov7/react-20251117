import { useCount } from "../counter/use-counter";
import { HeadphonesPage } from "../headphones-page/headphones-page";
import { Layout } from "../layout/layout";

export const App = () => {
  const { increment } = useCount();
  return (
    <Layout>
      <button onClick={increment}>increment</button>
      <HeadphonesPage title='headphones app' />
    </Layout>
  );
};
