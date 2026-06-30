import { Center, Spinner, Text, VStack } from "@chakra-ui/react";
import { type ReactNode, Suspense } from "react";

interface InterLoadingFallbackProps {
	text?: string;
}

export function LoadingFallback({ text = "" }: InterLoadingFallbackProps) {
	return (
		<Center h="100vh" w="100%">
			<VStack gap="4">
				{text && <Text>{text}</Text>}
				<Spinner />
			</VStack>
		</Center>
	);
}

interface InterSuspenseContainerProps {
	children: ReactNode;
	text?: string;
}

export function SuspenseContainer({
	children,
	text = "",
}: InterSuspenseContainerProps) {
	return (
		<Suspense fallback={<LoadingFallback text={text} />}>{children}</Suspense>
	);
}
