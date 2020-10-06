export default function withIcon(icon) {
  return ({ size = 24, height, width, onClick, className, color = 'currentColor' }) => (
    <svg
      width={width ?? size}
      height={height ?? size}
      fill={color}
      onClick={onClick}
      className={className}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  )
}
