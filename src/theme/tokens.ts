import { defineTokens } from "@chakra-ui/react";
import { darkDark, darkWhite } from "./color/dark";
import { destructiveDark, destructiveWhite } from "./color/destructive";
import { grayDark, grayWhite } from "./color/gray";
import { greenDark, greenWhite } from "./color/green";
import { orangeDark, orangeWhite } from "./color/orange";
import { primaryDark, primaryWhite } from "./color/primary";
import { purpleDark, purpleWhite } from "./color/purple";
import { secondaryDark, secondaryWhite } from "./color/secondary";
import { successDark, successWhite } from "./color/success";
import { warningDark, warningWhite } from "./color/warning";
import { whiteDark, whiteWhite } from "./color/white";

export const tokens = defineTokens({
	colors: {
		darkDark: darkDark,
		darkWhite: darkWhite,
		destructiveDark: destructiveDark,
		destructiveWhite: destructiveWhite,
		grayDark: grayDark,
		grayWhite: grayWhite,
		greenDark: greenDark,
		greenWhite: greenWhite,
		orangeDark: orangeDark,
		orangeWhite: orangeWhite,
		primaryDark: primaryDark,
		primaryWhite: primaryWhite,
		purpleDark: purpleDark,
		purpleWhite: purpleWhite,
		secondaryDark: secondaryDark,
		secondaryWhite: secondaryWhite,
		successDark: successDark,
		successWhite: successWhite,
		warningDark: warningDark,
		warningWhite: warningWhite,
		whiteDark: whiteDark,
		whiteWhite: whiteWhite,
	},
	fonts: {
		heading: { value: "Inter, sans-serif" },
		body: { value: "Inter, sans-serif" },
	},
});
