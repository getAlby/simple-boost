import { css } from 'lit';
export const styles = css `
  :host {
  }

  ::slotted(*) {
  }

  .simple-boost-button.default {
    display: inline-block;
    outline: none;
    cursor: pointer;
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color, border-color, color, box-shadow,
      filter;
    transition-duration: 0.3s;
    border: 1px solid transparent;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    padding: 16px 14px 18px;
    color: #616467;
    box-shadow: inset 0 0 0 2px #616467;
    background-color: transparent;
  }
  .simple-boost-button.default:hover {
    color: #fff;
    background-color: #616467;
  }

  .simple-boost-button.hey {
    display: inline-block;
    outline: 0;
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 9px 22px;
    font-size: 22px;
    height: 50px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    line-height: normal;
    background: linear-gradient(90deg, #5522fa 0, #0074e4 100%);
    border-radius: 50px;
    transition: color 0.2s ease, background-color 0.2s ease,
      box-shadow 0.2s ease;
  }
  .simple-boost-button.hey:hover {
    box-shadow: 0 0 0 0.15rem #5ceace;
  }

  .simple-boost-button.figma {
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-weight: 700;
    line-height: 1;
    transition: transform 200ms, background 200ms;
    background: transparent;
    color: #000000;
    box-shadow: 0 0 0 3px #000000 inset;
  }
  .simple-boost-button.figma:hover {
    transform: translateY(-2px);
  }

  .simple-boost-button.figma-filled {
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: #000000;
    color: #ffffff;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-weight: 700;
    line-height: 1;
    transition: transform 200ms, background 200ms;
  }
  .simple-boost-button.figma-filled:hover {
    transform: translateY(-2px);
  }

  .simple-boost-button.next {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0 56px;
    line-height: 45px;
    border-radius: 7px;
    font-weight: 400;
    background: #fff;
    color: #696969;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }
  .simple-boost-button.next:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }

  .simple-boost-button.next-filled {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    border: none;
    padding: 0 56px;
    line-height: 45px;
    border-radius: 7px;
    background-color: #0070f3;
    color: white;
    font-weight: 400;
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }
  .simple-boost-button.next-filled:hover {
    background: rgba(0, 118, 255, 0.9);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  .simple-boost-button.bootstrap-filled {
    cursor: pointer;
    outline: 0;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .simple-boost-button.bootstrap-filled:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  .simple-boost-button.bootstrap {
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #0d6efd;
    border-color: #0d6efd;
  }
  .simple-boost-button.bootstrap:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  .simple-boost-button.gumroad {
    outline: 0;
    grid-gap: 8px;
    align-items: center;
    background: 0 0;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    gap: 8px;
    justify-content: center;
    line-height: 1.5;
    overflow: hidden;
    padding: 12px 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: all 0.14s ease-out;
    white-space: nowrap;
  }
  .simple-boost-button.gumroad:hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px, -4px);
  }
  .simple-boost-button.gumroad:focus-visible {
    outline-offset: 1px;
  }

  .simple-boost-button > .simple-boost-icon {
    vertical-align: middle;
  }
  .simple-boost-icon-spin {
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear;
  }

  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .simple-boost-button,
  .simple-boost-button:active,
  .simple-boost-button:focus {
    outline: 0;
  }
  .simple-boost-button:not([disabled]):hover {
    text-decoration: none;
  }
  .simple-boost-button:not([disabled]):active {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .simple-boost-button.disabled,
  .simple-boost-button[disabled] {
    cursor: not-allowed;
  }
  .simple-boost-button.disabled > *,
  .simple-boost-button[disabled] > * {
    pointer-events: none;
  }
  .inline {
    display: inline;
  }
`;
//# sourceMappingURL=styles.js.map