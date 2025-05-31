import {increment, decrement, reset, incrementByAmount, decrementByAmount} from "./Store/Slice/sliceCounter.ts";
import "./Counter.css"
import type {RootState} from "./Store/Store.ts";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  /*const [count, setCount] = useState<number>(0)*/
  const count = useSelector((state:RootState)=>state.counter.counter
  )

  /*State change krnn action pass krnn ona method ek dispatch*/
  const dispatch = useDispatch();


  const getCountColor = (): string => {
    if (count > 0) return "positive"
    if (count < 0) return "negative"
    return "zero"
  }

  return (
    <div className='counter-container'>
      <div className='counter-card'>
        <h2 className='counter-title'>Counter App</h2>
        <div className='counter-display'>
          <span className={`counter-value ${getCountColor()}`}>{count}</span>
        </div>
        <div className='counter-buttons'>
          <button className='counter-btn decrement-btn' onClick= {() => dispatch(decrementByAmount(10))} type='button'>
            -
          </button>
          <button className='counter-btn reset-btn' onClick= {() => dispatch(reset())} type='button'>
            Reset
          </button>
          <button className='counter-btn increment-btn' onClick= {() => dispatch(incrementByAmount(10))} type='button'>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
