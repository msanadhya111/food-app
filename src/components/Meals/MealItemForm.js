import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const sumbitHandler = (event) => {
    event.preventDefault();
    const amountValue = amountInputRef.current.value; // This will always be a string if it is even passed as
    const amountIntegerValue = +amountValue; // input which will always be an integer
    if (
      amountValue.trim().length === 0 ||
      amountIntegerValue < 1 ||
      amountIntegerValue > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addItemsToCart(amountIntegerValue);
  };
  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Entered Amount is not valid</p>}
    </form>
  );
};

export default MealItemForm;
