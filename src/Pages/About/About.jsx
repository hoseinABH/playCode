import React from 'react';
import { useCountState } from '../../Providers/CountProvider';

const About = () => {
  const count = useCountState();
  return <div>The count is {count}</div>;
};

export default About;
