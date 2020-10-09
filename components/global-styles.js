import { FONT_FAMILY_SANS } from 'lib/constants'

export default function GlobalStyles() {
  return (
    <>
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }
          *:before,
          *:after {
            box-sizing: inherit;
          }

          html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            height: 100%;
            box-sizing: border-box;
            touch-action: manipulation;
            font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-size: 16px;
            background: var(--aries-bg);
            color: var(--aries-fg);
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body {
            position: relative;
            line-height: 1.65;
            font-family: var(--font-sans);
            font-weight: 400;
            min-width: 320px;
            min-height: 100vh;
            direction: ltr;
            font-feature-settings: 'kern';
            scroll-behavior: smooth;
          }

          ::selection {
            background-color: var(--aries-selection);
            color: var(--aries-fg);
          }

          [role='grid']:focus {
            outline: none;
          }
          svg {
            text-rendering: optimizeLegibility;
            cursor: pointer;
          }
          h1,
          h2,
          h3 {
            margin: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.75;
          }

          p a,
          a.reset {
            outline: none;
            color: var(--fg);
            text-decoration: none;
          }

          p:hover a.vp {
            color: var(--aries-vp);
          }
          p:hover a.treehouse {
            color: var(--aries-treehouse);
          }
          p:hover a.ithaca {
            color: var(--aries-ithaca);
          }

          a {
            text-decoration: none;
            color: currentColor;
            transition: color 200ms ease-in-out;
          }
          a:hover {
            color: var(--aries-1);
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
          .f-reset {
            font-size: 1rem;
          }
          .f0 {
            font-size: 1.802032470703125em;
          }
          .f1 {
            font-size: 1.601806640625em;
          }
          .f2 {
            font-size: 1.423828125em;
          }
          .f3 {
            font-size: 1.265625em;
          }
          .f4 {
            font-size: 1.125em;
          }
          .f5 {
            font-size: 0.8888888888888888em;
          }
          .f6 {
            font-size: 0.7901234567901234em;
          }
          .fw1 {
            font-weight: 100;
          }
          .fw2 {
            font-weight: 200;
          }
          .fw3 {
            font-weight: 300;
          }
          .fw4 {
            font-weight: 400;
          }
          .fw5 {
            font-weight: 500;
          }
          .fw6 {
            font-weight: 600;
          }
          .fw7 {
            font-weight: 700;
          }
          .fw8 {
            font-weight: 800;
          }
          .fw9 {
            font-weight: 900;
          }
          .fp {
            color: var(--font-primary);
          }
          .fs {
            color: var(--font-secondary);
          }
          .tc {
            text-align: center;
          }
          .tr {
            text-align: right;
          }
          .tl {
            text-align: left;
          }
          a[role='button'] {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            user-select: none;
          }
          .no-tap-highlight,
          a {
            -webkit-touch-callout: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }
          .no-tap-callout {
            -webkit-touch-callout: none;
          }
          .no-drag {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
          }
          .visually-hidden {
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            overflow: hidden;
            position: absolute;
          }

          svg {
            shape-rendering: crispEdges;
          }
          svg path,
          svg circle {
            shape-rendering: geometricprecision;
          }

          blockquote {
            font-style: italic;
            margin: 0;
            padding-left: 1rem;
            border-left: 3px solid var(--light-gray);
            transition: border-color var(--transition);
          }

          [data-reach-skip-link] {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            position: absolute;
          }
          [data-reach-skip-link]:focus {
            padding: 1rem;
            position: fixed;
            top: 10px;
            left: 10px;
            background: var(--aries-fg);
            z-index: 1;
            width: auto;
            height: auto;
            clip: auto;
          }
        `}
      </style>
    </>
  )
}
