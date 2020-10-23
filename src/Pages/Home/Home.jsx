import React from 'react';
import styled from 'styled-components';
import Counter from '../../components/Counter';
import DisplayCounter from '../../components/DisplayCounter';
import { Modal } from '../../components/Modal';
export const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;
const Home = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  console.log('<Home /> rendered');

  return (
    <Container>
      <DisplayCounter />
      <Counter />
      <Button onClick={openModal}>I'm a modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};

export default Home;
