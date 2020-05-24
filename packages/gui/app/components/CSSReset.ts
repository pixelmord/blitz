import {createGlobalStyle} from 'styled-components'
import {theme} from 'utils/theme'

export const CSSReset = createGlobalStyle`
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    background-color: ${theme.snow.default};
    color: ${theme.grey.black};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
  }
  #__next {
    height: 100%;
    width: 100%;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
  textarea {
    resize: none;
  }
  ::-moz-selection {
    background: ${theme.purple.dark};
    color: ${theme.white};
  }
  ::selection {
    background: ${theme.purple.dark};
    color: ${theme.white};
  }
  ::-webkit-input-placeholder {
    color: ${theme.grey.silver};
  }
  :-moz-placeholder {
    color: ${theme.grey.silver};
    opacity: 1;
  }
  ::-moz-placeholder {
    color: ${theme.grey.silver};
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: ${theme.grey.silver};
  }
  .tippy-backdrop {
    background-color: ${theme.grey.black};
  }
`
