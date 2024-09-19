import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

/*
{ ...props.input with this type of tag it gives all the values inside props.input object whatever is passed as a key
value pair }

// htmlFor we used to associate the given label to the corresponding form element. It is done because:
// 1) For assistive technology or u can say the accessibility one, when we come on the form element it will
//    read the label also loud
// 2) When we even hits on the label the focus comes on input thus increasing the focus area
*/
