export default function Container({
  center = false,
  dark = false,
  gray = false,
  wide = false,
  wideOnMobile = false,
  small = false,
  padding = false,
  overflow = false,
  dotBackground = false,
  mobileStyle = null,
  divider = false,
  footer = false,
  children,
  ...props
}) {
  return (
    <div {...props}>
      {/* prettier-ignore */}
      <style jsx>
        {`
      {
        width: 100%;
        margin: 0 auto;
        padding: ${padding ? 'var(--gap-double)' : '0'} ${wide ? '0' : 'var(--gap)'};
        ${footer ? 'border-top: 1px solid var(--accents-2)' : ''};
        ${wide && !small ? '' : 'max-width: 1024px;'}
        ${small ? 'max-width: 768px;' : ''}
        ${center ? 'text-align: center;' : ''}
        ${dark ? `
            background: var(--container-dark);
            color: var(--light-gray);`
            : ''}
        ${gray ? `
            background-color: var(--container-gray);
            border-top: 1px solid var(--container-border);
            border-bottom: 1px solid var(--container-border);`
            : ''}
        ${wide && !overflow ? 'overflow: hidden;' : ''}
        ${dotBackground ? `
            background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;`
            : ''}
        ${divider ? `border-top: 1px solid rgba(0,0,0,0.1);` : ''}
      }
      :after {
        // BFC
        content: '';
        display: table;
        clear: both;
      }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        div {
          padding: ${padding ? 'var(--gap-four)' : '0'} ${wide || wideOnMobile ? '0' : 'var(--gap-double)'};
          ${wideOnMobile && !overflow ? 'overflow: hidden;' : ''}
        }
      }
      // CSS only media query for mobile
      @media screen and (max-width: 640px) {
        div {
          padding: ${padding ? 'var(--gap-triple)' : '0'} ${wide || wideOnMobile ? '0' : 'var(--gap'};
          ${mobileStyle || ''}
        }
      }
    `}
      </style>
      {children}
    </div>
  )
}
