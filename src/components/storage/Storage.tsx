import s from './Storage.module.scss'
import {Button} from '../../ui/button/Button';
import {Input} from '../../ui/input/Input';
import {ChangeEvent} from 'react';


type StoragePropsType = {
  minValue: number
  maxValue: number
  onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  setCounterToStart: () => void
}

export const Storage = (props: StoragePropsType) => {


  return (
    <div className={s.storage_wrapper}>
      <div className={s.storage_form}>
        <Input id={'maxValue'} htmlForm={'maxValue'} title={'Max value'} type={'number'} value={props.maxValue}
               callback={props.onChangeMaxValue}/>
        <Input id={'minValue'} htmlForm={'minValue'} title={'Start Value'} type={'number'} value={props.minValue}
               callback={props.onChangeMinValue}/>
        <Button
          title={'Set Value'}
          callBack={props.setCounterToStart}
          disableBtn={props.minValue < 0}
        />
      </div>
    </div>
  );
};

