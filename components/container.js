export default function Container({
  center = false,
  dark = false,
  gray = false,
  wide = false,
  small = false,
  padding = false,
  overflow = false,
  divider = false,
  footer = false,
  fade = false,
  withAnchor,
  children,
  ...props
}) {
  return (
    <>
      {withAnchor && <div className="anchor" id={props.id} />}
      <div {...props}>
        {/* prettier-ignore */}
        <style jsx>
        {`
      {
        width: 100%;
        margin: 0 auto;
        padding: ${padding ? 'var(--gap-double)' : '0'} ${wide ? '0' : 'var(--gap)'};
        ${wide && !small ? '' : 'max-width: var(--max-width);'}
        ${small ? 'max-width: 768px;' : ''};
        ${center ? 'text-align: center;' : ''};
        ${dark ? `
            background: var(--container-dark-bg);`
            : ''}
        ${fade ? `
            background: var(--background-gradient);
            border-top: 1px solid var(--accents-2);`
            : ''}

        ${gray ? `
            background: var(--accents-1);
            border-top: 1px solid var(--accents-2);`
            : ''}

        ${wide && !overflow ? 'overflow: hidden;' : ''}
      }
      :after {
        /* BFC */
        content: '';
        display: table;
        clear: both;
      }

      /* CSS only media query for tablet */
      @media screen and (max-width: 960px) {
        div {
          padding: ${padding ? 'var(--gap-four)' : '0'} ${wide ? '0' : 'var(--gap-double)'};
          ${!overflow ? 'overflow: hidden;' : ''}
        }
      }
      /* CSS only media query for mobile */
      @media screen and (max-width: 640px) {
        div {
          padding: ${padding ? 'var(--gap-triple)' : '0'} ${wide ? '0' : 'var(--gap'};
        }
      }
    `}
      </style>
        {children}
      </div>
    </>
  )
}
