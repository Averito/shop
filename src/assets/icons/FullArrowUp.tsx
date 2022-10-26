import { FC } from 'react'

interface FullArrowUpProps {
	color?: string
}

export const FullArrowUp: FC<FullArrowUpProps> = ({ color }) => {
	return (
		<svg
			width='14'
			height='13'
			viewBox='0 0 14 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M1 7L7 1L13 7' stroke={color ?? 'currentColor'} />
			<line x1='7' y1='1' x2='7' y2='13' stroke={color ?? 'currentColor'} />
		</svg>
	)
}
