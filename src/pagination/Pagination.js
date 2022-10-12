import React from "react";
import classes from './pagination.css'
const Pagination = (props) => (
    <div className={classes.Pagination}>
  <button className={classes.Btn} onClick={props.previous}>Previous</button>
  <button className={classes.Btn} onClick={props.next}>Next</button>
  </div>
);

export default Pagination;


