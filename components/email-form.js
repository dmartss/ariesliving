export default function EmailForm({ flex }) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script type="text/javascript" src="//contact-api.inguest.com/bundles/revinatecontactapi/js/revinate-form.js?v=1"></script>
          <form class="email" id="revinate_contact_api_form" token="${token}"
                onsubmit="revFormOnSubmit(); event.preventDefault();">
            <div class=${flex ? 'flex' : 'div'}>
              <div>
                <input placeholder="you@domain.com" class=${
                  flex ? 'flex' : ''
                } type="email" name="email" required/>
              </div>
              <div class="button">
                <button class=${flex ? 'flex' : ''} type="submit">Subscribe</button>
              </div>
            </div>

          <style scoped>
          form.email {
            display: inline-block;
            position: relative;
            max-width: 100%;
          }

          form.email div {
            width: 240px;
            max-width: 100%;
            text-align: center;
            margin: auto;
            transition: border-bottom-color 100ms ease-in, color 100ms ease-in;
          }

          form.email div.flex {
            display: flex;
            flex-direction: row;
            width: 490px;
            align-items: center;
            justify-content: space-between;
          }

          form.email input {
            background-color: transparent;
            box-sizing: border-box;
            display: block;
            text-align: left;
            font-size: 14px;
            font-family: var(--font-sans);
            padding: 4px 10px;
            margin: 0 auto;
            height: 40px;
            line-height: 27px;
            width: 100%;
            box-shadow: none;
            color: var(--aries-fg);
            border: 1px solid var(--accents-3);
            border-radius: var(--radius);
          }

          form.email input.flex {
            color: var(--aries-bg);
          }

          form.email input::placeholder {
            color: #999;
            transition: color 100ms ease-in;
          }

          form.email input:focus::placeholder {
            color: #999;
          }

          form.email input:focus {
            outline: none;
            background: none;
            transition: border-color 100ms ease-in;
            border-color: var(--accents-7);
          }

          form.email input.flex:focus {
            border-color: var(--aries-bg);;
          }

          form.email input:disabled {
            color: #666;
          }

          form.email input::-ms-clear {
            display: none;
          }

           form.email button {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
            padding: var(--gap-quarter) var(--gap-half);
            margin: calc(-1 * var(--gap-quarter)) calc(-1 * var(--gap-half));
            border-radius: var(--radius);
            color: var(--aries-1);
            background-color: var(--aries-fg);
            border: 1px solid var(--aries-fg);
            font-size: inherit;
            line-height: inherit;
            transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
            outline: none;
            height: 45px;
            margin: 10px 0;
            width: 100%;
            color: var(--aries-bg);
          }

          form.email button.flex {
            background-color: var(--aries-1);
            color: var(--aries-fg);
            width: 175px;
          }

          form.email button:focus,
          form.email button:hover {
            background-color: transparent;
            outline: none;
            border-color: var(--aries-fg);
            color: var(--aries-fg);
          }

          form.email button.flex:focus,
          form.email button.flex:hover {
            border-color: var(--aries-1);
            color: var(--aries-1);
          }

          @media (max-width: 640px) {
            form.email div.flex {
              display: flex;
              flex-direction: column;
              width: 80vw;
              align-items: center;
              justify-content: space-between;
            }
          }

          </style>
      </form>`
      }}
    />
  )
}
