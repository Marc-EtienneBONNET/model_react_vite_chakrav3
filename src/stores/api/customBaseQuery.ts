import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import i18n from "../../../i18n.config";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// Valeurs par défaut envoyées sur chaque requête (« au niveau de l'init »).
// Les deux tokens sont undefined pour l'instant : à brancher sur le state
// ou le storage le jour où l'auth existe (cf. qeeps : getState().auth).
const accessTokenCompany: string | undefined = undefined;
const accessTokenUser: string | undefined = undefined;

export const customBaseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	mode: "cors",
	prepareHeaders: (headers) => {
		if (accessTokenCompany) {
			headers.set("accessTokenCompany", accessTokenCompany);
		}
		if (accessTokenUser) {
			headers.set("accessTokenUser", accessTokenUser);
		}
		// Langue courante d'i18n, relue à chaque requête (reste fraîche
		// après un changement de langue en cours de session).
		headers.set("Accept-Language", i18n.language || "fr");
		return headers;
	},
});
