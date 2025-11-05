import { CardSkelton } from './card-skelton'

interface CardSkeltonListProps {
  size?: number
}

export const CardSkeltonList = ({ size = 10 }: CardSkeltonListProps) => {
  return (
    <>
      {Array(size)
        .fill('')
        .map((_, idx) => (
          <CardSkelton key={idx} />
        ))}
    </>
  )
}
