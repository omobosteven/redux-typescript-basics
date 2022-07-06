import { Provider } from "react-redux";
import { store } from "state";

import RepositoriesList from "components/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search for a Package</h1>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
