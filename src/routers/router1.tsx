import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { Router1Layout } from "../layouts/router1Layout";
import { ButtonsPage } from "../pages/buttons";
import { HomePage } from "../pages/home";
import { TagsPage } from "../pages/tags";
import { TextsPage } from "../pages/texts";

export const router1 = createBrowserRouter([
	{
		path: "/",
		element: <Router1Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "buttons",
				element: <ButtonsPage />,
			},
			{
				path: "texts",
				element: <TextsPage />,
			},
			{
				path: "tags",
				element: <TagsPage />,
			},
			{
				path: "*",
				element: <Navigate to={"/"} />,
			},
		],
	},
]);

export const Router1 = () => {
	return <RouterProvider router={router1} />;
};
