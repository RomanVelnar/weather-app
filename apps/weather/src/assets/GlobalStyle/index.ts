import { createGlobalStyle } from 'styled-components';
import * as themeConf from '../Theme';

export default createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    line-height: 1.5;
    tab-size: 4;
    scroll-behavior: smooth;
  }
  body {
    font-family: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,
  h2,
  p,
  pre {
    margin: 0;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
  }
  h1,
  h2 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  pre {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
  }
  svg {
    display: block;
    vertical-align: middle;
    shape-rendering: auto;
    text-rendering: optimizeLegibility;
  }
`;
