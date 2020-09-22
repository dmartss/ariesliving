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
    --small-gap: 4rem;
    --radius: 8px;
    --header-height: 5rem;
    --banner-height: 75px;

    /* Static Colors */
    --white: #ffffff;
    --black: #000000;
    --black2: #111;
    --light-gray: #f1f1f1;
    --accents-1: #00b0ee;
    --accents-2: #0070f3;
    --accents-3: #fafafa;
    --accents-4: #eaeaea;
    --accents-5: #999999;
    --accents-6: #888888;
    --accents-7: #666666;
    --accents-8: #333;
    --accents-9: #696969;
    --footer-text: #8c8c8c;
    --vp: #2daba5;
    --ithaca: #efaa9c;
    --treehouse: #e5da61;
    /* --ithaca2: #0f5f53; */
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
    --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }
`
