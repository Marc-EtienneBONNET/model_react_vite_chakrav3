import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from ".";
import { store } from "./api/store";
import { system } from "./theme/theme";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<ChakraProvider value={system}>
				<App />
			</ChakraProvider>
		</Provider>
	</StrictMode>,
);
