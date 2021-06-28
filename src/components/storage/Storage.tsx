import s from './Storage.module.scss'
import Button from '../../ui/button/Button';


type StoragePropsType = {
  setToLocalStorageHandler: () => void
}

export const Storage = (props: StoragePropsType) => {


  return (
    <div className={s.storage_wrapper}>
      <div className={s.storage_form}>
        <label
          htmlFor="maxValue">Max value</label>
        <input
          type="text" name="" id="maxvalue"/>
        <label
          htmlFor="startValue">Start value</label>
        <input
          type="text" name="" id="startValue"/>
        <Button
          title={'Set Value'}
          callBack={props.setToLocalStorageHandler}
        />
      </div>
    </div>
  );
};

