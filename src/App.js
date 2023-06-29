import './App.css';
// import Navigation from './components/Navigation';
// import { Form, Button } from 'react-bootstrap';

import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);
  const toggle = useSelector((state) => state.toggle);

  const incrementHandler = () => {
    dispatch({ type: "add", val: 1, name: "inc1" });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: "add", val: 5, name: "inc5" });
  };

  const decrementHandler = () => {
    dispatch({ type: "remove", val: 1, name: "decr1" });
  };

  const decrementBy5Handler = () => {
    dispatch({ type: "remove", val: 5, name: "dec5" });
  };

  const toggler = () => {
    dispatch({ type: "toggle" });
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
          <h1>{name}</h1>
        </div>
      {/* } */}
      <button onClick={toggler}>toggle</button>
    </div>
    
  );
}

export default App;
