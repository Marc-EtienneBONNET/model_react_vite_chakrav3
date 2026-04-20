import { api } from "../api";
import type { TypeWeatherParams } from "./type/TypeWeatherParams";
import type { TypeWeatherResponse } from "./type/TypeWeatherResponse";

const ENDPOINT = "forecast" as const;

export const openMeteoApi = api.injectEndpoints({
	endpoints: (builder) => ({
		// GET
		getCurrentWeather: builder.query<TypeWeatherResponse, TypeWeatherParams>({
			query: ({ latitude, longitude }) => ({
				url: ENDPOINT,
				method: "GET",
				params: {
					latitude,
					longitude,
					current: "temperature_2m,wind_speed_10m,weather_code",
				},
			}),
		}),
	}),
});

export const { useGetCurrentWeatherQuery, useLazyGetCurrentWeatherQuery } =
	openMeteoApi;
