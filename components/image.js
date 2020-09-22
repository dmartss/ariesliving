import React, { useState } from 'react'
import { useAmp } from 'next/amp'
import cn from 'classnames'
import IObserver from './intersection-observer'

const Image = ({
  width,
  height,
  margin = 40,
  oversize = true,
  float,
  lazy = true,
  shadow,
  style,
  noBorder,
  avatar,
  className,
  ...rest
}) => {
  const [src, setSrc] = useState(!lazy ? src : undefined)
  const isAmp = useAmp()

  const handleIntersect = entry => {
    if (entry.isIntersecting) {
      setSrc(rest.src)
    }
  }

  const aspectRatio = `${String((height / width) * 100)}%`

  return (
    <IObserver once onIntersect={handleIntersect} rootMargin="20%" disabled={!lazy}>
      <figure className={cn({ oversize: width > 650 && oversize, float: float && width < 520 })}>
        <div className="container">
          <div style={isAmp ? undefined : { paddingBottom: aspectRatio, ...style }}>
            {isAmp ? (
              <amp-img
                layout="responsive"
                src={rest.src}
                width={width}
                height={height}
                alt={rest.alt}
              />
            ) : (
              src && <img className={className} src={src || null} alt={rest.alt} />
            )}
          </div>
        </div>

        <style jsx>
          {`
            figure {
              display: block;
              text-align: center;
              margin: ${margin}px 0;
            }
            .container {
              margin: 0 auto;
              ${width ? `width: ${width}px;` : ''}
              max-width: 100%;
            }
            @media screen and (max-width: 320px) {
              .container {
                width: 100%;
              }
            }
            div {
              transform: translate3d(0, 0, 0); /* Work around for Chrome bug */
              position: relative;
            }
            figure :global(img) {
              ${
                isAmp
                  ? 'position: inherit;'
                  : `
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
              `
              };
              border-radius: ${noBorder ? '0px' : avatar ? '50%' : 'var(--radius)'};
              ${shadow ? 'box-shadow: var(--shadow-large)' : ''}
            }

            @media (min-width: 1200px) {
              figure.oversize {
                width: ${width}px;
                margin: ${margin}px 0 ${margin}px calc(((${width}px - 650px) / 2) * -1);
              }
              figure.float {
                  float: ${float};
                  margin: ${margin}px;
                  margin-${float}: -150px;
                }
            }
          `}
        </style>
      </figure>
    </IObserver>
  )
}

export default Image
