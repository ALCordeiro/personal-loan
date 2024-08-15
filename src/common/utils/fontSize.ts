import { css } from 'styled-components'

export default function fontSize(size: number) {
	return css`
		font-size: ${size}px;
		font-family: 'Albert Sans', sans-serif;
	`
}
