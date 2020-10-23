import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
  * {
    font-family: 'Sora', sans-serif;
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  ::selection{
    background:#3a3b3d;
    color:white
  }
`;

export default GlobalStyle;
