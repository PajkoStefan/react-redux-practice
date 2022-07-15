import { Fragment } from "react";

import Header from "../Header/Header";
import Auth from "../Auth/Auth";
import UserProfile from "../UserProfile/UserProfile";
import Counter from "../Counter/Counter";
import { useSelector } from "react-redux";

const AppWrapper = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
};

export default AppWrapper;
