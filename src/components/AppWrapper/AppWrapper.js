import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import Layout from "../Layout/Layout";
import Products from "../Shop/Products";

const AppWrapper = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default AppWrapper;
