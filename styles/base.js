import css from 'styled-jsx/css'

// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/vercel/next.js/issues/10549
export default css.global`
  :root {
    /* Spacing */
    --gap-quarter: 0.25rem;
    --gap-half: 0.5rem;
    --gap-three-quarter: 0.75rem;
    --gap: 1rem;
    --gap-double: 2rem;
    --gap-triple: 3rem;
    --small-four: 4rem;
    --radius: 8px;
    --header-height: 5rem;
    --banner-height: 75px;

    --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  :root {
    /* Static Colors */
    --aries-bg: #ffffff;
    --aries-fg: #000000;

    --aries-1: #00b0ee;
    --aries-2: #0070f3;
    --aries-vp: #2daba5;
    --aries-ithaca: #efaa9c;
    --aries-treehouse: #e5da61;

    --aries-error-lighter: #f7d4d6;
    --aries-error-light: #ff1a1a;
    --aries-error: #ee0000;
    --aries-error-dark: #c50000;

    --aries-success-lighter: #d3e5ff;
    --aries-success-light: #3291ff;
    --aries-success: #0070f3;
    --aries-success-dark: #0761d1;

    --aries-warning-lighter: #ffefcf;
    --aries-warning-light: #f7b955;
    --aries-warning: #f5a623;
    --aries-warning-dark: #ab570a;

    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999999;
    --accents-4: #888888;
    --accents-5: #666666;
    --accents-6: #444444;
    --accents-7: #333333;
    --accents-8: #111111;
    --accents-9: #696969;
    --footer-text: #8c8c8c;
    --light-gray: #f1f1f1;

    --header-border-bottom: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    --header-background: hsla(0, 0%, 100%, 0.8);

    --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
    --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
    --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
    --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
    --shadow-hover: 0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    --gradient-1: linear-gradient(270deg, #111111, #333333, #333333, #111111);
    --gradient-2: linear-gradient(135deg, #000 50%, transparent 50%);
    --gradient-3: linear-gradient(135deg, transparent 50%, #000 50%);
    --gradient-4: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
    --gradient-5: linear-gradient(135deg, #b4b6b8, #7f8183);
    --cubic-transition: cubic-bezier(0.4, 0, 0.2, 1);
  }
`
