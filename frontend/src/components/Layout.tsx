import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter.var.woff2') format('woff2 supports variations'),
      url('/fonts/Inter.var.woff2') format('woff2-variations');
    font-weight: 100 900;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Roboto, Helvetica,
      Arial, sans-serif;
    font-weight: 400;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    -webkit-text-decoration: none;
    text-decoration: none;
  }

  .container {
    width: 90%;
    max-width: 1126px;
    margin: auto;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-weight: 500;
    color: #37383c;
    font-size: 32px;
  }

  p {
    color: #666;
    font-weight: 400;
  }

  ul {
    padding: 0;
  }

  ul li {
    list-style: none;
  }

  button,
  textarea,
  input {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Roboto, Helvetica,
      Arial, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    appearance: none;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
