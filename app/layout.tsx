/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { HeaderSimple } from "@/components/HeaderSimple";
import "../globals.css";
import Footer from "@/components/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Promove",
	description: "Sua plataforma de eventos em Carlos Barbosa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<script src="//my.visme.co/visme-embed.js" />
				<link rel="icon" href="/assets/logos/favicon2.svg" sizes="any" />
				<ColorSchemeScript />
			</head>

			<body className={font.className}>
				<MantineProvider>
					{children}

					<Footer />
				</MantineProvider>
			</body>
		</html>
	);
}
