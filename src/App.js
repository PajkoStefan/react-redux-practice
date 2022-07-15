import Counter from "./components/Counter/Counter";
import { Provider } from "react-redux";
import store from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
