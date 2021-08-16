import { Provider } from "react-redux";
import TicTacToe from "./TicTacToe";
import {store} from "./auxiliar/store";

function App() {
  return (
    <Provider store={store}>
      <TicTacToe/>
    </Provider>
  );
}

export default App;
