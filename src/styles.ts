import {css} from 'lit';

export const styles = css`
  :host {
    display: inline-block;
    cursor: pointer;
    outline: none;
  }

  ::slotted(*) {
  }

  :host(.default) .simple-boost-button {
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
  :host(.default:hover) .simple-boost-button {
    color: #fff;
    background-color: #616467;
  }

  :host(.hey) .simple-boost-button {
    display: inline-block;
    outline: 0;
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 9px 22px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    line-height: normal;
    background: linear-gradient(90deg, #5522fa 0, #0074e4 100%);
    border-radius: 50px;
    transition: color 0.2s ease, background-color 0.2s ease,
      box-shadow 0.2s ease;
  }
  :host(.hey:hover) .simple-boost-button {
    box-shadow: 0 0 0 0.15rem #5ceace;
  }

  :host(.figma) .simple-boost-button {
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
  :host(.figma:hover) .simple-boost-button {
    transform: translateY(-2px);
  }

  :host(.figma-filled) .simple-boost-button {
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
  :host(.figma-filled:hover) .simple-boost-button {
    transform: translateY(-2px);
  }

  :host(.next) .simple-boost-button {
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
  :host(.next:hover) .simple-boost-button {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }

  :host(.next-filled) .simple-boost-button {
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
  :host(.next-filled:hover) .simple-boost-button {
    background: rgba(0, 118, 255, 0.9);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  :host(.bootstrap-filled) .simple-boost-button {
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
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  :host(.bootstrap-filled:hover) .simple-boost-button {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }

  :host(.bootstrap) .simple-boost-button {
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #0d6efd;
    border-color: #0d6efd;
  }
  :host(.bootstrap:hover) .simple-boost-button {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }

  :host(.gumroad) .simple-boost-button {
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
  :host(.gumroad:hover) .simple-boost-button {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px, -4px);
  }
  :host(.gumroad:focus-visible) .simple-boost-button {
    outline-offset: 1px;
  }

  :host(.spotify) .simple-boost-button {
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
    color: #fff;
    background-color: #15883e;
  }
  :host(.spotify:hover) .simple-boost-button {
    background-color: #1db954;
  }

  :host(.alby) .simple-boost-button {
    line-height: 1.75rem;
    display: inline-block;
    outline: none;
    cursor: pointer;
    border-radius: 500px;
    border: 1px solid transparent;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 900;
    text-align: center;
    padding: 1rem 2rem 1rem 2rem;
    color: #000;
    background-color: rgb(248, 196, 85);
    font-family: 'Catamaran', sans-serif;
  }

  :host > .simple-boost-icon {
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
  .inline {
    display: inline;
  }
`;
