import Image from './image'

export default function Section({ description, reverse, title, alt, src, width, height }) {
  return (
    <div className="main" id={title}>
      <style jsx>
        {`
          .main {
            position: relative;
            display: flex;
            flex-direction: ${reverse ? 'row-reverse' : 'row'};
            margin: var(--gap) 0;
          }
          .content {
            margin: ${reverse ? `0 var(--gap-triple) 0 0` : `0 0 0 var(--gap-triple)`};
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .content > h2 {
            margin-bottom: var(--gap-double);
          }
          @media screen and (max-width: 960px) {
            .main {
              flex-direction: column;
              text-align: center;
            }
            .content {
              padding: 0 var(--gap);
              margin: 0;
            }
          }
        `}
      </style>
      <Image className="no-drag" shadow alt={alt} src={src} width={width} height={height} />
      <div className="content">
        <h2 className="fs fw4">{title}</h2>
        <p className="f-reset fp fw4">{description}</p>
      </div>
    </div>
  )
}
