import { FC } from 'react'

interface ArrowUpProps {
	color?: string
}

export const ArrowUp: FC<ArrowUpProps> = ({ color }) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M2 11L8 5L14 11' stroke={color ?? 'currentColor'} />
		</svg>
	)
}
