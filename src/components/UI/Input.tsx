import React from "react";
import classes from "./Input.module.scss";

const Input = React.forwardRef((props: any, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
