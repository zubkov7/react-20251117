import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { use } from "react";
import { AuthContext } from "../auth-context";
import { TabLink } from "../tab-link/tab-link";
import { Tabs } from "../tabs/tabs";

export const Headphone = ({ name, brand, id }) => {
  const { auth } = use(AuthContext);

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {auth.isAuthorized && <HeadphoneCounter id={id} />}
      <Tabs>
        <TabLink to='reviews'>Reviews</TabLink>
        <TabLink to='codecs'>Codecs</TabLink>
      </Tabs>
    </section>
  );
};
