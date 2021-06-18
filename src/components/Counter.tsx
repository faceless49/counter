import s from './Counter.module.scss'
import {CounterValueType} from '../App';
import Button from '../ui/button/Button';

export type CounterPropsType = {
  counterValue: CounterValueType
  incValue: () => void
  resetValue: () => void
}


const Counter = (props: CounterPropsType) => {


  const [value, incValue, resetValue] = [props.counterValue, props.incValue, props.resetValue]

  return (
    <div className={s.counter}>
      <h1 className={s.title}>Click Counter</h1>
      <div className={s.counter_wrapper}>
        <span className={s.value + ` ${value === 5 ? s.maxvalue : ''}`}>
          {value}
        </span>
        <div className={s.button_wrapper}>
          <Button
            title={'inc'}
            callBack={incValue}
            disableBtn={value === 5}
          />
          <Button
            title={'reset'}
            callBack={resetValue}
            disableBtn={value === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;