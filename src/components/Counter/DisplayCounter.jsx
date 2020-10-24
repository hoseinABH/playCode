import React from 'react';
import { useCountState } from '../../Providers/CountProvider';

const DisplayCounter = () => {
  const count = useCountState();
  console.log('<DisplayCounter /> rendered');
  return <div>The Current Count is {count}</div>;
};

export default DisplayCounter;
