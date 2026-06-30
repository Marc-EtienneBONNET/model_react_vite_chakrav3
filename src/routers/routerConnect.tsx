import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { LayoutRouterConnect } from "./layout/layoutRouterConnect";

export const routerConnect = createBrowserRouter([
	{
		path: "/",
		element: <LayoutRouterConnect />,
		children: [
			{
				index: true,
				element: <DashboardPage />,
			},
		],
	},
]);

export function RouterConnect() {
	return <RouterProvider router={routerConnect} />;
}
