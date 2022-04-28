import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {inc, dec} from "./reduxXx";

function App() {
  const selector = useSelector(state => state.numberReducer)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch(inc(1))
  }
  const decrease = () => {
    dispatch(dec(1))
  }

  return (
    <div className="App">
      {selector}
      <button onClick={increase}>inc</button>
      <button onClick={decrease}>dec</button>
    </div>
  );
}

export default App;
