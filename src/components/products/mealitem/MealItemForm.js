import { useRef, useState } from 'react';
import Input from '../../ui/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [isValid,setIstValid] = useState(true);
  const amountInputRef = useRef();
  const sumbitHandler = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if(
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ){
      setIstValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNum)
  }
  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <Input
        ref={ amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
      {!isValid && <p>Please enter a vaild number</p>}
    </form>
  );
};

export default MealItemForm;