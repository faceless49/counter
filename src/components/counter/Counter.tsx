import s from './Counter.module.scss'
import {CounterValueType} from '../../App';
import {Button} from '../../ui/button/Button';
import {useEffect, useState} from 'react';

export type CounterPropsType = {
  counterValue: CounterValueType
  incValue: () => void
  resetValue: () => void
  minValue: number
  maxValue: number
  error: boolean
}


const Counter = (props: CounterPropsType) => {


  const [value, incValue, resetValue] = [props.counterValue, props.incValue, props.resetValue]

  // Local state for errormessage
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Tracking error
  useEffect(() => {
    if(props.minValue < props.maxValue) {
      setErrorMessage(`enter values and press "set"`)
    } else if(props.minValue >= props.maxValue) {
      setErrorMessage('max value !<= min value')
    }
  }, [props.error, props.maxValue, props.minValue])


  return (
    <div className={s.counter}>
      <h1 className={s.title}>Click Counter</h1>
      <div className={s.counter_wrapper}>
        <div className={s.value + ` ${value === props.maxValue ? s.maxvalue : ''}`}>
          {props.error ? <span className={s.error}>{errorMessage}</span> : value}
        </div>
        <div className={s.button_wrapper}>
          <Button
            title={'inc'}
            callBack={incValue}
            disableBtn={props.maxValue === props.counterValue}
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