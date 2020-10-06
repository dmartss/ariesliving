import css from 'styled-jsx/css'

export default css`
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    padding: var(--gap-quarter) var(--gap-half);
    margin: calc(-1 * var(--gap-quarter)) calc(-1 * var(--gap-half));
    border-radius: var(--radius);
    background-color: var(--button-bg);
    border: 1px solid var(--button-border);
    color: var(--button-fg);
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    --button-fg: var(--accents-5);
    --button-bg: var(--aries-bg);
    --button-border: var(--accents-2);
    --button-fg-hover: var(--aries-fg);
    --button-bg-hover: var(--aries-bg);
    --button-border-hover: var(--aries-fg);
  }

  .btn.invert {
    margin: 0;
    padding: 0 3.5rem;
    height: 2.81rem;
    line-height: 2.8rem;
    background-color: var(--button-bg);
    border: 1px solid var(--button-border);
    color: var(--button-fg);
    box-shadow: var(--shadow-small);
  }
  .btn.invert:hover {
    color: var(--button-fg-hover);
    background-color: var(--button-bg-hover);
    border-color: var(--button-border-hover);
  }
  .btn.invert:active {
    color: var(--button-fg-hover);
    background-color: var(--button-bg-hover);
    border-color: var(--button-border-hover);
  }

  .btn.invert.outline {
    background-color: var(--accents-8);
    box-shadow: var(--shadow-small);
    border: 1px solid var(--accents-8);
    color: var(--aries-bg);
  }
  .btn.invert.outline:hover {
    background-color: transparent;
    outline: none;
    border-color: var(--aries-1);
    color: var(--aries-1);
  }
  .btn.small {
    font-size: 0.875rem;
    height: 1.5rem;
    padding: 0 var(--gap-three-quarter);
    line-height: inherit;
    border-radius: var(--text-radius);
  }
  .btn.loading {
    background: var(--accents-1);
    color: var(--accents-4);
    border: 1px solid var(--aries-fg);
    border-color: var(--accents-2);
    box-shadow: none;
    cursor: default;
    pointer-events: none;
  }
  .btn.loading > .text {
    visibility: hidden;
  }
  .btn > .loading-dots {
    position: absolute;
  }
  /* .btn.email-form {
    height: 45px;
    margin: 10px 0;
    width: 100%;
    color: var(--aries-bg);
  }
  .btn.email-form:focus,
  .btn.email-form:hover {
    background-color: transparent;
    outline: none;
    border-color: var(--aries-fg);
    color: var(--aries-fg);
  }

  .btn.email-form.flex {
    background-color: var(--aries-1);
    color: var(--aries-fg);
    width: 175px;
  }
  .btn.email-form.flex:focus,
  .btn.email-form.flex:hover {
    background-color: transparent;
    border-color: var(--aries-1);
    color: var(--aries-1);
  } */
`
