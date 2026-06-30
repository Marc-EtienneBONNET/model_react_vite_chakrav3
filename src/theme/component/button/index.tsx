import { defineRecipe } from "@chakra-ui/react";
import { EnumButtonSize } from "./enum/size";
import { EnumButtonVariant } from "./enum/variant";

export const buttonRecipe = defineRecipe({
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
		variant: EnumButtonVariant.outline,
		size: EnumButtonSize.m,
	},
});
