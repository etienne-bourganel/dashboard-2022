import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <div onClick={props.onClick} className={classes.Button}>
      {props.children}
    </div>
  )
}

export default Button
