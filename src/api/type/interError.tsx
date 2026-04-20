export interface InterError extends Error {
	name: string;
	message: string;
	stack?: string;
	cause?: unknown;
}
