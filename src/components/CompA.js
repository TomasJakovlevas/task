import React, { useContext } from 'react';
// import Button from './Button/Button';
import CompA1 from './CompA1';
import { ButtonContext } from '../App';

const CompA = () => {
  // Hooks
  // --state
  // ----global
  const buttonContext = useContext(ButtonContext);
  const { dispatch } = buttonContext;

  const clickHandler = (e) => {
    dispatch({ content: e.target.value });
  };

  return (
    <div>
      <CompA1 />
      {/* <Button text='Post' />
      <Button text='Comments' />
      <Button text='Todos' /> */}
      <button onClick={clickHandler} value={'posts'}>
        Ronaldo to united
      </button>
    </div>
  );
};

export default CompA;
