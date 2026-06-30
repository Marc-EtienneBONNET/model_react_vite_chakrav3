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
				bg: "colorPalette.10",
				color: "white",
				borderColor: "colorPalette.10",
				_hover: { bg: "colorPalette.8" },
			},
			outline: {
				bg: "transparent",
				color: "colorPalette.10",
				borderColor: "colorPalette.10",
				_hover: { bg: "colorPalette.2" },
			},
			ghost: {
				bg: "transparent",
				color: "colorPalette.10",
				borderColor: "transparent",
				_hover: { bg: "colorPalette.2" },
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
