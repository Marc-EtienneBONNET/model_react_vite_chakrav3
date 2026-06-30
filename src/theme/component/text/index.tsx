import { defineTextStyles } from "@chakra-ui/react";

const sizes = {
	xxs: { fontSize: "2xs", lineHeight: "normal" },
	xs: { fontSize: "xs", lineHeight: "normal" },
	sm: { fontSize: "sm", lineHeight: "normal" },
	md: { fontSize: "md", lineHeight: "normal" },
	lg: { fontSize: "lg", lineHeight: "normal" },
	xl: { fontSize: "xl", lineHeight: "normal" },
	xxl: { fontSize: "2xl", lineHeight: "normal" },
	xxxl: { fontSize: "3xl", lineHeight: "normal" },
	xxxxl: { fontSize: "4xl", lineHeight: "normal" },
} as const;

const weights = {
	Light: "300",
	Normal: "400",
	Medium: "500",
	SemiBold: "600",
	Bold: "700",
} as const;

const entries: Record<
	string,
	{ value: { fontSize: string; lineHeight: string; fontWeight: string } }
> = {};

for (const [sizeName, sizeValue] of Object.entries(sizes)) {
	for (const [weightName, weightValue] of Object.entries(weights)) {
		entries[`${sizeName}${weightName}`] = {
			value: {
				fontSize: sizeValue.fontSize,
				lineHeight: sizeValue.lineHeight,
				fontWeight: weightValue,
			},
		};
	}
}

export const textStylesChakra = defineTextStyles(entries);
