import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Wrapper from "./hoc/Wrapper";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <Provider store={store}>
        <Wrapper>
        <div className="App">
          <UsersPage/>
        </div>
        </Wrapper>
    </Provider>
  );
}

export default App;
