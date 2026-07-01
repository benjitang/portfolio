export const LinkArrowIcon = ({
  className = 'w-7',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 165 165"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-colors ${className}`}
    style={style}
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M109.168 41.25H41.25V20.625H144.375V123.75H123.75V55.8319L38.2285 141.353L23.6466 126.772L109.168 41.25Z"
      fill="currentColor"
    />
  </svg>
);