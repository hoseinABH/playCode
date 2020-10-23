import React from 'react';
import { Button } from '../Pages/Home/Home';
import { useCountActions } from '../Providers/CountProvider';

const Counter = () => {
  console.log('<Counter /> rendered');
  const { increament } = useCountActions();

  return <Button onClick={increament}>Increament Count</Button>;
};

export default Counter;
