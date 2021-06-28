import s from './Button.module.scss'


export type ButtonPropsType = {
  title: string
  callBack?: () => void
  disableBtn?: boolean
}

export const Button = (props: ButtonPropsType) => {


  return (
    <button disabled={props.disableBtn}
            className={s.button}
            onClick={props.callBack}>
            <span>{props.title}</span>
    </button>
  )

};

