import { useState } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isEmpty = enteredInput.trim().length === 0;
  const isValid = isEmpty && isInputTouched;
  let isFormValid = false;
  if(enteredInput){
    isFormValid = true;
  }

  const inputChangeHandler = event => {
    setEnteredInput(event.target.value);
  }
  
  const inputBlurHandler = () => {
   setIsInputTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setIsInputTouched(true);
    if (isEmpty) {
      return;
    }
    props.onEnterTask(enteredInput);
      // console.log(enteredInput);
    // taskInputRef.current.value = '';  // Not recommended because it's directly manipulating DOM
    setEnteredInput('');
    setIsInputTouched(false);
  };
  const formClasses = isValid? `${classes.form} invalid`: `${classes.form}`;

  return (
    <form className={formClasses} onSubmit={submitHandler}>
      <div className={classes['control-group']}>
        <input type='text' onChange={inputChangeHandler} onBlur = {inputBlurHandler} value={enteredInput}/>
        {isValid && <p className={classes['error-text']}>Your Input is Empty</p>}
      </div>
      <button disabled={!isFormValid}>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
