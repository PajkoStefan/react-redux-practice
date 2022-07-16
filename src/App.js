import { Provider } from "react-redux";

import AppWrapper from "./components/AppWrapper/AppWrapper";

import store from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

export default App;
