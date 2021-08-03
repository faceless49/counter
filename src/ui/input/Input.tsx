import s from './Input.module.scss'
import {ChangeEvent, useState} from 'react';

type InputPropsType = {
  id: string
  htmlForm: string
  title: string
  type: string
  value: number
  callback: (e: any) => void
}


export const Input = (props: InputPropsType) => {

  let [value, setValue] = useState(12)


  return <form className={s.form}>
    <label className={s.form_label} htmlFor={props.htmlForm}>
      {props.title}
    </label>
    <input className={s.form_input} type={props.type}
      id={props.id} onChange={props.callback} value={props.value}/>
  </form>
};

