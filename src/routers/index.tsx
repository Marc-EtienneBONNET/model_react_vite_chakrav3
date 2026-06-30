import { useEffect, useState } from "react";
import { LoadingFallback, SuspenseContainer } from "../utils/lazyLoading";
import { lazyWithRetry } from "../utils/lazyWithRetry";

const LazyRouterDisconnect = lazyWithRetry(() =>
	import("./routerDisconnect").then((module) => ({
		default: module.RouterDisconnect,
	})),
);
const LazyRouterConnect = lazyWithRetry(() =>
	import("./routerConnect").then((module) => ({
		default: module.RouterConnect,
	})),
);

type TypeLazyRouter = typeof LazyRouterDisconnect;

async function fetchIsDisconnected(): Promise<boolean> {
	return true;
}

async function resolveRouter(): Promise<TypeLazyRouter> {
	const isDisconnected = await fetchIsDisconnected();
	if (isDisconnected) {
		return LazyRouterDisconnect;
	} else if (isDisconnected === false) {
		return LazyRouterConnect;
	} else {
		return LazyRouterDisconnect;
	}
}

export function Router() {
	const [targetRouter, setTargetRouter] = useState<TypeLazyRouter | null>(null);

	useEffect(() => {
		let isMounted = true;
		async function loadRouter() {
			try {
				const router = await resolveRouter();
				if (isMounted) {
					setTargetRouter(() => router);
				}
			} catch (error) {
				console.error("Impossible de faire charger le router", error);
			}
		}
		loadRouter();
		return () => {
			isMounted = false;
		};
	}, []);

	if (!targetRouter) {
		return <LoadingFallback text="Chargement…" />;
	}

	const TargetRouter = targetRouter;
	return (
		<SuspenseContainer text="Chargement…">
			<TargetRouter />
		</SuspenseContainer>
	);
}
