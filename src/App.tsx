import React, {useState} from 'react';
import s from './App.module.scss';
import Counter from './components/Counter';


export type CounterValueType = number

function App() {

  let [counterValue, setCounterValue] = useState<CounterValueType>(0)

  const incValue =  () => {
    let value = ++counterValue
    setCounterValue(value)
    console.log('hello')
  }

  const resetValue = () => {
    counterValue = 0
    setCounterValue(counterValue)
    console.log('bye')
  }

  return (
    <div className={s.App}>
      <Counter
        counterValue={counterValue}
        incValue={incValue}
        resetValue={resetValue}
      />
    </div>
  );
}

export default App;
