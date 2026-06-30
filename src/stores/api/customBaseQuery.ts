import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import i18n from "../../../i18n.config";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// Token d'authentification envoyé sur chaque requête (« au niveau de
// l'init »). undefined pour l'instant : à brancher sur le state ou le
// storage le jour où l'auth existe (cf. qeeps : getState().auth).
const accessToken: string | undefined = undefined;

export const customBaseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	mode: "cors",
	prepareHeaders: (headers) => {
		if (accessToken) {
			headers.set("Authorization", `Bearer ${accessToken}`);
		}
		// Langue courante d'i18n, relue à chaque requête (reste fraîche
		// après un changement de langue en cours de session).
		headers.set("Accept-Language", i18n.language || "fr");
		return headers;
	},
});
