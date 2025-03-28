import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --container-width: 800px;
    --header-height: 60px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    padding: 60px 0;
    /* Removed border-bottom */
  }

  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    section {
      padding: 40px 0;
    }
  }
`;

export default GlobalStyles;