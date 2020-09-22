import { FONT_FAMILY_SANS } from 'lib/constants'

export default function GlobalStyles({ fontFamily = FONT_FAMILY_SANS }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            height: 100%;
            box-sizing: border-box;
            touch-action: manipulation;
            font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
            text-rendering: optimizeLegibility;
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            position: relative;
            min-height: 100%;
            margin: 0;
            line-height: 1.65;
            font-family: ${fontFamily};
            font-size: 16px;
            font-weight: 400;
            min-width: 320px;
            direction: ltr;
            font-feature-settings: 'kern';
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            scroll-behavior: smooth;
          }

          html,
          body {
            background-color: var(--white);
            color: var(--black);
          }
          ::selection {
            background-color: var(--accents-1);
            color: var(--white);
          }
          [role='grid']:focus {
            outline: none;
          }
          svg {
            text-rendering: optimizeLegibility;
          }
          h1,
          h2,
          h3 {
            margin: 0;
          }
          a {
            text-decoration: none;
            color: currentColor;
            transition: color 200ms ease-in-out;
          }
          a:hover {
            color: var(--accents-1);
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
            color: var(--black);
          }
          .fs {
            color: var(--accents-9);
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
          .row {
            display: flex;
            align-items: center;
            margin: 0 -1.5rem;
          }
          .column {
            flex: 1;
            padding: 0 1.5rem;
          }
          .display-none {
            display: none;
          }
          .display-mobile {
            display: none;
          }
          .display-tablet {
            display: none;
          }
          @media screen and (max-width: 640px) {
            .display-mobile {
              display: unset;
            }
            .hide-mobile {
              display: none;
            }
          }
          @media screen and (max-width: 960px) {
            .display-tablet {
              display: unset;
            }
            .hide-tablet {
              display: none;
            }
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
            background: white;
            z-index: 1;
            width: auto;
            height: auto;
            clip: auto;
          }

          .lines {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
          }

          .lines:before,
          .lines:after {
            content: '';
            border-top: 1px solid var(--black);
            border-color: rgba(0, 0, 0, 0.25);
            margin: 0 var(--gap) 0 0;
            flex: 1 0 20px;
          }

          .lines:after {
            margin: 0 0 0 var(--gap);
          }

          p:hover a.vp {
            color: var(--vp);
          }
          p:hover a.treehouse {
            color: var(--treehouse);
          }
          p:hover a.ithaca {
            color: var(--ithaca);
          }
        `}
      </style>
    </>
  )
}
