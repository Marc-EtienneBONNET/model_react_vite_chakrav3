import { type ComponentType, lazy } from "react";

// Délais entre les tentatives (2 retries au total).
const RETRY_DELAYS_MS = [500, 1000];

/**
 * Remplacement de `React.lazy` qui réessaie l'import dynamique en cas
 * d'échec. Absorbe les soucis réseau transitoires (jitter, CDN instable,
 * 5xx). Si toutes les tentatives échouent, l'erreur est propagée.
 */
export function lazyWithRetry<T extends ComponentType<unknown>>(
	factory: () => Promise<{ default: T }>,
) {
	return lazy(async () => {
		let lastError: unknown;
		for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
			try {
				return await factory();
			} catch (error) {
				lastError = error;
				const delay = RETRY_DELAYS_MS[attempt];
				if (delay !== undefined) {
					await new Promise((resolve) => setTimeout(resolve, delay));
				}
			}
		}
		throw lastError;
	});
}
