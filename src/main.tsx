import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeI18n } from "../i18n.config";
import { App } from "./app";
import { Provider } from "./provider";

initializeI18n();

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Élément racine #root introuvable dans index.html");
}

createRoot(rootElement).render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>,
);
