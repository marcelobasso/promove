import { Box, Image, useComputedColorScheme } from "@mantine/core";

const Logo = () => {
	const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

	return (
		<Box>
			<Image
				// style={{
				// 	filter: computedColorScheme === "light" ? "saturate(500%) contrast(800%) brightness(500%) invert(80%) sepia(50%) hue-rotate(120deg)" : "",
				// }}
				h={40}
				w="auto"
				alt="logo"
				src="/assets/logos/logo-3-notitle.png"
			/>
		</Box>
	);
};

export default Logo;