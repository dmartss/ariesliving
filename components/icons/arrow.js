const Arrow = ({ color, onClick, direction }) => {
  let d = 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
  if (direction === 'left')
    d =
      'M14,17.414l-4.707-4.707c-0.391-0.391-0.391-1.023,0-1.414L14,6.586L15.414,8l-4,4l4,4L14,17.414z'

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" onClick={onClick}>
      <g fill={color || '#000000'}>
        <path fill={color || '#000000'} d={d} />
      </g>
    </svg>
  )
}

export default Arrow
