import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./stores/store";
import { system } from "./theme";

interface InterProviderProps {
	children: ReactNode;
}

export function Provider({ children }: InterProviderProps) {
	return (
		<ReduxProvider store={store}>
			<ChakraProvider value={system}>{children}</ChakraProvider>
		</ReduxProvider>
	);
}
