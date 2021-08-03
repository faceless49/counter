import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.scss';
import Counter from './components/counter/Counter';
import {Storage} from './components/storage/Storage';


export type CounterValueType = number

function App() {

  let START_VALUE = 0
  let START_MIN_VALUE = 0;
  let START_MAX_VALUE = 5

  let [counterValue, setCounterValue] = useState<CounterValueType>(START_VALUE)
  let [minValue, setMinValue] = useState<CounterValueType>(START_MIN_VALUE)
  let [maxValue, setMaxValue] = useState<CounterValueType>(START_MAX_VALUE)

  let [error, setError] = useState<boolean>(false)



  // Max value useEffect

  useEffect(() => {
    let maxAsString = localStorage.getItem('maxValue')
    if (maxAsString) {
      let newMax = JSON.parse(maxAsString)
      setMaxValue(newMax)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])

  // Min value useEffect
  useEffect(() => {
    let minAsString = localStorage.getItem('minValue')
    if (minAsString) {
      let newMin = JSON.parse(minAsString)
      setMinValue(newMin)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
  }, [minValue])


  // Current Value useEffect

  useEffect(() => {
    let valueAsString = localStorage.getItem('currentValue')
    if (valueAsString) {
      let newCurrent = JSON.parse(valueAsString)
      setCounterValue(newCurrent)
    }
  }, []) // Run at once on start for getting local storage value

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(counterValue))
  }, [counterValue])

  // LOGIC

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value))
    setError(true)
  }
  const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.currentTarget.value))
    setError(true)
  }
  const incValue = () => {
    setCounterValue(counterValue + 1)
    localStorage.setItem('counterValue', JSON.stringify(counterValue))
  }
  const resetValue = () => {
    setCounterValue(0)
    setError(false)
  }


  //set counter to start with new values
  const setCounterToStart = () => {
    setCounterValue(minValue)
    setError(false)
  }

  // LocalStorage for Storage


  return (
    <div className={s.App}>
      <Storage
        minValue={minValue}
        maxValue={maxValue}
        onChangeMinValue={onChangeMinValue}
        onChangeMaxValue={onChangeMaxValue}
        setCounterToStart={setCounterToStart}
      />
      <Counter
        error={error}
        counterValue={counterValue}
        incValue={incValue}
        resetValue={resetValue}
        minValue={minValue}
        maxValue={maxValue}
      />
    </div>
  );
}

export default App;
