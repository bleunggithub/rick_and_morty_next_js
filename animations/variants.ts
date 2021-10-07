import { transition } from "./defaultValues"

//variants
export const contentVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition,
	},
	exit: {
		opacity: 0,
		transition,
	},
}

export const overlayVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 0.6,
		transition,
	},
	exit: {
		opacity: 0,
		transition,
	},
}

export const SelectMenuAnimationProps = {
	initial: {
		scaleY: 0,
	},
	animate: {
		scaleY: 1,
	},
	exit: {
		scaleY: 0,
		opacity: 0,
	},
	style: {
		originY: 0,
	},
	transition,
}
