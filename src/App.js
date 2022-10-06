import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/features/counter/counterSlice";
import {
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useRemoveTodoMutation,
} from "./store/features/apis";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  // const { data } = useGetTodosQuery();
  const { data, isLoading } = useGetTodoQuery({ id: 157 });
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [removeTodo] = useRemoveTodoMutation();

  const add = async () => {
    const newData = await addTodo({
      userId: 1,
      title: "i dont know",
      completed: false,
    }).unwrap();
    console.log("newData", newData);
  };
  const update = async () => {
    const updatedData = await updateTodo({
      id: 200,
      userId: 1,
      title: "i dont know",
      completed: false,
    }).unwrap();
    console.log("updatedData", updatedData);
  };
  const remove = async () => {
    const removedData = await removeTodo({
      id: 199,
    }).unwrap();
    console.log("removedData", removedData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isLoading && <p>{data.title}</p>}
        <p>{counter}</p>

        <button onClick={() => dispatch(decrement())}>DECREASE</button>
        <button onClick={() => dispatch(increment())}>INCREASE</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          INCREASE BY 10
        </button>
        <br />
        <button onClick={add}>ADD TODO</button>
        <button onClick={update}>UPDATE TODO</button>
        <button onClick={remove}>REMOVE TODO</button>
      </header>
    </div>
  );
}

export default App;
