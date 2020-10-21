import React from 'react';
import styled from 'styled-components';
import { Modal } from '../../components/Modal';
const Home = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  `;

  return (
    <Container>
      <Button onClick={openModal}>I'm a modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};

export default Home;
