import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import Wrapper from './hoc/Wrapper';
function App() {
  return (
    <Wrapper>
    <Provider store={store}>
    <div className="App">
      
    </div>
    </Provider>
    </Wrapper>
  );
}

export default App;
