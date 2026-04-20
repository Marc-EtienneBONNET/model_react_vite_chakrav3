import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Router1Layout = () => {
	return (
		<VStack
			height={"100svh"}
			width={"100svw"}
			overflow={"hidden"}
			position={"relative"}
			padding={"1rem"}
		>
			<Navbar />
			<Outlet />
		</VStack>
	);
};
