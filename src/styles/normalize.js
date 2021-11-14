import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    margin: 0;
    font-size: ${({ rwdVersion }) => (rwdVersion ? '20px' : '16px')};
    font-family: ${({ rwdVersion }) =>
      rwdVersion ? "'Circe', sans-serif" : "'Circe', sans-serif"};
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    iframe {
      border: 0;
    }
    font-family: 'Circe';
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a, input, button, textarea {
    &:active, &:hover, &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    background-color: transparent;
    transition: color 0.2s ease-in-out;
    &:hover {
    }
  }

  input:-webkit-autofill {
    background-color: unset;
  }
  input::-ms-clear, input::-ms-reveal {
    display: none;
  }
  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: 500;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 2em;
  }

  mark {
    color: #000;
    background: #ff0;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  img {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  pre {
    overflow: auto;
  }


  code,
  kbd,
  pre,
  samp {
    font-size: 1em;
    font-family: monospace;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    color: inherit;
    font: inherit;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
    appearance: button;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  input {
    line-height: normal;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  input[type="search"] {
    box-sizing: content-box;
    appearance: textfield;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  fieldset {
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
    border: 1px solid #c0c0c0;
  }

  legend {
    padding: 0;
    border: 0;
  }

  textarea {
    overflow: auto;
  }

  optgroup {
    font-weight: 500;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  #modal-root {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
  }

  .react-viewer-btn {
    line-height: 26px !important;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
  }

  ${({ rwdVersion }) =>
    rwdVersion &&
    `
    .react-viewer {
      position: absolute;
      z-index: 12001;

      .react-viewer-toolbar {
        height: 30px;
      }
  `};

  ${({ rwdVersion }) =>
    !rwdVersion &&
    `
    .react-viewer-mask {
      background-color: rgba(0, 0, 0, 0.7) !important;
    }

    .react-viewer-close {
      border-radius: 0 !important;

      .react-viewer-icon {
        top: 7px !important;
        left: 13px !important;
      }
    }
  `};
`;

export default GlobalStyle;
