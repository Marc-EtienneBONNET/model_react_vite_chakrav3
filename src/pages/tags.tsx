import { Tag, Text, VStack } from "@chakra-ui/react";
import { EnumColors } from "../theme/color";
import { EnumTagColor } from "../theme/componants/tag/enum/color";
import { EnumTagSize } from "../theme/componants/tag/enum/size";
import { EnumTagVariant } from "../theme/componants/tag/enum/variant";

export function TagsPage() {
	return (
		<VStack
			height={"100%"}
			width={"100%"}
			justify={"center"}
			gap={"2rem"}
			overflow={"auto"}
		>
			<Text color={EnumColors.primary.DEFAULT}>Page tags</Text>
			<VStack gap={"2rem"} align={"flex-start"} wrap={"wrap"}>
				<VStack>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.primary}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.destructive}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.gray}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.green}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.orange}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.purple}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.secondary}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.success}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.secondary}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.warning}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root
						variant={EnumTagVariant.SOLID}
						size={EnumTagSize.S}
						colorScheme={EnumTagColor.secondary}
					>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root variant={EnumTagVariant.SOLID} size={EnumTagSize.S}>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root variant={EnumTagVariant.OUTLINE} size={EnumTagSize.S}>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root variant={EnumTagVariant.SUBTLE} size={EnumTagSize.S}>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
					<Tag.Root variant={EnumTagVariant.SURFACE} size={EnumTagSize.S}>
						<Tag.Label>"sm primary"</Tag.Label>
					</Tag.Root>
				</VStack>
			</VStack>
		</VStack>
	);
}
