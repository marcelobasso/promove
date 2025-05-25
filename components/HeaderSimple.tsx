"use client";

import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderSimple.module.css";

const links = [
	{ link: "/quem-somos", label: "Quem Somos" },
	{ link: "/eventos", label: "Eventos" },
	{ link: "/patrocinadores", label: "Patrocinadores" },
	{ link: "/contato", label: "Contato" },
];

export function HeaderSimple() {
	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={classes.link}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
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

				<Group gap={5} visibleFrom="xs">
					{items}
				</Group>
			</Container>
		</header>
	);
}
