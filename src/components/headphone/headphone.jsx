import { ReviewForm } from "../review-form/review-form";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { use } from "react";
import { AuthContext } from "../auth-context";
import { Tabs } from "../tabs/tabs";
import { TabLink } from "../tab-link/tab-link";
import { Outlet } from "react-router";

export const Headphone = ({ name, brand, id }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand - {brand}</h3>
      <Tabs>
        <TabLink to='reviews'>Reviews</TabLink>
        <TabLink to='codecs'>Codecs</TabLink>
      </Tabs>

      <Outlet />

      {isAuthorized && (
        <>
          <HeadphoneCounter headphoneId={id} />
          <ReviewForm />
        </>
      )}
    </section>
  );
};
