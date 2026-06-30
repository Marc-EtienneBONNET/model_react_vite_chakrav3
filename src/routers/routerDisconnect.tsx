import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { LayoutRouterDisconnect } from "./layout/layoutRouterDisconnect";

export const routerDisconnect = createBrowserRouter([
	{
		path: "/",
		element: <LayoutRouterDisconnect />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);

export function RouterDisconnect() {
	return <RouterProvider router={routerDisconnect} />;
}
