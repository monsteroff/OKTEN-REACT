import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {inc, dec} from "./actions/userActions";

function App() {
  const selector = useSelector(state => state.numberReducer)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(inc(1))
  }

  const decrement = () => {
    dispatch(dec(1))
  }

  return (
    <div className="App">
      {selector}
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
}

export default App;
