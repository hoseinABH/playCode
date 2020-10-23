import React from 'react';

const CountContext = React.createContext();
const CountContextSetState = React.createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  return (
    <CountContext.Provider value={count}>
      <CountContextSetState.Provider value={setCount}>
        {children}
      </CountContextSetState.Provider>
    </CountContext.Provider>
  );
};

const useCountState = () => {
  return React.useContext(CountContext);
};
const useCountSetState = () => {
  return React.useContext(CountContextSetState);
};
const useCountActions = () => {
  const setCount = useCountSetState();
  const increament = () => setCount((prevCount) => prevCount + 1);
  return { increament };
};

export { useCountState, useCountSetState, useCountActions };
export default CountProvider;
