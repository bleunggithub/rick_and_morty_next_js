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
