import { use } from "react";
import { AuthContext } from "../components/auth-context";

export function withAuthorized({ AuthorizedComponent, UnathorizedComponent }) {
  const Component = (...props) => {
    const { auth } = use(AuthContext);
    const { isAuthorized } = auth;

    if (!isAuthorized) {
      return UnathorizedComponent ? <UnathorizedComponent {...props} /> : null;
    }

    return <AuthorizedComponent {...props} />;
  };

  return Component;
}
