"use client";
import { Container, Anchor, Flex } from "@mantine/core";
import classes from "./Footer.module.css";

const Footer = () => {
	const links = [
		{ id: "home", label: "Home" },
		{ id: "quem-somos", label: "Quem Somos" },
		{ id: "eventos", label: "Eventos" },
		{ id: "patrocinadores", label: "Patrocinadores" },
		{ id: "pontato", label: "Contato" },
	];

	const items = links.map((link) => (
		<Anchor<"a"> key={link.label} size="sm">
			{link.label}
		</Anchor>
	));

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<Flex className={classes.flexContainer} justify="space-between">
					<span>PROMOVE</span>
					{/* <Flex gap="md" className={classes.links}>
						{items}
					</Flex>
				</Flex> */}
					{/* to do: adicionar icones e links para redes socciais */}
				</Flex>
			</Container>
		</footer>
	);
};

export default Footer;
