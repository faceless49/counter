import s from './Input.module.scss'
import {ChangeEvent, useState} from 'react';

type InputPropsType = {
  id: string
  htmlForm: string
  title: string
  type: string
}




export const Input = (props: InputPropsType) => {

  let [title, setTitle] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  // const onClickHandler = () => {
  //   if (title => 0) {
  //     props.callBack(title.trim())
  //     setTitle('')
  //     setError(null)
  //   } else {
  //     setError('Title is required')
  //   }
  // }
  return <form className={s.form}>
    <label className={s.form_label} htmlFor={props.htmlForm}>
      {props.title}
    </label>
    <input className={s.form_input} type={props.type}
      id={props.id} onChange={onChangeHandler}/>

  </form>
};

