import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import Counter from './components/counter/Counter';
import {Storage} from './components/storage/Storage';


export type CounterValueType = number

function App() {

  const START_VALUE = 0

  let [counterValue, setCounterValue] = useState<CounterValueType>(START_VALUE)

  const incValue = () => {
    setCounterValue(counterValue + 1)
    localStorage.setItem('counterValue', JSON.stringify(counterValue))
  }

  const resetValue = () => {
    setCounterValue(0)
  }
  const getFromLocalStorageHandler = () => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
      let numValue = JSON.parse(valueAsString)
      setCounterValue(numValue)
    }
  };


  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(counterValue))
  }, [counterValue])

  useEffect(() => {
    getFromLocalStorageHandler()
  }, []) // Run at once on start for getting local storage value

  const clearLocalStorageHandler = () => {
    localStorage.clear()
    setCounterValue(0)
  }
  const removeItemLocalStorageHandler = () => {
    localStorage.removeItem('counterValue + 1')
  }

  return (
    <div className={s.App}>
      <Storage
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
