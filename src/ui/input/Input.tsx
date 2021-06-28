import s from './Input.module.scss'

type InputPropsType = {
  id: string
  htmlForm: string
  title: string
}

export const Input = (props: InputPropsType) => {
  return <>
    <label htmlFor={props.htmlForm}>
      {props.title}
    </label>
    <input
      id={props.id}/>

  </>
};

