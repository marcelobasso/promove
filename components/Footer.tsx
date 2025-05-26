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
				<Flex className={classes.flexContainer} justify="flex-end">
					<span>PROMOVE</span>
				</Flex>
			</Container>
		</footer>
	);
};

export default Footer;
