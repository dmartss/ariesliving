export default function withIcon(icon) {
  return ({ size = 24, height, width, onClick, className }) => (
    <svg
      width={width ?? size}
      height={height ?? size}
      fill="currentColor"
      onClick={onClick}
      className={className}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  )
}
