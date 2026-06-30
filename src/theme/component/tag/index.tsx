import { defineRecipe } from "@chakra-ui/react";
import { EnumTagSize } from "./enum/size";
import { EnumTagVariant } from "./enum/variant";

export const tagRecipe = defineRecipe({
	base: {
		border: "1px solid",
		borderRadius: "0.5rem",
	},
	variants: {
		variant: {
			solid: {
				bg: "colorPalette.j",
				color: "white",
				borderColor: "colorPalette.j",
				_hover: { bg: "colorPalette.h" },
			},
			outline: {
				bg: "transparent",
				color: "colorPalette.j",
				borderColor: "colorPalette.j",
				_hover: { bg: "colorPalette.b" },
			},
			ghost: {
				bg: "transparent",
				color: "colorPalette.j",
				borderColor: "transparent",
				_hover: { bg: "colorPalette.b" },
			},
		},
		size: {
			xs: {
				fontSize: "xs",
				fontWeight: "500",
			},
			sm: {
				fontSize: "sm",
				fontWeight: "500",
			},
			md: {
				fontSize: "md",
				fontWeight: "500",
			},
			lg: {
				fontSize: "lg",
				fontWeight: "500",
			},
			xl: {
				fontSize: "xl",
				fontWeight: "500",
			},
		},
	},
	defaultVariants: {
		colorPalette: "primary",
		variant: EnumTagVariant.outline,
		size: EnumTagSize.m,
	},
});
