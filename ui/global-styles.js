import { createGlobalStyle } from 'styled-components';
// //////////////////////////////////////////////////

export default createGlobalStyle`
  body {
    font-family: Montserrat;

    a {
      text-decoration: none;
    }

    li {
      line-height: 1.5;
    }

    ul {
      padding-left: 1rem;
      margin-bottom: 1.5rem;
    }

  }
  * {
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    font-size: inherit;
    font-style: inherit;
    font-family: inherit;
    font-weight: inherit;
    box-sizing: border-box;
    background: transparent;
    vertical-align: baseline;
  }
`;
