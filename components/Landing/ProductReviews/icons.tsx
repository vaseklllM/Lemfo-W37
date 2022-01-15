interface IProps {
  color?: string
  className?: string
}

export const MedalIcon = (props: IProps) => {
  const { color, className } = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className={className}>
      <path
        style={{ opacity: 0.4 }}
        fill={color}
        d='M127.18 0H16A16 16 0 0 0 2.92 25.18l111.27 159a207 207 0 0 1 109.56-53.39L154.62 15.54A32 32 0 0 0 127.18 0zM496 0H384.82a32 32 0 0 0-27.44 15.54l-69.13 115.21a207 207 0 0 1 109.56 53.38L509.08 25.18A16 16 0 0 0 496 0z'
      />
      <path
        fill={color}
        d='M256 160a176 176 0 1 0 176 176 176 176 0 0 0-176-176zm92.52 157.26l-37.93 37 9 52.22a11.48 11.48 0 0 1-16.65 12.09L256 393.88l-46.9 24.65a11.48 11.48 0 0 1-16.65-12.09l9-52.22-37.93-37a11.49 11.49 0 0 1 6.35-19.59l52.4-7.63 23.43-47.52a11.5 11.5 0 0 1 20.61 0L289.74 290l52.43 7.64a11.49 11.49 0 0 1 6.35 19.62z'
      />
    </svg>
  )
}

export const StarIcon = (props: IProps) => {
  const { className, color } = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' className={className}>
      <path
        fill={color}
        d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
      />
    </svg>
  )
}
