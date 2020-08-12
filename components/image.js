import React, { Component } from 'react'
import cn from 'classnames'
import IObserver from './intersection-observer'

class Image extends Component {
  static defaultProps = {
    lazy: true
  }

  state = {
    src: !this.props.lazy ? this.props.videoSrc || this.props.src : undefined
  }

  handleIntersect = entry => {
    if (entry.isIntersecting) {
      this.setState({ src: this.props.videoSrc || this.props.src })
    }
  }

  render() {
    const {
      caption,
      width,
      height,
      margin = 40,
      video = false,
      videoSrc,
      captionSpacing = null,
      renderImage,
      oversize = true,
      float,
      lazy,
      shadow,
      style,
      className,
      ...rest
    } = this.props

    const aspectRatio = `${String((height / width) * 100)}%`

    return (
      <IObserver once onIntersect={this.handleIntersect} rootMargin="20%" disabled={!lazy}>
        <figure
          className={cn({
            oversize: width > 650 && oversize,
            float: float && width < 520
          })}
        >
          <div className="container">
            <div style={{ paddingBottom: aspectRatio, ...style }}>
              {this.state.src ? (
                videoSrc || video ? (
                  <video src={this.state.src} muted autoPlay loop playsInline />
                ) : renderImage ? (
                  renderImage(rest)
                ) : (
                  <img className={className} src={this.state.src || null} alt={rest.alt} />
                )
              ) : null}
            </div>

            {caption && (
              <figcaption style={captionSpacing ? { marginTop: captionSpacing } : {}}>
                {caption}
              </figcaption>
            )}
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
              figure :global(img),
              figure :global(video) {
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
                ${shadow ? 'box-shadow: 0 8px 30px rgba(0,0,0,0.12)' : ''}
              }
              figcaption {
                color: #999;
                font-size: 12px;
                margin: 0;
                text-align: center;
              }

              @media (min-width: 1200px) {
                figure.oversize {
                  width: ${width}px;
                  margin: ${margin}px 0 ${margin}px
                    calc(((${width}px - 650px) / 2) * -1);
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
}

// export const Video = props => <Image {...props} video />

const ImageComponent = props => <Image {...props} />

export default ImageComponent

// import React, { useState } from 'react'
// import cn from 'classnames'
// import IObserver from './intersection-observer'

// function Image(props) {
//   const [state, setState] = useState({ src: props.lazy ? props.videoSrc || props.src : undefined })

//   const handleIntersect = entry => {
//     if (entry.isIntersecting) {
//       setState({ src: props.videoSrc || props.src })
//     }
//   }

//   const {
//     caption,
//     width,
//     height,
//     margin = 40,
//     video = false,
//     videoSrc,
//     captionSpacing = null,
//     renderImage,
//     oversize = true,
//     float,
//     lazy,
//     shadow,
//     style,
//     className,
//     ...rest
//   } = props

//   const aspectRatio = `${String((height / width) * 100)}%`

//   return (
//     <IObserver once onIntersect={handleIntersect} rootMargin="20%" disabled={!lazy}>
//       <figure
//         className={cn({
//           oversize: width > 650 && oversize,
//           float: float && width < 520
//         })}
//       >
//         <div className="container">
//           <div style={{ paddingBottom: aspectRatio, ...style }}>
//             {state.src ? (
//               videoSrc || video ? (
//                 <video src={state.src} muted autoPlay loop playsInline />
//               ) : renderImage ? (
//                 renderImage(rest)
//               ) : (
//                 <img className={className} src={state.src || null} alt={rest.alt} />
//               )
//             ) : null}
//           </div>

//           {caption && (
//             <figcaption style={captionSpacing ? { marginTop: captionSpacing } : {}}>
//               {caption}
//             </figcaption>
//           )}
//         </div>

//         <style jsx>
//           {`
//               figure {
//                 display: block;
//                 text-align: center;
//                 margin: ${margin}px 0;
//               }
//               .container {
//                 margin: 0 auto;
//                 ${width ? `width: ${width}px;` : ''}
//                 max-width: 100%;
//               }
//               @media screen and (max-width: 320px) {
//                 .container {
//                   width: 100%;
//                 }
//               }
//               div {
//                 transform: translate3d(0, 0, 0); /* Work around for Chrome bug */
//                 position: relative;
//               }
//               figure :global(img),
//               figure :global(video) {
//                 height: 100%;
//                 left: 0;
//                 position: absolute;
//                 top: 0;
//                 width: 100%;
//                 ${shadow ? 'box-shadow: 0 8px 30px rgba(0,0,0,0.12)' : ''}
//               }
//               figcaption {
//                 color: #999;
//                 font-size: 12px;
//                 margin: 0;
//                 text-align: center;
//               }

//               @media (min-width: 1200px) {
//                 figure.oversize {
//                   width: ${width}px;
//                   margin: ${margin}px 0 ${margin}px
//                     calc(((${width}px - 650px) / 2) * -1);
//                 }
//                 figure.float {
//                   float: ${float};
//                   margin: ${margin}px;
//                   margin-${float}: -150px;
//                 }
//               }
//             `}
//         </style>
//       </figure>
//     </IObserver>
//   )
// }
// Image.defaultProps = { lazy: true }

// export const Video = props => <Image {...props} video />

// const ImageComponent = props => <Image {...props} />

// export default ImageComponent
