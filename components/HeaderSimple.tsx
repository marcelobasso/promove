import { Burger, Container, Group, Paper, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";

const links = [
	{ link: "banner", label: "Home" },
	{ link: "about", label: "Quem Somos" },
	{ link: "events", label: "Eventos" },
	{ link: "sponsors", label: "Apoiadores" },
	{ link: "contact", label: "Contato" },
];

interface HeaderInterface {
	scroll: Function;
}

export function HeaderSimple(props: HeaderInterface) {
	const [opened, { toggle }] = useDisclosure(false);

	const items = links.map((link) => (
		<a
			key={link.label}
			className={classes.link}
			onClick={(_) => {
				props.scroll(link.link);
				toggle();
			}}
		>
			{link.label}
		</a>
	));

	return (
		<header className={classes.header}>
			<Container size="md" className={classes.inner}>
				<Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
				<span className={classes.promove}>PROMOVE</span>

				{/* Desktop menu */}
				<Group gap={5} visibleFrom="xs">
					{items}
				</Group>
			</Container>

			{/* Mobile menu */}
			<Transition transition="slide-right" duration={200} mounted={opened}>
				{(styles) => (
					<Paper className={classes.dropdown} withBorder style={styles} hiddenFrom="xs">
						{items}
					</Paper>
				)}
			</Transition>
		</header>
	);
}
