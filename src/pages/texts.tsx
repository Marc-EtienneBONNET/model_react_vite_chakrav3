import { HStack, Text, VStack } from "@chakra-ui/react";
import { EnumColors } from "../theme/color";
import { EnumTextStyle } from "../theme/componants/text/enum/size";

export function TextsPage() {
	return (
		<VStack
			height={"100%"}
			width={"100%"}
			justify={"center"}
			gap={"2rem"}
			overflow={"auto"}
		>
			<Text color={EnumColors.primary.DEFAULT}>Page texts</Text>
			<HStack gap={"2rem"} align={"flex-start"} height="fit-content">
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXS_LIGHT}
					>
						xxs Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXS_NORMAL}
					>
						xxs Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXS_MEDIUM}
					>
						xxs Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXS_SEMI_BOLD}
					>
						xxs SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXS_BOLD}
					>
						xxs Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XS_LIGHT}
					>
						xs Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XS_NORMAL}
					>
						xs Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XS_MEDIUM}
					>
						xs Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XS_SEMI_BOLD}
					>
						xs SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XS_BOLD}
					>
						xs Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.SM_LIGHT}
					>
						sm Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.SM_NORMAL}
					>
						sm Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.SM_MEDIUM}
					>
						sm Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.SM_SEMI_BOLD}
					>
						sm SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.SM_BOLD}
					>
						sm Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.MD_LIGHT}
					>
						md Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.MD_NORMAL}
					>
						md Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.MD_MEDIUM}
					>
						md Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.MD_SEMI_BOLD}
					>
						md SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.MD_BOLD}
					>
						md Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.LG_LIGHT}
					>
						lg Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.LG_NORMAL}
					>
						lg Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.LG_MEDIUM}
					>
						lg Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.LG_SEMI_BOLD}
					>
						lg SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.LG_BOLD}
					>
						lg Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XL_LIGHT}
					>
						xl Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XL_NORMAL}
					>
						xl Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XL_MEDIUM}
					>
						xl Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XL_SEMI_BOLD}
					>
						xl SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XL_BOLD}
					>
						xl Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXL_LIGHT}
					>
						xxl Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXL_NORMAL}
					>
						xxl Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXL_MEDIUM}
					>
						xxl Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXL_SEMI_BOLD}
					>
						xxl SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXL_BOLD}
					>
						xxl Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXL_LIGHT}
					>
						xxxl Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXL_NORMAL}
					>
						xxxl Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXL_MEDIUM}
					>
						xxxl Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXL_SEMI_BOLD}
					>
						xxxl SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXL_BOLD}
					>
						xxxl Bold
					</Text>
				</VStack>
				<VStack align={"flex-start"}>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXXL_LIGHT}
					>
						xxxxl Light
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXXL_NORMAL}
					>
						xxxxl Normal
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXXL_MEDIUM}
					>
						xxxxl Medium
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXXL_SEMI_BOLD}
					>
						xxxxl SemiBold
					</Text>
					<Text
						color={EnumColors.primary.DEFAULT}
						textStyle={EnumTextStyle.XXXXL_BOLD}
					>
						xxxxl Bold
					</Text>
				</VStack>
			</HStack>
		</VStack>
	);
}
