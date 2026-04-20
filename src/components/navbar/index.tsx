import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { EnumButtonVariant } from "../../theme/componants/button/enum/vairant";

export function Navbar() {
	const navigate = useNavigate();
	return (
		<HStack
			width={"100%"}
			height={"fit-content"}
			position={"absolute"}
			top={0}
			left={0}
			right={0}
		>
			<Button
				onClick={() => navigate("/")}
				variant={EnumButtonVariant.SURFACE}
				paddingY={"1rem"}
				flex={1}
			>
				Home
			</Button>
			<Button
				onClick={() => navigate("/buttons")}
				variant={EnumButtonVariant.SURFACE}
				flex={1}
				paddingY={"1rem"}
			>
				Page button
			</Button>
			<Button
				onClick={() => navigate("/texts")}
				variant={EnumButtonVariant.SURFACE}
				paddingY={"1rem"}
				flex={1}
			>
				page texts
			</Button>
			<Button
				onClick={() => navigate("/tags")}
				variant={EnumButtonVariant.SURFACE}
				paddingY={"1rem"}
				flex={1}
			>
				Page tags
			</Button>
		</HStack>
	);
}
