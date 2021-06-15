import s from './Counter.module.scss'
import {CounterValueType} from '../App';
import Button from '../ui/button/Button';

export type CounterPropsType = {
  counterValue: CounterValueType
  incValue: () => void
  resetValue: () => void
}


const Counter = (props: CounterPropsType) => {


  return (
    <div className={s.counter}>
      <h1 className={s.title}>Click Counter</h1>
      <div className={s.counter_wrapper}>
        <span className={s.value}>
          {props.counterValue}
        </span>
        <div className={s.button_wrapper}>
          <Button
            title={'inc'}
            callBack={() => props.incValue()}
            disableBtn={props.counterValue === 5}


          />
          <Button
            title={'reset'}
            callBack={() => props.resetValue()}
            disableBtn={props.counterValue === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;