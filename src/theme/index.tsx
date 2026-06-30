import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colorsChakra, colorsSemanticChakra } from "./colors";
import { buttonRecipe } from "./component/button";
import { tagRecipe } from "./component/tag";
import { textStylesChakra } from "./component/text";

export const configChakra = defineConfig({
	theme: {
		tokens: {
			colors: colorsChakra,
		},
		semanticTokens: {
			colors: colorsSemanticChakra,
		},
		textStyles: textStylesChakra,
		recipes: {
			button: buttonRecipe,
			tag: tagRecipe,
		},
	},
});

export const system = createSystem(defaultConfig, configChakra);
