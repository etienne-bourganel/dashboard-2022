import React from 'react'
import classes from './Selection.module.scss'

const Selection = (props) => {
  return <div className={classes.selection}>{props.children}</div>
}

export default Selection
