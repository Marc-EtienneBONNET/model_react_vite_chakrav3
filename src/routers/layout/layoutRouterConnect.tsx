import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function LayoutRouterConnect() {
	return (
		<VStack
			height={"100svh"}
			width={"100svw"}
			overflow={"hidden"}
			position={"relative"}
			padding={"1rem"}
		>
			<Outlet />
		</VStack>
	);
}
