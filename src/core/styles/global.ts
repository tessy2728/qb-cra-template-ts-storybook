import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: ${p => p.theme.text};
    background-color: ${p => p.theme.background};
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  
  .container {
    margin: 0 auto;
    max-width: 1440px;
  }
  
  .error {
    color:red;
    font-size: 14px;
  }
  
  .grid {
    display:grid;
    grid-gap: 1rem;
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
  
  .grid-cols-5 {
    grid-template-columns: repeat(5, 1fr);
  }

  .flex {
    display:flex;
  } 
  
  .flex-column {
    flex-direction: column;
  }

  .align-center, .items-center {
    align-items:center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .hidden {
    display:none;
  }
  
  .mr-[4px] {
    margin-right:4px;
  }
`;

export default {
  GlobalStyle,
};
