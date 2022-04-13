import React from 'react'
import classes from './DashboardGrid.module.scss'

const DashboardGrid = (props) => {
  return <div className={classes.dashboardGrid}>{props.children}</div>
}

export default DashboardGrid
