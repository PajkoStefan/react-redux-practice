import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "../../store/actions/cartActions";

import Cart from "../Cart/Cart";
import Layout from "../Layout/Layout";
import Products from "../Shop/Products";
import Notification from "../UI/Notification/Notification";

let isInitial = true;

const AppWrapper = () => {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};

export default AppWrapper;
