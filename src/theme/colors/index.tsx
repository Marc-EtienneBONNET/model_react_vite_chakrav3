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
		default: primary[10],
	},
	secondary: {
		...secondary,
		default: secondary[10],
	},
	success: {
		...success,
		default: success[10],
	},
	destructive: {
		...destructive,
		default: destructive[10],
	},
	warning: {
		...warning,
		default: warning[10],
	},
	dark: {
		...dark,
		default: dark[10],
	},
	ligth: {
		...light,
		default: light[10],
	},
	black: {
		...black,
		default: black[10],
	},
	white: {
		...white,
		default: white[10],
	},
	red: {
		...red,
		default: red[10],
	},
	blue: {
		...blue,
		default: blue[10],
	},
	gray: {
		...gray,
		default: gray[10],
	},
	green: {
		...green,
		default: green[10],
	},
	orange: {
		...orange,
		default: orange[10],
	},
	purple: {
		...purple,
		default: purple[10],
	},
	pink: {
		...pink,
		default: pink[10],
	},
};
