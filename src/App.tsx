import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import Counter from './components/counter/Counter';
import {Storage} from './components/storage/Storage';


export type CounterValueType = number

function App() {

  const START_VALUE = 0

  let [counterValue, setCounterValue] = useState<CounterValueType>(START_VALUE)

  const incValue = () => {
    let value = ++counterValue
    setCounterValue(value)
  }

  const resetValue = () => {
    setCounterValue(0)
  }

  useEffect(() => {
    getFromLocalStorageHandler()
  }, [])
  useEffect(() => {
    setToLocalStorageHandler()
  }, [counterValue])

  const setToLocalStorageHandler = () => {
    localStorage.setItem('counterKey', JSON.stringify(counterValue))
  }
  const getFromLocalStorageHandler = () => {
    let valueAsString = localStorage.getItem('counterKey')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setCounterValue(newValue)
    }
  }


  return (
    <div className={s.App}>
      <Storage
        setToLocalStorageHandler={setToLocalStorageHandler}
      />
      <Counter
        counterValue={counterValue}
        incValue={incValue}
        resetValue={resetValue}
      />
    </div>
  );
}

export default App;
