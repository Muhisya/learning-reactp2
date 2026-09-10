import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Example() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <div style={{ display: "flex", gap: "10px", flexDirection: "row",}}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Add 1
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Minus 1
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>
    </>
  );
}

// This code defines a simple counter application using the `useReducer` hook in React. The `counterReducer` function manages the state of the counter, handling both increment and decrement actions based on the action type dispatched. The `Example` component initializes the state with a count of 0 and provides buttons to increment or decrement the count, updating the state accordingly.
// 
// The `useReducer` hook is a powerful tool for managing complex state in React components, and the `counterReducer` function is a simple example of how to use it to manage a counter.
// Click Button
// dispatch()
// reducer
// state + 1
// action