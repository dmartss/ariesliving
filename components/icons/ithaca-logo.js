export default function IthacaLogo({ small, size = 60 }) {
  return (
    <svg
      className="hotel-logo"
      height={small ? 30 : size}
      width={small ? 30 : size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd">
        <path
          d="m0 200v200h200 200v-200-200h-200-200zm201.461-183.267c.777.697 3.205 2.971 5.397 5.054l3.984 3.788 5.971-4.403c4.734-3.489 6.029-4.327 6.246-4.038 1.514 2.01 9.034 10.866 9.227 10.866.139 0 3.024-1.56 6.411-3.467 3.387-1.906 6.244-3.466 6.349-3.466s1.923 2.759 4.039 6.132c3.232 5.15 3.934 6.113 4.382 6.01.293-.068 3.413-1.32 6.933-2.784l6.4-2.66.469.984c.258.541 1.663 3.502 3.121 6.58s2.764 5.634 2.902 5.68c.139.046 3.352-.759 7.142-1.787 3.79-1.029 6.969-1.785 7.065-1.68s1.169 3.278 2.384 7.052c2.029 6.299 2.254 6.85 2.763 6.738.789-.174 13.411-1.999 13.824-1.999.235 0 .792 2.265 1.78 7.242l1.438 7.241 7.423-.161c4.082-.088 7.422-.099 7.422-.024 0 .529 1.099 14.623 1.144 14.666.031.029 3.296.381 7.256.781s7.247.768 7.304.818c.057.049-.047 3.338-.232 7.309-.185 3.97-.265 7.291-.176 7.379.088.088 3.313.876 7.166 1.749 3.853.874 7.028 1.609 7.056 1.635.028.025-.481 3.102-1.131 6.839-.651 3.736-1.184 7.038-1.185 7.336-.001.47.912.87 6.697 2.934 3.684 1.314 6.753 2.531 6.821 2.703.067.173-.787 3.301-1.899 6.951-1.111 3.65-2.021 6.762-2.021 6.915 0 .152 2.91 1.752 6.467 3.555s6.499 3.302 6.538 3.332c.04.03-1.25 3.009-2.866 6.62s-2.939 6.682-2.939 6.824c0 .143 2.61 2.024 5.8 4.18s5.906 4.015 6.036 4.131c.129.115-1.469 3.036-3.551 6.491s-3.726 6.38-3.651 6.5c.074.12 2.543 2.312 5.487 4.87 2.943 2.558 5.298 4.791 5.233 4.962-.102.264-7.53 9.816-8.584 11.036-.31.36.298 1.147 4.604 5.964l4.962 5.549-5.249 5.253-5.248 5.253 4.157 5.953c2.287 3.274 4.123 6.048 4.081 6.164-.042.117-2.627 2.207-5.743 4.645-3.117 2.438-5.667 4.482-5.667 4.542s1.433 2.844 3.185 6.186c1.752 3.343 3.262 6.279 3.355 6.525.135.358-1.015 1.148-5.786 3.972-3.275 1.938-6.107 3.665-6.295 3.836-.272.249.167 1.65 2.2 7.017 1.398 3.688 2.538 6.801 2.535 6.917s-2.952 1.47-6.553 3.01c-3.602 1.54-6.611 2.947-6.687 3.126-.076.18.594 3.36 1.491 7.067.896 3.707 1.628 6.87 1.625 7.027-.002.157-3.187 1.235-7.078 2.395-6.995 2.085-7.072 2.116-6.947 2.78.287 1.511 1.578 13.872 1.461 13.988-.069.069-3.27.65-7.112 1.29-3.843.641-7.068 1.246-7.168 1.346-.099.099-.251 3.451-.337 7.448l-.156 7.267-6.266.306c-3.447.169-6.75.319-7.341.334l-1.075.026-.92 7.084c-.506 3.896-.991 7.198-1.078 7.338-.098.16-2.833.045-7.302-.307-3.929-.309-7.234-.461-7.345-.338-.11.123-.991 3.267-1.956 6.987s-1.822 6.831-1.904 6.913-3.333-.491-7.224-1.274c-4.178-.84-7.163-1.323-7.289-1.179-.118.133-1.384 3.218-2.814 6.853-2.43 6.179-2.638 6.599-3.176 6.428-.317-.1-3.489-1.16-7.048-2.356l-6.472-2.173-3.494 6.412c-1.921 3.527-3.531 6.454-3.576 6.505s-1.201-.445-2.568-1.101c-1.367-.657-4.372-2.102-6.679-3.212l-4.194-2.017-4.295 5.985c-2.362 3.292-4.34 5.986-4.396 5.986-.055 0-2.868-1.797-6.252-3.993l-6.151-3.993-1.811 1.926c-.996 1.06-3.226 3.456-4.956 5.326-1.729 1.87-3.255 3.4-3.391 3.4-.135 0-2.776-2.115-5.869-4.701-3.092-2.586-5.772-4.716-5.956-4.734-.286-.027-3.96 2.904-10.414 8.307l-1.611 1.35-5.025-5.447-5.025-5.448-.723.47c-8.278 5.374-11.771 7.588-11.842 7.505-.048-.056-1.98-2.742-4.293-5.968-2.314-3.227-4.231-5.897-4.261-5.935-.03-.037-3.038 1.383-6.685 3.156-5.572 2.708-6.675 3.16-6.91 2.829-.154-.216-1.771-3.136-3.594-6.489l-3.315-6.095-6.951 2.321c-3.824 1.276-7.032 2.236-7.131 2.133-.098-.103-1.347-3.127-2.776-6.72-1.428-3.594-2.635-6.58-2.681-6.638-.046-.057-3.321.539-7.277 1.325-3.957.785-7.24 1.372-7.296 1.304-.055-.069-.906-3.239-1.89-7.046s-1.834-6.967-1.888-7.021-3.368.152-7.365.458c-3.997.305-7.295.524-7.33.486-.035-.037-.496-3.298-1.024-7.246-.529-3.947-1.003-7.219-1.054-7.27-.051-.052-3.381-.242-7.4-.423l-7.307-.329-.071-7.38-.071-7.38-.729-.146c-.401-.081-3.669-.643-7.263-1.249-3.593-.606-6.56-1.127-6.593-1.156s.295-3.107.728-6.838c.434-3.732.791-7.036.794-7.344.004-.501-.721-.775-6.995-2.647-3.85-1.149-7.032-2.108-7.07-2.133-.038-.024.714-3.261 1.672-7.192.957-3.931 1.708-7.18 1.668-7.22-.039-.04-3.011-1.355-6.604-2.923s-6.611-2.927-6.707-3.021c-.095-.094 1-3.256 2.434-7.027l2.608-6.855-6.363-3.795-6.363-3.795 2.296-4.416c1.263-2.429 2.82-5.387 3.46-6.572l1.164-2.156-5.633-4.378c-3.098-2.407-5.752-4.454-5.898-4.547-.147-.094 1.547-2.763 3.795-5.979 2.232-3.195 4.125-5.98 4.205-6.189.094-.244-1.694-2.222-4.998-5.53l-5.144-5.149.639-.796c.351-.438 2.537-2.908 4.857-5.488 2.76-3.069 4.148-4.808 4.016-5.029-.11-.185-.816-1.117-1.567-2.07-.752-.954-2.71-3.441-4.352-5.529l-2.986-3.795 5.535-4.845c3.045-2.665 5.512-4.927 5.484-5.027-.028-.099-1.732-2.981-3.787-6.404l-3.735-6.224 6.022-4.079c3.312-2.243 6.068-4.124 6.124-4.181.056-.056-1.22-3.074-2.835-6.708-1.616-3.633-2.937-6.682-2.937-6.775s2.91-1.658 6.466-3.477c3.557-1.819 6.497-3.329 6.533-3.354s-.894-3.209-2.068-7.076-2.043-7.107-1.933-7.2c.111-.093 3.202-1.231 6.868-2.528 3.667-1.297 6.702-2.382 6.745-2.412s-.481-3.314-1.165-7.299c-.685-3.984-1.196-7.293-1.138-7.352.059-.059 3.266-.825 7.126-1.703s7.06-1.637 7.111-1.688-.078-3.327-.286-7.279-.292-7.26-.186-7.351c.106-.09 2.833-.436 6.06-.767 3.227-.332 6.467-.682 7.2-.779l1.333-.175.534-7.33.533-7.33 7.385.105 7.386.105.152-.638c.084-.351.735-3.552 1.445-7.114.711-3.561 1.36-6.541 1.441-6.623.081-.081 3.394.323 7.362.898l7.214 1.045 2.311-6.956c1.271-3.825 2.335-6.986 2.364-7.023.03-.038 3.274.8 7.21 1.862 4.034 1.088 7.197 1.815 7.251 1.668.647-1.763 6.241-13.046 6.445-13 .151.034 3.186 1.264 6.743 2.733 3.558 1.469 6.547 2.671 6.644 2.671s1.891-2.704 3.987-6.01 3.913-6.073 4.037-6.15c.178-.11 9.804 5.102 12.384 6.706.528.329.83.022 5.292-5.377 3.269-3.957 4.826-5.651 5.039-5.483.169.134 1.688 1.257 3.375 2.497 1.686 1.24 4.233 3.114 5.659 4.166l2.592 1.911 5.275-5.049c6.19-5.927 5.15-5.35 6.868-3.811m-2.394 142.441c-2.357.605-3.946 2.015-4.86 4.311-.431 1.082-.477 2.758-.549 19.915l-.078 18.733h4.543 4.544v-7.2-7.2h3.466 3.467v7.2 7.2h4.545 4.545l-.082-18.733c-.097-22.114-.02-21.633-3.758-23.604l-1.383-.729-6.8-.05c-3.74-.027-7.16.044-7.6.157m32.658.159c-1.674.53-3.26 1.971-4.021 3.655l-.637 1.412v16.4 16.4l.632 1.398c1.618 3.58 3.283 4.133 12.095 4.019 10.108-.131 11.341-1.181 11.608-9.89l.129-4.207-4.366.073-4.365.074-.075 3.582c-.043 2.085-.196 3.729-.366 3.933-.493.594-5.358.482-5.918-.136-.531-.588-.688-29.486-.165-30.464.245-.458.58-.515 3.013-.515 3.453 0 3.378-.079 3.378 3.52v2.88h4.435 4.435l-.138-3.4c-.203-4.963-1.06-6.853-3.749-8.271l-1.383-.729-6.667-.059c-5.182-.045-6.936.027-7.875.325m32.142-.159c-2.357.605-3.946 2.015-4.86 4.311-.431 1.082-.477 2.758-.549 19.915l-.078 18.733h4.543 4.544v-7.2-7.2h3.466 3.467v7.2 7.2h4.545 4.545l-.082-18.733c-.097-22.114-.02-21.633-3.758-23.604l-1.383-.729-6.8-.05c-3.74-.027-7.16.044-7.6.157m-147.6 21.626v21.333h4.533 4.533v-21.333-21.333h-4.533-4.533zm15.111-21.156c-.098.098-.178 1.838-.178 3.867v3.689h3.467 3.466v17.467 17.466h4.667 4.667v-17.466-17.467h3.333 3.333v-3.867-3.866h-11.289c-6.208 0-11.368.08-11.466.177m28.622 21.156v21.333h4.533 4.534v-8.4-8.4h3.733 3.733v8.4 8.4h4.534 4.533v-21.333-21.333h-4.533-4.534v8.933 8.933h-3.733-3.733v-8.933-8.933h-4.534-4.533zm49.185-15.141c.351.502.415 1.715.415 7.867v7.274h-3.467-3.466v-7.379c0-8.96-.253-8.354 3.493-8.354 2.395 0 2.644.049 3.025.592m64.8 0c.351.502.415 1.715.415 7.867v7.274h-3.467-3.466v-7.379c0-8.96-.253-8.354 3.493-8.354 2.395 0 2.644.049 3.025.592m-194.12 70.968c-2.649 1.234-4.1 3.987-3.769 7.153.94 8.99 13.302 8.33 13.356-.713.031-5.341-4.873-8.635-9.587-6.44m30.889-.124c-2.625 1.225-3.152 4.523-1.02 6.395.893.784 1.79 1.123 3.948 1.492 1.367.233 2.152 1.036 1.922 1.966-.245.995-.466 1.155-1.781 1.289-1.131.115-1.438-.008-3.175-1.276-.334-.244-.649-.154-1.543.438l-1.125.743.744.792c3.268 3.482 9.779 1.834 9.779-2.475 0-2.397-1.446-3.77-4.495-4.266-2.807-.457-3.502-1.042-2.696-2.273.768-1.172 2.923-1.12 4.062.099.716.765 2.951-.459 2.415-1.323-1.158-1.87-4.723-2.681-7.035-1.601m14.058-.082c-6.811 2.954-4.842 13.722 2.507 13.71 5.022-.008 8.147-4.95 6.282-9.935-1.253-3.348-5.534-5.187-8.789-3.775m101.455-.138c-4.958 1.455-5.776 9.719-1.275 12.882 3.447 2.423 9.675.017 9.675-3.738 0-.435-2.919-.027-3.063.428-1.31 4.127-7.146 1.362-6.733-3.191.381-4.202 5.069-5.988 6.644-2.531.444.975 3.302 1.039 3.003.067-1.024-3.317-4.566-4.999-8.251-3.917m47.233.109c-4.505 1.605-5.626 8.678-1.918 12.096 3.513 3.239 9.62 1.56 10.843-2.98 1.652-6.137-3.246-11.14-8.925-9.116m-181.233 6.808v6.933h1.466 1.467v-2.8-2.8h2.533 2.534v-1.2-1.2h-2.534-2.533v-1.733-1.733h3.333 3.334v-1.2-1.2h-4.8-4.8zm44.313-2.067c.142 7.016 1.114 8.695 5.187 8.954 4.629.295 5.952-1.692 5.96-8.954l.006-4.866h-1.333-1.333l-.002 4.2c-.002 6.011-.678 7.53-3.184 7.154-2.062-.309-2.27-.876-2.364-6.426l-.083-4.928h-1.476-1.476zm13.287-3.677v1.189l2.2.078 2.2.077.072 5.667.072 5.666h1.328 1.328v-5.733-5.733h2.133 2.133v-1.2-1.2h-5.733-5.733zm14.133 5.744v6.933h1.333 1.334v-2.933-2.933h2.533 2.533v2.933 2.933h1.467 1.467v-6.933-6.933h-1.467-1.467v2.81 2.81l-2.466-.077-2.467-.077-.076-2.733-.076-2.733h-1.324-1.324zm18.133.037v6.97l3.831-.13c3.402-.116 3.961-.202 5-.772 2.339-1.283 2.785-4.065.925-5.77l-.963-.882.547-.588c1.482-1.591.825-4.16-1.347-5.269-.879-.448-1.572-.529-4.515-.529h-3.478zm13.6-.037v6.933h4.667 4.667v-1.333-1.333h-3.334-3.333v-1.6-1.6h2.533 2.534v-1.2-1.2h-2.534-2.533v-1.6-1.6h3.333 3.334v-1.2-1.2h-4.667-4.667zm15.291-3.81c-.61 1.729-1.718 4.859-2.462 6.957l-1.354 3.813 1.507-.08 1.508-.08.445-1.333.445-1.334h2.62 2.621l.445 1.334.445 1.333 1.505.08 1.504.08-1.167-3.28c-.643-1.804-1.758-4.9-2.479-6.88l-1.31-3.6-1.582-.077-1.582-.077zm26.309 3.81v6.933h1.467 1.467v-2.933-2.933h2.533 2.533v2.933 2.933h1.334 1.333v-6.933-6.933h-1.324-1.324l-.076 2.733-.076 2.733h-2.4-2.4l-.076-2.733-.076-2.733h-1.457-1.458zm18.4 0v6.933h1.467 1.467v-2.933-2.933h2.533 2.533v2.933 2.933h1.334 1.333v-6.933-6.933h-1.324-1.324l-.076 2.733-.076 2.733h-2.4-2.4l-.076-2.733-.076-2.733h-1.457-1.458zm29.067-5.733v1.2h2.133 2.134v5.733 5.733h1.333 1.333v-5.733-5.733h2.267 2.267v-1.2-1.2h-5.734-5.733zm13.867 5.733v6.933h4.666 4.667v-1.333-1.333h-3.333-3.334v-1.6-1.6h2.534 2.533v-1.2-1.2h-2.533-2.534v-1.6-1.6h3.334 3.333v-1.2-1.2h-4.667-4.666zm12.533 0v6.933h4.533 4.534v-1.333-1.333h-3.2-3.2v-5.6-5.6h-1.334-1.333zm-226.467-4.225c2.53 1.563 2.54 6.68.016 8.218-2.743 1.673-5.804-.504-5.804-4.126 0-3.646 3.037-5.793 5.788-4.092m44.628.03c1.256.84 1.838 2.126 1.838 4.062 0 6.028-7.116 6.415-7.66.416-.346-3.817 2.98-6.376 5.822-4.478m58.816-.322c2.334.888 1.31 3.23-1.437 3.286l-1.54.031-.079-1.8-.079-1.8h1.195c.657 0 1.53.128 1.94.283m90.377.803c3.034 2.941.998 8.627-2.931 8.184-5.042-.568-4.325-9.669.725-9.198 1.002.093 1.484.315 2.206 1.014m-63.908 2.899c1.045 2.866 1.108 2.682-.913 2.682-.953 0-1.733-.099-1.733-.22 0-.184 1-3.269 1.475-4.552.195-.526.254-.42 1.171 2.09m-25.495 1.922c2.274 1.196 1.009 3.227-2.108 3.385l-1.976.1v-1.896-1.896h1.751c.963 0 2.013.138 2.333.307"
          fill="#0e5b53"
        />
        <path
          d="m194.667 20.674c-2.86 2.707-5.287 4.923-5.393 4.924-.107.001-2.793-1.922-5.969-4.274-5.177-3.832-5.821-4.235-6.207-3.884-.237.216-2.351 2.733-4.698 5.596-2.347 2.862-4.346 5.21-4.443 5.217-.146.011-4.406-2.346-11.567-6.4l-1.343-.76-3.957 6.253c-2.177 3.44-3.987 6.254-4.022 6.254-.036 0-3.104-1.261-6.818-2.802s-6.829-2.711-6.921-2.6-1.522 3.082-3.178 6.602-3.044 6.436-3.083 6.48c-.04.044-3.222-.775-7.071-1.819-3.849-1.045-7.089-1.801-7.199-1.68-.11.12-1.203 3.249-2.429 6.952-1.617 4.888-2.338 6.731-2.632 6.725-.222-.004-3.532-.46-7.356-1.013l-6.952-1.005-1.439 7.279-1.44 7.279-7.408-.175c-6.281-.149-7.409-.118-7.413.201-.03 2.609-1.12 14.247-1.348 14.387-.162.101-1.274.262-2.471.359-3.305.268-11.743 1.241-11.872 1.37-.063.062.024 2.786.193 6.053s.306 6.549.305 7.292l-.003 1.352-7 1.557c-3.85.857-7.072 1.629-7.16 1.715-.089.087.409 3.398 1.107 7.358.697 3.96 1.249 7.219 1.227 7.243s-3.094 1.138-6.827 2.475c-3.733 1.338-6.84 2.486-6.906 2.552s.81 3.184 1.946 6.93c1.137 3.746 2.005 6.958 1.931 7.139-.075.18-3.015 1.8-6.535 3.6l-6.399 3.274 3.003 6.717 3.003 6.717-.961.688c-.529.378-3.242 2.231-6.029 4.116-2.786 1.885-5.108 3.462-5.159 3.503-.051.042 1.599 2.893 3.666 6.335 2.068 3.443 3.76 6.327 3.76 6.408 0 .082-2.43 2.269-5.4 4.862-2.97 2.592-5.428 4.787-5.463 4.877s1.448 2.084 3.295 4.43c1.847 2.347 3.883 4.945 4.525 5.774l1.166 1.506-4.945 5.541-4.945 5.541 5.246 5.251 5.246 5.251-4.027 5.741c-2.215 3.158-4.084 5.904-4.152 6.102-.079.226 2.001 1.999 5.584 4.76 3.14 2.42 5.716 4.497 5.723 4.617.008.119-1.499 3.096-3.348 6.616s-3.314 6.447-3.256 6.505 2.86 1.748 6.228 3.756 6.172 3.692 6.233 3.744c.06.051-1.053 3.175-2.473 6.941-1.42 3.767-2.49 6.93-2.376 7.029.113.099 2.786 1.293 5.939 2.655 3.153 1.361 6.102 2.668 6.553 2.906l.82.431-1.681 6.933c-.924 3.814-1.647 7.04-1.607 7.17s3.162 1.164 6.937 2.299c3.776 1.135 6.918 2.115 6.982 2.179s-.244 3.23-.683 7.035c-.44 3.804-.766 7.093-.725 7.307.056.293 1.856.689 7.272 1.6l7.199 1.21.071 7.373.07 7.372 3.796.181c2.088.099 5.415.262 7.395.361l3.598.18.946 7.122c.52 3.917 1.029 7.206 1.131 7.308s3.037-.025 6.522-.282c3.486-.257 6.743-.486 7.238-.508l.902-.04 1.83 7.042c1.006 3.874 1.861 7.073 1.899 7.11.037.037 3.299-.582 7.248-1.374 3.949-.793 7.207-1.412 7.242-1.376.034.035 1.231 3.005 2.659 6.598 1.429 3.593 2.691 6.639 2.806 6.767.115.13 3.272-.795 7.076-2.071 3.777-1.268 6.952-2.214 7.055-2.101s1.655 2.905 3.449 6.205 3.365 6.111 3.491 6.247c.138.149 2.84-1.014 6.741-2.9 3.581-1.731 6.621-3.079 6.755-2.996.134.082 2.097 2.736 4.362 5.896s4.206 5.747 4.315 5.749c.108.002 2.881-1.736 6.162-3.863 3.281-2.126 6.072-3.863 6.203-3.86.131.004 2.447 2.402 5.147 5.331 4.207 4.562 4.97 5.276 5.328 4.993.231-.182 2.925-2.407 5.988-4.944 4.946-4.099 5.617-4.573 6.005-4.241.24.205 2.914 2.432 5.942 4.949l5.507 4.577 1.717-1.802c.944-.992 3.191-3.393 4.994-5.336 1.802-1.943 3.363-3.533 3.468-3.533s2.798 1.687 5.986 3.749c3.187 2.062 5.953 3.81 6.147 3.884.224.086 1.865-1.97 4.534-5.682 2.301-3.2 4.291-5.857 4.423-5.905s3.111 1.302 6.621 3 6.483 3.085 6.606 3.082c.124-.003 1.725-2.772 3.558-6.154s3.409-6.274 3.502-6.427c.108-.177 2.725.573 7.15 2.048 3.84 1.28 7.028 2.28 7.085 2.223.057-.056 1.259-3.039 2.672-6.627 1.413-3.589 2.656-6.616 2.763-6.727.106-.112 3.366.443 7.244 1.233 3.878.789 7.128 1.361 7.222 1.269.095-.091.987-3.327 1.984-7.189l1.812-7.023 1.083.144c1.895.253 13.483 1.057 13.59.944.056-.06.476-2.929.932-6.376.457-3.446.897-6.694.978-7.217l.147-.952 7.213-.317c3.968-.175 7.321-.384 7.452-.465s.238-3.418.238-7.417v-7.27l7.092-1.181c3.9-.649 7.186-1.241 7.301-1.314s-.137-3.133-.561-6.8c-.423-3.667-.739-6.952-.701-7.301.064-.588.571-.785 6.946-2.699 3.782-1.136 6.914-2.11 6.959-2.166.045-.055-.684-3.271-1.62-7.145s-1.607-7.13-1.492-7.235 3.164-1.475 6.775-3.045l6.566-2.855-2.602-6.844c-1.431-3.764-2.511-6.942-2.4-7.062.11-.12 2.969-1.863 6.352-3.873l6.152-3.654-1.394-2.661c-.767-1.463-2.321-4.419-3.453-6.569l-2.059-3.91 5.861-4.561 5.861-4.561-2.837-4.063c-1.56-2.234-3.47-4.97-4.245-6.079l-1.408-2.015 5.187-5.183c2.853-2.85 5.157-5.265 5.12-5.367s-2.167-2.543-4.734-5.425c-2.566-2.882-4.703-5.34-4.748-5.462s1.905-2.742 4.333-5.822c2.429-3.08 4.415-5.711 4.415-5.846s-2.453-2.385-5.451-5c-4.956-4.322-5.425-4.804-5.159-5.303.161-.301 1.835-3.1 3.719-6.219 1.883-3.12 3.425-5.773 3.425-5.897s-2.707-2.06-6.015-4.304c-4.623-3.134-5.977-4.178-5.851-4.51.09-.237 1.433-3.285 2.984-6.773s2.774-6.384 2.717-6.437c-.056-.052-3.012-1.548-6.569-3.325-3.556-1.777-6.463-3.321-6.459-3.43s.958-3.315 2.12-7.123c1.162-3.809 2.089-6.944 2.059-6.968-.029-.023-3.102-1.137-6.83-2.474-3.727-1.337-6.829-2.485-6.895-2.55-.065-.065.44-3.325 1.121-7.244s1.144-7.211 1.028-7.316-3.33-.883-7.144-1.729c-3.813-.846-6.964-1.562-7.002-1.591-.037-.029.1-3.341.306-7.362.206-4.02.344-7.341.307-7.382-.037-.04-3.323-.407-7.301-.817s-7.278-.797-7.333-.86c-.055-.064-.327-3.356-.605-7.316l-.505-7.2-7.397.058-7.397.059-.141-.592c-.124-.523-2.798-13.837-2.798-13.933 0-.021-3.248.438-7.217 1.021-4.142.608-7.307.959-7.429.823-.117-.13-1.193-3.266-2.392-6.97-1.198-3.703-2.282-6.733-2.407-6.733-.126 0-3.327.839-7.115 1.864-3.788 1.024-6.969 1.774-7.07 1.666s-1.539-3.077-3.195-6.597-3.033-6.435-3.059-6.477c-.027-.043-3.15 1.2-6.94 2.761-3.79 1.562-6.928 2.737-6.972 2.611-.148-.412-7.667-12.131-7.816-12.18-.08-.026-2.979 1.542-6.443 3.485-3.464 1.944-6.352 3.534-6.419 3.534-.095 0-5.074-5.947-9.024-10.777-.42-.513-.585-.415-5.867 3.487-2.989 2.209-5.705 4.181-6.034 4.382-.567.348-.735.234-3.2-2.174-4.642-4.535-7.773-7.452-7.989-7.443-.117.005-2.552 2.224-5.412 4.932m19.51 138.632c1.543.573 3.052 2.009 3.793 3.609.554 1.199.564 1.517.637 20.218l.073 19h-4.673-4.674v-7.066-7.067h-3.2-3.2v7.067 7.066h-4.666-4.667v-18.485c0-21.963.033-22.188 3.545-23.888 2.465-1.194 14.195-1.506 17.032-.454m32.8.001c3.186 1.181 4.308 3.36 4.443 8.626l.097 3.8h-4.425-4.425v-2.918c0-3.625-.11-3.748-3.342-3.748-3.396 0-3.075-1.704-2.995 15.866l.07 15.2 2.761.077c3.649.1 3.506.268 3.506-4.109v-3.568h4.422 4.423l-.091 4.467c-.177 8.689-1.592 9.8-12.488 9.8h-6.533l-1.528-.75c-4.002-1.966-4.037-2.137-4.143-20.341-.134-23.139-.159-23.096 13.004-22.936 4.898.06 6.229.158 7.244.534m32-.001c1.543.573 3.052 2.009 3.793 3.609.554 1.199.564 1.517.637 20.218l.073 19h-4.673-4.674v-7.066-7.067h-3.2-3.2v7.067 7.066h-4.666-4.667v-18.485c0-21.963.033-22.188 3.545-23.888 2.465-1.194 14.195-1.506 17.032-.454m-153.377 21.494v21.333h-4.667-4.666v-21.333-21.333h4.666 4.667zm28.8-17.333v4h-3.467-3.466v17.333 17.333h-4.667-4.667v-17.333-17.333h-3.466-3.467v-4-4h11.6 11.6zm14.667 4.933v8.933h3.6 3.6v-8.933-8.933h4.666 4.667v21.333 21.333h-4.667-4.666v-8.266-8.267h-3.6-3.6v8.267 8.266h-4.667-4.667v-21.333-21.333h4.667 4.667zm34.285-2.914c-.36.36-.419 1.439-.419 7.733v7.314h3.2 3.2v-7.314c0-8.728.226-8.152-3.2-8.152-1.791 0-2.463.101-2.781.419m64.8 0c-.36.36-.419 1.439-.419 7.733v7.314h3.2 3.2v-7.314c0-8.728.226-8.152-3.2-8.152-1.791 0-2.463.101-2.781.419m-182.128 71.072c2.564 1.32 3.72 3.687 3.518 7.206-.533 9.287-13.558 8.644-13.615-.672-.035-5.674 5.194-9.057 10.097-6.534m29.882-.206c.436.225 1.18.805 1.652 1.288l.859.878-.609.465c-1.021.781-2.155 1.177-2.281.797-.323-.968-2.711-1.415-3.734-.698-1.383.968-.337 2.025 2.34 2.365 6.179.782 6.179 8.322 0 8.882-2.075.188-3.842-.322-5.121-1.477-1.298-1.173-1.274-1.476.19-2.334l1.201-.704.941.826c1.607 1.411 4.123 1.028 4.123-.626 0-.856-.483-1.173-2.289-1.507-3.903-.722-5.644-2.945-4.654-5.945.778-2.359 4.779-3.557 7.382-2.21m14.627.117c4.987 2.566 4.999 10.625.02 13.185-3.565 1.833-8.328.016-9.578-3.653-2.234-6.556 3.748-12.522 9.558-9.532m100.028-.434c1.69.425 3.489 2.131 3.972 3.765l.375 1.267h-1.594c-1.431 0-1.618-.065-1.834-.632-1.014-2.667-5.349-2.256-6.137.582-1.455 5.237 3.813 9.365 6.072 4.759.318-.65.481-.709 1.938-.709h1.59l-.165.733c-1.262 5.593-9.553 6.179-12.259.867-2.907-5.707 1.974-12.16 8.042-10.632m48.591.517c6.732 3.364 3.94 14.383-3.493 13.787-4.042-.325-6.454-3.098-6.441-7.406.017-5.58 5.057-8.818 9.934-6.381m-177.285.915v1.466h-3.2-3.2v1.467 1.467h2.4 2.4v1.333 1.333h-2.4-2.4v2.8 2.8h-1.6-1.6v-7.066-7.067h4.8 4.8zm37.866 3.69.134 5.024.748.643c.801.688 1.995.834 2.892.355 1.052-.564 1.293-1.801 1.293-6.637v-4.542h1.6 1.6v4.752c0 5.56-.262 6.7-1.872 8.155-2.526 2.281-6.726 1.852-8.661-.886l-.8-1.132-.087-5.458-.086-5.459 1.553.081 1.553.08zm21.867-3.824v1.334h-2.133-2.134v5.733 5.733h-1.6-1.6v-5.733-5.733h-2.133-2.133v-1.334-1.333h5.866 5.867zm5.333 1.467v2.8h2.267 2.267v-2.8-2.8h1.6 1.6v7.067 7.066h-1.6-1.6v-2.8-2.8h-2.267-2.267v2.8 2.8h-1.6-1.6v-7.066-7.067h1.6 1.6zm23.379-2.198c1.959 1.058 2.694 3.6 1.505 5.208l-.583.789.789.756c1.822 1.746 1.53 4.496-.63 5.926-1.041.689-1.254.723-5.173.81l-4.087.09v-7.116-7.116l3.667.098c2.813.075 3.864.205 4.512.555m14.969.798-.081 1.4-3.267.075-3.266.075v1.325 1.325h2.533 2.533v1.467 1.466h-2.533-2.533v1.325 1.326l3.266.074 3.267.075.081 1.4.08 1.4h-4.947-4.947v-7.066-7.067h4.947 4.947zm12.632 5.667 2.538 7.066h-1.671-1.67l-.443-1.333-.443-1.333h-2.491-2.49l-.443 1.333-.443 1.333h-1.674-1.675l2.494-7c1.372-3.85 2.495-7.03 2.496-7.066.001-.037.761-.067 1.689-.067h1.688zm22.62-4.267v2.8h2.267 2.267v-2.8-2.8h1.6 1.6v7.067 7.066h-1.6-1.6v-2.8-2.8h-2.267-2.267v2.8 2.8h-1.6-1.6v-7.066-7.067h1.6 1.6zm18.4 0v2.8h2.267 2.267v-2.8-2.8h1.6 1.6v7.067 7.066h-1.6-1.6v-2.8-2.8h-2.267-2.267v2.8 2.8h-1.6-1.6v-7.066-7.067h1.6 1.6zm37.334-1.467v1.334h-2.134-2.133v5.733 5.733h-1.6-1.6v-5.733-5.733h-2.133-2.134v-1.334-1.333h5.867 5.867zm11.947.067-.081 1.4-3.266.075-3.267.075v1.325 1.325h2.533 2.534v1.467 1.466h-2.534-2.533v1.325 1.326l3.267.074 3.266.075.081 1.4.081 1.4h-4.948-4.947v-7.066-7.067h4.947 4.948zm5.919 4.192v5.591l3.134.075 3.133.075.081 1.4.08 1.4h-4.814-4.814v-7.066-7.067h1.6 1.6zm-231.996-2.976c-4.38.688-3.811 8.94.616 8.94 2.25 0 3.647-1.719 3.647-4.489 0-2.965-1.794-4.838-4.263-4.451m44.514.059c-4.379 1.185-3.747 8.881.729 8.881 2.216 0 3.656-1.762 3.65-4.466-.008-3.072-1.983-5.063-4.379-4.415m148.553.018c-2.842.608-3.849 5.148-1.707 7.694 2.296 2.729 6.236.632 6.236-3.32 0-2.97-2.012-4.913-4.529-4.374m-89.871 1.574v1.6h1.274c2.201 0 3.276-1.341 2.055-2.563-.504-.504-.92-.637-1.983-.637h-1.346zm27.643 2.004c-.902 2.709-.957 2.529.775 2.529 1.384 0 1.473-.038 1.309-.556-.097-.306-.446-1.354-.775-2.33l-.599-1.774zm-27.643 3.596v1.6h1.674c2.012 0 2.86-.473 2.86-1.596 0-1.248-.597-1.604-2.686-1.604h-1.848z"
          fill="#ecab9b"
        />
        <path
          d="m88.733 63.922c.33.063.87.063 1.2 0 .33-.064.06-.116-.6-.116s-.93.052-.6.116m221.471.003c.405.061 1.005.059 1.333-.004s-.004-.113-.737-.111-1.002.053-.596.115m-106.671 94.94c1.43.048 3.77.048 5.2 0 1.43-.047.26-.087-2.6-.087s-4.03.04-2.6.087m33.2 0c1.357.049 3.577.049 4.934 0 1.356-.048.246-.088-2.467-.088s-3.823.04-2.467.088m31.6 0c1.43.048 3.77.048 5.2 0 1.43-.047.26-.087-2.6-.087s-4.03.04-2.6.087m-65.54 14.602.007 7.2 3.2.012 3.2.012-3.129-.087-3.129-.087-.078-7.125-.078-7.125zm64.8 0 .007 7.2 3.2.012 3.2.012-3.129-.087-3.129-.087-.078-7.125-.078-7.125zm-40.802 7.333c0 7.7.034 10.85.075 7 .042-3.85.042-10.15 0-14-.041-3.85-.075-.7-.075 7m-93.924-13.402c.99.051 2.61.051 3.6 0 .99-.052.18-.094-1.8-.094s-2.79.042-1.8.094m16.266 0c.99.051 2.61.051 3.6 0 .99-.052.18-.094-1.8-.094s-2.79.042-1.8.094m53.654 20.673c-.071.186-.095 3.456-.054 7.267l.076 6.929.062-7.125.062-7.126 3.267-.083 3.267-.084-3.275-.058c-2.44-.043-3.308.028-3.405.28m64.8 0c-.071.186-.095 3.456-.054 7.267l.076 6.929.062-7.125.062-7.126 3.267-.083 3.267-.084-3.275-.058c-2.44-.043-3.308.028-3.405.28m-30.987 14.794c1.43.048 3.77.048 5.2 0 1.43-.047.26-.087-2.6-.087s-4.03.04-2.6.087m142.464 8.402-4.797 4.866 4.866-4.797c4.522-4.457 4.987-4.936 4.798-4.936-.039 0-2.229 2.19-4.867 4.867m-234.156 28.866c0 2.347.041 3.271.091 2.054.049-1.217.049-3.137-.001-4.266-.05-1.13-.09-.134-.09 2.212m21.858-1.333c.001 1.613.045 2.239.098 1.39.053-.848.053-2.168-.001-2.933s-.097-.07-.097 1.543m28.817 4.4c0 3.887.037 5.477.083 3.533.046-1.943.046-5.123 0-7.066-.046-1.944-.083-.354-.083 3.533m102.933 0c0 3.887.038 5.477.083 3.533.046-1.943.046-5.123 0-7.066-.045-1.944-.083-.354-.083 3.533m12.534 0c0 3.887.037 5.477.083 3.533.045-1.943.045-5.123 0-7.066-.046-1.944-.083-.354-.083 3.533m-22.137 1.333c0 3.154.039 4.444.086 2.867s.047-4.157 0-5.733c-.047-1.577-.086-.287-.086 2.866m2.934 0c0 3.154.038 4.444.085 2.867s.047-4.157 0-5.733c-.047-1.577-.085-.287-.085 2.866m-59.376-3.54c.48.06 1.2.058 1.6-.002.401-.061.009-.11-.871-.108-.88.001-1.208.051-.729.11m-32.671.803c.697.055 1.837.055 2.533 0 .697-.055.127-.1-1.266-.1-1.394 0-1.964.045-1.267.1m102.933 0c.697.055 1.837.055 2.534 0 .696-.055.126-.1-1.267-.1s-1.963.045-1.267.1m-135.967 5.537c.001 1.614.045 2.239.098 1.391.053-.849.053-2.169-.001-2.934-.054-.764-.097-.07-.097 1.543m46.834-2.533-1.733.175 1.651.046c.908.025 1.725-.074 1.815-.221.091-.147.128-.246.083-.221-.046.026-.863.125-1.816.221m-27.667 2.858c.404.061 1.064.061 1.467 0s.073-.111-.733-.111c-.807 0-1.137.05-.734.111m19.214 1.142c0 .807.05 1.137.111.733.061-.403.061-1.063 0-1.466-.061-.404-.111-.074-.111.733m102.933 0c0 .807.05 1.137.111.733.061-.403.061-1.063 0-1.466-.061-.404-.111-.074-.111.733m12.267 0c0 .807.05 1.137.111.733.061-.403.061-1.063 0-1.466-.061-.404-.111-.074-.111.733m-253.318 72.533c0 1.394.045 1.964.1 1.267s.055-1.837 0-2.533c-.055-.697-.1-.127-.1 1.266"
          fill="#8f8478"
        />
        <path
          d="m194.25 20.867-.783.866.866-.783c.477-.431.867-.821.867-.867 0-.206-.22-.024-.95.784m13.483 1.933c.498.513.965.933 1.038.933.074 0-.273-.42-.771-.933s-.965-.933-1.038-.933.274.42.771.933m-132.174 41.078c-.087.226-.083.486.008.578.092.091.166-.029.166-.267 0-.359.383-.45 2.2-.524l2.2-.09-2.208-.054c-1.779-.044-2.239.026-2.366.357m245.708-.216c.623.056 1.643.056 2.266 0 .624-.056.114-.102-1.133-.102s-1.757.046-1.133.102m-261.472 17.671c0 .514.055.724.122.467s.067-.677 0-.933c-.067-.257-.122-.047-.122.466m.267 5.334c0 .513.055.723.122.466.067-.256.067-.676 0-.933s-.122-.047-.122.467m279.733 2.666c0 .514.055.724.122.467s.067-.677 0-.933c-.067-.257-.122-.047-.122.466m-214.335 91.467c0 11.807.033 16.637.073 10.733.04-5.903.04-15.563 0-21.466-.04-5.904-.073-1.074-.073 10.733m28.78-17.467c0 2.2.042 3.065.092 1.921.05-1.143.05-2.943-.001-4-.05-1.056-.091-.121-.091 2.079m5.62 17.467c0 11.807.033 16.637.073 10.733.04-5.903.04-15.563 0-21.466-.04-5.904-.073-1.074-.073 10.733m16.526-12.4c0 4.987.036 6.989.08 4.45.044-2.54.044-6.62 0-9.067s-.08-.37-.08 4.617m33.065 5.067c0 4.106.037 5.749.082 3.65s.045-5.459 0-7.466c-.046-2.008-.083-.291-.082 3.816m64.8 0c0 4.106.037 5.749.082 3.65s.045-5.459 0-7.466c-.046-2.008-.083-.291-.082 3.816m-97.865 20.266c0 4.694.036 6.576.08 4.184.045-2.393.044-6.233 0-8.534s-.08-.343-.08 4.35m33.064 1.2c0 4.034.037 5.684.083 3.667.045-2.017.045-5.317 0-7.333-.046-2.017-.083-.367-.083 3.666m64.8 0c0 4.034.037 5.684.083 3.667.045-2.017.045-5.317 0-7.333-.046-2.017-.083-.367-.083 3.666m-179.65 41.266c1.357.048 3.577.048 4.933 0 1.357-.049.247-.088-2.466-.088-2.714 0-3.824.039-2.467.088m42.671-.006c.48.06 1.2.058 1.6-.002.401-.061.009-.11-.871-.108-.88.001-1.208.051-.729.11m9.055-.005 1.394.106.084 3.987.084 3.986-.011-4.067-.01-4.067-1.467-.025-1.467-.026zm9.193.009 5.786.08.108 1.261.108 1.262-.027-1.333-.027-1.334-5.867-.008-5.867-.008zm8.335.141c-.072.186-.096 3.396-.054 7.133l.076 6.796.062-6.986.062-6.986 1.4-.098 1.4-.098-1.408-.05c-.93-.032-1.453.066-1.538.289m8.617-.145c.48.06 1.2.058 1.6-.002.401-.061.009-.11-.871-.108-.88.001-1.208.051-.729.11m11.062.004c.844.053 2.224.053 3.067 0s.153-.096-1.533-.096c-1.687 0-2.377.043-1.534.096m14.387.001c1.276.049 3.436.049 4.8.001 1.364-.049.32-.089-2.32-.089s-3.756.04-2.48.088m14.613-.047c.896.2 2.874.235 2.759.049-.068-.11-.806-.186-1.641-.169s-1.338.071-1.118.12m25.538.042c.48.06 1.2.058 1.6-.002.401-.061.009-.11-.871-.108-.88.001-1.208.051-.729.11m8.525.003 1.395.098.076 6.986.076 6.987.062-7.134.062-7.133-1.534.049-1.533.05zm9.875-.003c.48.06 1.2.058 1.6-.002.401-.061.009-.11-.871-.108-.88.001-1.208.051-.729.11m8.525.003 1.395.098.076 6.986.076 6.987.062-7.134.062-7.133-1.534.049-1.533.05zm19.585 1.204.048 1.4.1-1.262.1-1.261 5.785-.077 5.786-.078-5.933-.061-5.934-.061zm16.272-1.202c1.276.049 3.436.049 4.8.001 1.364-.049.32-.089-2.32-.089s-3.756.04-2.48.088m11.608-.002 1.395.098.078 5.653.077 5.653.061-5.8.061-5.8-1.533.049-1.533.05zm-126.794 2.395c.403.061 1.063.061 1.466 0 .404-.061.074-.111-.733-.111s-1.137.05-.733.111m-88.789.274c.996.051 2.556.051 3.466-.001.911-.052.096-.094-1.811-.094-1.906.001-2.651.043-1.655.095m101.607 1.402c0 .953.049 1.343.108.866.059-.476.059-1.256 0-1.733s-.108-.087-.108.867m102.934 0c0 .953.048 1.343.107.866.059-.476.059-1.256 0-1.733s-.107-.087-.107.867m-147.172 4.266c0 3.154.038 4.444.085 2.867s.047-4.157 0-5.733c-.047-1.577-.085-.287-.085 2.866m13.82-2.737c.696.055 1.836.055 2.533 0s.127-.1-1.267-.1c-1.393 0-1.963.045-1.266.1m73.608 0c.701.055 1.781.055 2.4-.001s.045-.101-1.275-.1c-1.32 0-1.826.046-1.125.101m18.4 0c.701.055 1.781.055 2.4-.001s.045-.101-1.275-.1c-1.32 0-1.826.046-1.125.101m-163.599.268c.775.054 1.975.053 2.666-.002.692-.054.058-.099-1.409-.098-1.466.001-2.032.046-1.257.1m89.324-.009c.33.063.87.063 1.2 0 .33-.064.06-.116-.6-.116s-.93.052-.6.116m17.743 1.012c.002.733.054 1.001.115.596s.06-1.005-.004-1.333c-.063-.328-.113.003-.111.737m102.933 0c.002.733.054 1.001.115.596.062-.405.06-1.005-.003-1.333-.064-.328-.114.003-.112.737m-138.534 1.397c.775.054 1.975.053 2.667-.002.692-.054.058-.099-1.409-.098s-2.033.046-1.258.1m30.543 1.403c0 .953.049 1.343.108.866.059-.476.059-1.256 0-1.733s-.108-.087-.108.867m43.057-1.403c.775.054 1.975.053 2.667-.002.692-.054.058-.099-1.409-.098s-2.033.046-1.258.1m18.4 0c.775.054 1.975.053 2.667-.002.692-.054.058-.099-1.409-.098s-2.033.046-1.258.1m41.477 1.403c0 .953.048 1.343.107.866.059-.476.059-1.256 0-1.733s-.107-.087-.107.867m-68.948-.607c.48.059 1.2.058 1.6-.003.401-.061.009-.109-.871-.108-.88.002-1.208.052-.729.111m-21.363 2.14c-.068.11 1.113.2 2.625.2s2.694-.09 2.626-.2-1.25-.2-2.626-.2-2.557.09-2.625.2m-98.241 2.917c.256.067.676.067.933 0s.047-.122-.467-.122c-.513 0-.723.055-.466.122m220.282 65.016c.002.88.052 1.208.111.729s.058-1.199-.003-1.6-.109-.009-.108.871m-266.097 10.934.015 2.4 1.135.026 1.135.026-1.059-.108-1.058-.107-.092-2.319-.091-2.318zm6.615 2.717c.256.067.676.067.933 0s.047-.122-.467-.122c-.513 0-.723.055-.466.122m252.266 0c.257.067.677.067.934 0 .256-.067.046-.122-.467-.122s-.723.055-.467.122m-246.666.266c.256.068.676.068.933 0 .257-.067.047-.121-.467-.121-.513 0-.723.054-.466.121m240.8 0c.256.068.676.068.933 0 .257-.067.047-.121-.467-.121-.513 0-.723.054-.466.121"
          fill="#738474"
        />
        <path
          d="m86.2 63.924c.403.061 1.063.061 1.467 0 .403-.061.073-.111-.734-.111-.806 0-1.136.05-.733.111m226.404.001c.405.061 1.005.059 1.333-.004s-.004-.113-.737-.111-1.002.053-.596.115m-76.479 116.875c0 8.14.033 11.47.075 7.4.041-4.07.041-10.73 0-14.8-.042-4.07-.075-.74-.075 7.4m8.755-9.135c1.29.049 3.33.049 4.533 0s.147-.09-2.346-.089c-2.494 0-3.478.04-2.187.089m-74.158 13.866c.983.051 2.663.051 3.733.001 1.07-.051.265-.093-1.788-.093-2.054-.001-2.929.041-1.945.092m67.486 10.932c.701.055 1.781.054 2.4-.001.619-.056.045-.101-1.275-.101-1.32.001-1.826.047-1.125.102m-66.642 42.337c.001 1.613.045 2.239.098 1.39.053-.848.053-2.168-.001-2.933s-.097-.07-.097 1.543m33.547-1.542-.046 1.392-3.267.084-3.267.084 3.275.058c3.67.064 3.627.087 3.455-1.845-.103-1.158-.103-1.157-.15.227m35.253 1.542c.001 1.613.045 2.239.098 1.39.053-.848.053-2.168-.001-2.933s-.097-.07-.097 1.543m4.8 0c.001 1.613.045 2.239.098 1.39.053-.848.053-2.168-.001-2.933s-.097-.07-.097 1.543m13.6 0c.001 1.613.045 2.239.098 1.39.053-.848.053-2.168-.001-2.933s-.097-.07-.097 1.543m4.8 0c.001 1.613.045 2.239.098 1.39.053-.848.053-2.168-.001-2.933s-.097-.07-.097 1.543m44.481-1.542-.047 1.392-3.267.084-3.266.084 3.275.058c3.669.064 3.627.087 3.455-1.845-.103-1.158-.104-1.157-.15.227m-168.471 3.409c-.001 2.493.04 3.549.089 2.346s.049-3.243 0-4.533c-.049-1.291-.089-.307-.089 2.187m17.604 3.733c.001 3.227.039 4.51.086 2.852s.047-4.298 0-5.867c-.048-1.568-.086-.212-.086 3.015m27.972-4.133c0 .953.048 1.343.108.866.059-.476.059-1.256 0-1.733-.06-.477-.108-.087-.108.867m-89.869.133c.001.88.051 1.208.11.729.06-.48.058-1.2-.002-1.6-.061-.401-.11-.009-.108.871m38.923 2.533c0 .66.052.93.116.6.063-.33.063-.87 0-1.2-.064-.33-.116-.06-.116.6m-47.739.134c.003.586.058.795.122.463.063-.331.061-.811-.006-1.066s-.119.016-.116.603m98.709 1.298c-.077.201-.095 1.011-.04 1.8l.099 1.435.049-1.653.049-1.654 1.534-.096 1.533-.096-1.542-.051c-1.095-.035-1.582.056-1.682.315m14.766.099c.775.054 1.975.053 2.667-.002.692-.054.058-.099-1.409-.098s-2.033.046-1.258.1m102.934 0c.775.054 1.975.053 2.666-.002.692-.054.058-.099-1.409-.098-1.466.001-2.032.046-1.257.1m-207.576 2.869c0 1.614.044 2.239.097 1.391.053-.849.053-2.169-.001-2.934-.053-.764-.097-.07-.096 1.543m76.266 0c.001 1.614.045 2.239.098 1.391.053-.849.053-2.169-.001-2.934-.054-.764-.097-.07-.097 1.543m68.8 0c.001 1.614.045 2.239.098 1.391.053-.849.053-2.169-.001-2.934-.054-.764-.097-.07-.097 1.543m4.8 0c.001 1.614.045 2.239.098 1.391.053-.849.053-2.169-.001-2.934-.054-.764-.097-.07-.097 1.543m13.6 0c.001 1.614.045 2.239.098 1.391.053-.849.053-2.169-.001-2.934-.054-.764-.097-.07-.097 1.543m4.8 0c.001 1.614.045 2.239.098 1.391.053-.849.053-2.169-.001-2.934-.054-.764-.097-.07-.097 1.543m-63.366.064c.917.053 2.417.053 3.333 0 .917-.052.167-.094-1.666-.094-1.834 0-2.584.042-1.667.094m102.933 0c.917.053 2.417.053 3.334 0 .916-.052.166-.094-1.667-.094s-2.583.042-1.667.094m12.544.001c.923.052 2.363.052 3.2-.001.838-.053.083-.096-1.677-.095-1.76 0-2.445.043-1.523.096m-248.646 69.002c0 1.467.045 2.033.099 1.258s.054-1.975-.001-2.667-.099-.058-.098 1.409"
          fill="#b48474"
        />
      </g>
    </svg>
  )
}
