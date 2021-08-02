import s from './Storage.module.scss'
import {Button} from '../../ui/button/Button';
import {Input} from '../../ui/input/Input';


export const Storage = () => {


  return (
    <div className={s.storage_wrapper}>
      <div className={s.storage_form}>
       <Input id={'maxValue'} htmlForm={'maxValue'} title={'Max value'} type={'number'}/>
       <Input id={'maxValue'} htmlForm={'startValue'} title={'Start Value'} type={'number'}/>
        <Button
          title={'Set Value'}
        />
      </div>
    </div>
  );
};

