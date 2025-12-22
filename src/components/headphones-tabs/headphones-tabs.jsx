import { TabLink } from "../tab-link/tab-link";
import { Tabs } from "../tabs/tabs";

export const HeadphonesTabs = ({ headphones }) => {
  return (
    <Tabs>
      {headphones.map(({ name, id }) => (
        <TabLink to={id} key={id}>
          {name}
        </TabLink>
      ))}
    </Tabs>
  );
};
