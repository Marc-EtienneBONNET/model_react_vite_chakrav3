import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./componants/button";
import { tagSlotRecipe } from "./componants/tag";
import { textStyles } from "./componants/text";
import { semanticTokens } from "./semanticTokens";
import { tokens } from "./tokens";

const config = defineConfig({
	theme: {
		tokens,
		semanticTokens,
		textStyles,
		recipes: {
			button: buttonRecipe,
		},
		slotRecipes: {
			tag: tagSlotRecipe,
		},
	},
});

export const system = createSystem(defaultConfig, config);
