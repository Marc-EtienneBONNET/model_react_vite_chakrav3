import { black } from "./black";
import { blue } from "./blue";
import { dark } from "./dark";
import { destructive } from "./destructive";
import { gray } from "./gray";
import { green } from "./green";
import { light } from "./light";
import { orange } from "./orange";
import { pink } from "./pink";
import { primary } from "./primary";
import { purple } from "./purple";
import { red } from "./red";
import { secondary } from "./secondary";
import { success } from "./success";
import { warning } from "./warning";
import { white } from "./white";

export const colorsSemanticChakra = {
	background: {
		value: {
			base: "{colors.light.default}",
			_dark: "{colors.dark.default}",
		},
	},
	defaultText: {
		value: {
			base: "{colors.primary.default}",
			_dark: "{colors.white.default}",
		},
	},
};

export const colorsChakra = {
	primary: {
		...primary,
		default: primary.j,
	},
	secondary: {
		...secondary,
		default: secondary.j,
	},
	success: {
		...success,
		default: success.j,
	},
	destructive: {
		...destructive,
		default: destructive.j,
	},
	warning: {
		...warning,
		default: warning.j,
	},
	dark: {
		...dark,
		default: dark.j,
	},
	light: {
		...light,
		default: light.j,
	},
	black: {
		...black,
		default: black.j,
	},
	white: {
		...white,
		default: white.j,
	},
	red: {
		...red,
		default: red.j,
	},
	blue: {
		...blue,
		default: blue.j,
	},
	gray: {
		...gray,
		default: gray.j,
	},
	green: {
		...green,
		default: green.j,
	},
	orange: {
		...orange,
		default: orange.j,
	},
	purple: {
		...purple,
		default: purple.j,
	},
	pink: {
		...pink,
		default: pink.j,
	},
};
