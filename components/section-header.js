import Container from './container'

export default function SectionHeader({
  id,
  title,
  description,
  className,
  margin = '0 0 2rem 0'
}) {
  return (
    <Container padding wide gray>
      <div className={className} id={id}>
        <style jsx>
          {`
            div {
              position: relative;
              text-align: center;
              margin: ${margin};
            }
            h2 {
              letter-spacing: -1px;
            }
            @media screen and (max-width: 640px) {
              div {
                padding: 0 var(--gap);
              }
            }
          `}
        </style>
        <h2 className="fs fw3">{title}</h2>
        {description && <p className="f-reset fp fw4">{description}</p>}
      </div>
    </Container>
  )
}
