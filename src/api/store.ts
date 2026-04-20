import {
	configureStore,
	type StateFromReducersMapObject,
} from "@reduxjs/toolkit";
import { api } from "./api";

const reducer = {
	[api.reducerPath]: api.reducer,
} as const;

export const initStore = () => {
	return configureStore({
		reducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat([api.middleware]),
	});
};

export const store = initStore();

export type RootState = StateFromReducersMapObject<typeof reducer>;
export type TypeStore = ReturnType<typeof initStore>;
export type AppDispatch = typeof store.dispatch;
