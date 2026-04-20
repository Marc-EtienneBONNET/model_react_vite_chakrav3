import {
	type BaseQueryFn,
	createApi,
	type FetchArgs,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import type { InterMyError } from "./type/interMyError";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const rawBaseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	prepareHeaders: (headers) => {
		if (API_KEY) {
			headers.set("Authorization", `Bearer ${API_KEY}`);
		}
		return headers;
	},
});

const baseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	InterMyError
> = async (args, api, extraOptions) => {
	const result = await rawBaseQuery(args, api, extraOptions);

	if (result.error) {
		const error: InterMyError = {
			name: "ApiError",
			message:
				(result.error.data as { message?: string })?.message ||
				`Erreur ${result.error.status}`,
			cause: result.error.data,
		};
		return { error };
	}

	return result;
};

export const api = createApi({
	reducerPath: "api",
	baseQuery,
	endpoints: () => ({}),
});
