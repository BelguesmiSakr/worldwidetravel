import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement, reset } from "../store";

function Counter() {
  const dispatch = useDispatch();
  const count: number = useSelector(({ counter: { count } }) => count);

  const handelIncrement = () => dispatch(increment());
  const handelDecrement = () => dispatch(decrement());
  const handelReset = () => dispatch(reset());

  return (
    <div className="text-2xl p-5">
      <div className="">Counter Exemple</div>
      <div>{count}</div>
      <button className="px-4 bg-green-500 m-2" onClick={handelIncrement}>
        +
      </button>
      <button className="px-4 bg-red-500 m-2" onClick={handelDecrement}>
        -
      </button>
      <button className="px-4 bg-blue-500 m-2" onClick={handelReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
