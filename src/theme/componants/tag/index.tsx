import { defineSlotRecipe } from "@chakra-ui/react";
import { EnumColors } from "../../color";
import type { EnumTagColor } from "./enum/color";
import { EnumTagSize } from "./enum/size";
import { EnumTagVariant } from "./enum/variant";

export const tagSlotRecipe = defineSlotRecipe({
	slots: ["root", "label", "closeTrigger", "startElement", "endElement"],
	base: {
		root: {
			fontWeight: "500",
			borderRadius: "1rem",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
		},
	},
	variants: {
		variant: {
			solid: {},
			subtle: {},
			surface: {},
			outline: {},
		},
		size: {
			sm: {
				root: { fontSize: "sm" },
			},
			md: {
				root: { fontSize: "md" },
			},
			lg: {
				root: { fontSize: "lg" },
			},
			xl: {
				root: { fontSize: "xl" },
			},
		},
		colorScheme: {
			primary: {},
			secondary: {},
			destructive: {},
			success: {},
			warning: {},
			purple: {},
			orange: {},
			green: {},
			gray: {},
		},
	},
	compoundVariants: [
		// PRIMARY
		{
			variant: "solid",
			colorScheme: "primary",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.primary.DEFAULT,
					borderColor: EnumColors.primary.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "primary",
			css: {
				root: {
					color: EnumColors.primary.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.primary.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "primary",
			css: {
				root: {
					color: EnumColors.primary.DEFAULT,
					backgroundColor: EnumColors.primary[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "primary",
			css: {
				root: {
					color: EnumColors.primary.DEFAULT,
					backgroundColor: EnumColors.primary[1],
					borderWidth: "1px",
					borderColor: EnumColors.primary[3],
				},
			},
		},
		// SECONDARY
		{
			variant: "solid",
			colorScheme: "secondary",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.secondary.DEFAULT,
					borderColor: EnumColors.secondary.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "secondary",
			css: {
				root: {
					color: EnumColors.secondary.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.secondary.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "secondary",
			css: {
				root: {
					color: EnumColors.secondary.DEFAULT,
					backgroundColor: EnumColors.secondary[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "secondary",
			css: {
				root: {
					color: EnumColors.secondary.DEFAULT,
					backgroundColor: EnumColors.secondary[1],
					borderWidth: "1px",
					borderColor: EnumColors.secondary[3],
				},
			},
		},
		// DESTRUCTIVE
		{
			variant: "solid",
			colorScheme: "destructive",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.destructive.DEFAULT,
					borderColor: EnumColors.destructive.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "destructive",
			css: {
				root: {
					color: EnumColors.destructive.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.destructive.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "destructive",
			css: {
				root: {
					color: EnumColors.destructive.DEFAULT,
					backgroundColor: EnumColors.destructive[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "destructive",
			css: {
				root: {
					color: EnumColors.destructive.DEFAULT,
					backgroundColor: EnumColors.destructive[1],
					borderWidth: "1px",
					borderColor: EnumColors.destructive[3],
				},
			},
		},
		// SUCCESS
		{
			variant: "solid",
			colorScheme: "success",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.success.DEFAULT,
					borderColor: EnumColors.success.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "success",
			css: {
				root: {
					color: EnumColors.success.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.success.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "success",
			css: {
				root: {
					color: EnumColors.success.DEFAULT,
					backgroundColor: EnumColors.success[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "success",
			css: {
				root: {
					color: EnumColors.success.DEFAULT,
					backgroundColor: EnumColors.success[1],
					borderWidth: "1px",
					borderColor: EnumColors.success[3],
				},
			},
		},
		// WARNING
		{
			variant: "solid",
			colorScheme: "warning",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.warning.DEFAULT,
					borderColor: EnumColors.warning.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "warning",
			css: {
				root: {
					color: EnumColors.warning.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.warning.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "warning",
			css: {
				root: {
					color: EnumColors.warning.DEFAULT,
					backgroundColor: EnumColors.warning[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "warning",
			css: {
				root: {
					color: EnumColors.warning.DEFAULT,
					backgroundColor: EnumColors.warning[1],
					borderWidth: "1px",
					borderColor: EnumColors.warning[3],
				},
			},
		},
		// PURPLE
		{
			variant: "solid",
			colorScheme: "purple",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.purple.DEFAULT,
					borderColor: EnumColors.purple.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "purple",
			css: {
				root: {
					color: EnumColors.purple.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.purple.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "purple",
			css: {
				root: {
					color: EnumColors.purple.DEFAULT,
					backgroundColor: EnumColors.purple[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "purple",
			css: {
				root: {
					color: EnumColors.purple.DEFAULT,
					backgroundColor: EnumColors.purple[1],
					borderWidth: "1px",
					borderColor: EnumColors.purple[3],
				},
			},
		},
		// ORANGE
		{
			variant: "solid",
			colorScheme: "orange",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.orange.DEFAULT,
					borderColor: EnumColors.orange.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "orange",
			css: {
				root: {
					color: EnumColors.orange.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.orange.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "orange",
			css: {
				root: {
					color: EnumColors.orange.DEFAULT,
					backgroundColor: EnumColors.orange[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "orange",
			css: {
				root: {
					color: EnumColors.orange.DEFAULT,
					backgroundColor: EnumColors.orange[1],
					borderWidth: "1px",
					borderColor: EnumColors.orange[3],
				},
			},
		},
		// GREEN
		{
			variant: "solid",
			colorScheme: "green",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.green.DEFAULT,
					borderColor: EnumColors.green.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "green",
			css: {
				root: {
					color: EnumColors.green.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.green.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "green",
			css: {
				root: {
					color: EnumColors.green.DEFAULT,
					backgroundColor: EnumColors.green[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "green",
			css: {
				root: {
					color: EnumColors.green.DEFAULT,
					backgroundColor: EnumColors.green[1],
					borderWidth: "1px",
					borderColor: EnumColors.green[3],
				},
			},
		},
		// GRAY
		{
			variant: "solid",
			colorScheme: "gray",
			css: {
				root: {
					color: EnumColors.white.DEFAULT,
					backgroundColor: EnumColors.gray.DEFAULT,
					borderColor: EnumColors.gray.DEFAULT,
				},
			},
		},
		{
			variant: "outline",
			colorScheme: "gray",
			css: {
				root: {
					color: EnumColors.gray.DEFAULT,
					backgroundColor: "transparent",
					borderWidth: "1px",
					borderColor: EnumColors.gray.DEFAULT,
				},
			},
		},
		{
			variant: "subtle",
			colorScheme: "gray",
			css: {
				root: {
					color: EnumColors.gray.DEFAULT,
					backgroundColor: EnumColors.gray[2],
					borderColor: "transparent",
				},
			},
		},
		{
			variant: "surface",
			colorScheme: "gray",
			css: {
				root: {
					color: EnumColors.gray.DEFAULT,
					backgroundColor: EnumColors.gray[1],
					borderWidth: "1px",
					borderColor: EnumColors.gray[3],
				},
			},
		},
	],
	defaultVariants: {
		colorScheme: EnumColors.primary.DEFAULT as EnumTagColor,
		variant: EnumTagVariant.SOLID,
		size: EnumTagSize.M,
	},
});
