import './App.css';
// import Navigation from './components/Navigation';
// import { Form, Button } from 'react-bootstrap';

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from './store/CounterSlice';
import { togglerActions } from './store/TogglerSlice';

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.counter);
  // const name = useSelector((state) => state.name);
  const toggle = useSelector((state) => state.toggle.toggle);

  const incrementHandler = () => {
    // dispatch({ type: "add", val: 1, name: "inc1" });
    dispatch(counterActions.increment(1))
  };

  const incrementBy5Handler = () => {
    // dispatch({ type: "add", val: 5, name: "inc5" });
    dispatch(counterActions.increment(5))
  };

  const decrementHandler = () => {
    // dispatch({ type: "remove", val: 1, name: "decr1" });
    dispatch(counterActions.decrement(1));
  };

  const decrementBy5Handler = () => {
    // dispatch({ type: "remove", val: 5, name: "dec5" });
    dispatch(counterActions.decrement(5));
  };

  const toggler = () => {
    // dispatch({ type: "toggle" });
    dispatch(togglerActions.togglerHandle())
  };

  return (
    <div>
      <h2>count : {count}</h2>
      {/* {toggle &&  */}
        <div  >
          <button className={toggle ? "beforeClicked" : "afterClicked"} onClick={incrementHandler}>increment</button>
          <button className={toggle ? "beforeClicked" : "afterClicked"} onClick={decrementHandler}>decrement</button>
          <button className={toggle ? "beforeClicked" : "afterClicked"} onClick={incrementBy5Handler}>increment by 5</button>
          <button className={toggle ? "beforeClicked" : "afterClicked"} onClick={decrementBy5Handler}>decrement by 5</button>
          {/* <h1>{name}</h1> */}
        </div>
      {/* } */}
      <button onClick={toggler}>toggle</button>
    </div>
    
  );
}

export default App;
