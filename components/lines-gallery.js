import Lines from './icons/lines'
import Image from './image'

const LinesGallery = () => (
  <div className="container">
    <div className="images">
      <div>
        <Image
          width={282}
          height={166}
          src="/showcase-thumbnails/ithaca/rooms/cks/5.jpg"
          alt="Ithaca Classic King Suite"
        />
      </div>
      <div>
        <Image
          width={282}
          height={166}
          src="/showcase-thumbnails/villa-paradiso/rooms/multi-unit/1.jpg"
          alt="Villa Paradiso Suite"
        />
      </div>
      <div>
        <Image
          width={282}
          height={166}
          src="/showcase-thumbnails/ithaca/rooms/sk/2.jpg"
          alt="Ithaca Superior King"
        />
      </div>

      <div>
        <Image
          width={282}
          height={166}
          src="/showcase-thumbnails/treehouse/rooms/ql/1.jpg"
          alt="Treehouse Queen Loft"
        />
      </div>
      <div>
        <Image
          width={282}
          height={166}
          src="/showcase-thumbnails/villa-paradiso/rooms/16/1.jpg"
          alt="Villa Paradiso Multi Unit"
        />
      </div>
    </div>

    <div className="lines-container">
      <Lines />
    </div>
    <style jsx>{`
      .container {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 6rem 0 4rem;
      }

      .images {
        max-width: 1440px;
        display: flex;
      }

      .lines-container {
        top: 0.5rem;
        left: 0;
        display: flex;
        position: absolute;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      .lines-container > :global(svg) {
        width: 100%;
      }

      .images > div {
        flex: 1;
      }

      .images > div:not(:last-child) {
        margin-right: 16px;
      }

      .images > div > :global(figure) {
        width: 100%;
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.12);
        border-radius: 6px;
      }

      .images > div:nth-of-type(2n) {
        transform: translateY(-36px);
      }

      .images > div:nth-of-type(2n -1) {
        z-index: 2;
      }

      @media screen and (max-width: 640px) {
        .container {
          padding: 10rem 0 6rem;
        }
        .images {
          max-width: unset;
          min-width: 107%;
        }
        .lines-container {
          top: 2rem;
        }
        .images > div:nth-of-type(2n) {
          transform: translateY(-12px);
        }
        .images > div:not(:last-child) {
          margin-right: 6px;
        }
      }
    `}</style>
  </div>
)

export default LinesGallery
