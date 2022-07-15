import Cart from "../Cart/Cart";
import Layout from "../Layout/Layout";
import Products from "../Shop/Products";

const AppWrapper = () => {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default AppWrapper;
