import { memo } from 'react'
import cn from 'classnames'
import styles from './popover-menu.module.css'

export const Menu = memo(
  ({
    children,
    width = null,
    marginTop = null,
    minWidth = null,
    noPadding = false,
    tipDirection = 'up',
    tipOffset = null,
    tipSide = 'left',
    tip = true,
    scrollable,
    innerRef
  }) => (
    <div className={cn('popover', { scrollable }, tipDirection)} ref={innerRef}>
      {tip && (
        <div
          className="triangle"
          style={{
            [tipSide]: tipOffset ? `${tipOffset}px` : 0,
            textAlign: tipSide
          }}
        >
          <Triangle direction={tipDirection} />
        </div>
      )}
      <div className="menu">{children}</div>

      <style jsx>{`
        .menu {
          margin-top: ${marginTop ? marginTop + 'px' : '11px'};
          width: ${width ? width + 'px' : 'auto'};
          min-width: ${minWidth ? minWidth + 'px' : 'auto'};
          padding: ${noPadding ? '0' : '8px 0'};
        }
      `}</style>

      <style jsx>
        {`
          .popover {
            display: inline-block;
            position: relative;
          }

          .triangle {
            display: block;
            line-height: 11px; /* height of triangle (minus 1 :S) */
            z-index: 1;
            text-align: center;
            position: absolute;
            top: -1px;
          }

          .up .triangle {
            top: -1px;
          }

          .down .triangle {
            bottom: -12px;
          }

          .menu {
            color: var(--aries-fg);
            display: inline-block;
            text-align: left;
            background: var(--aries-bg);
            max-width: 100vw;
            box-shadow: var(--shadow-medium);
            border-radius: var(--text-radius);
          }

          .scrollable .menu {
            overflow-y: auto;
            max-height: calc(100vh - 140px);
          }
        `}
      </style>
    </div>
  )
)
export const Item = memo(({ icon, hover, disabled, active, children, fullWidth, noPadding }) => (
  <div className={cn('item', 'f5', { active, disabled, hover })}>
    {children}
    {icon ? <div className="icon">{icon}</div> : null}

    {/* Dynamic Styles */}
    <style jsx>{`
      .item {
        max-width: ${fullWidth ? '100%' : '200px'};
        padding: ${noPadding ? '0' : '8px 20px'};
      }

      .item > :global(a) {
        margin: ${noPadding ? '0' : '-8px -20px'};
        padding: ${noPadding ? '8px 0' : '8px 20px'};
      }
    `}</style>

    {/* Static Styles */}
    <style jsx>
      {`
        .icon {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 20px;
          pointer-events: none;
          display: flex;
          align-items: center;
        }

        .item {
          position: relative;
          color: var(--accents-5);
          line-height: 20px;
          transition: color 0.1s ease, background-color 0.1s ease;
        }

        .item.disabled {
          cursor: not-allowed;
          opacity: 0.5;
          background: var(--accents-1);
          user-select: none;
        }

        .item:not(.disabled):hover,
        .item.active {
          color: var(--aries-fg);
        }

        .item.hover.active,
        .item.hover:not(.disabled):hover {
          background: var(--accents-1);
        }

        .item.disabled {
          cursor: not-allowed;
          background: var(--accents-1);
          user-select: none;
        }

        .item > :global(a) {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
      `}
    </style>
  </div>
))

export const Divider = memo(() => <div className={styles.line}></div>)

const Triangle = memo(({ direction }) => (
  <svg width="24" height="12" viewBox="0 0 24 12">
    <path
      fill="var(--aries-bg)"
      strokeWidth="1px"
      stroke="var(--dropdown-triangle-stroke)"
      fillRule="evenodd"
      d={direction === 'down' ? 'M20 0l-8 8-12-12' : 'M20 12l-8-8-12 12'}
    />
  </svg>
))

export default Menu

// import { memo } from 'react'
// import cn from 'classnames'
// import styles from './popover-menu.module.css'

// export const Menu = memo(({ children, tipDirection = 'up', tip = true, scrollable, innerRef }) => (
//   <div
//     className={cn(styles.popover, { [styles.scrollable]: scrollable }, tipDirection)}
//     ref={innerRef}
//   >
//     {tip && (
//       <div className={styles.triangle}>
//         <Triangle direction={tipDirection} />
//       </div>
//     )}
//     <div className={styles.menu}>{children}</div>
//   </div>
// ))

// export const Item = memo(({ icon, hover, disabled, active, children, fullWidth, noPadding }) => (
//   <div
//     className={cn(styles.item, {
//       [styles.active]: active,
//       [styles.disabled]: disabled,
//       [styles.hover]: hover
//     })}
//   >
//     {children}
//     {icon ? <div className={styles.icon}>{icon}</div> : null}
//   </div>
// ))

// export const Divider = memo(() => (
//   <div className="line">
//     <style jsx>
//       {`
//         .line {
//           border-top: 1px solid var(--accents-2);
//           margin: 8px 0;
//         }
//       `}
//     </style>
//   </div>
// ))

// const Triangle = memo(({ direction }) => (
//   <svg width="24" height="12" viewBox="0 0 24 12">
//     <path
//       fill="var(--aries-bg)"
//       strokeWidth="1px"
//       stroke="var(--dropdown-triangle-stroke)"
//       fillRule="evenodd"
//       d={direction === 'down' ? 'M20 0l-8 8-12-12' : 'M20 12l-8-8-12 12'}
//     />
//   </svg>
// ))

// export default Menu