"use client";

import { useParams } from "next/navigation";
import { HeaderSimple } from "@/components/HeaderSimple";
import classes from "./Event.module.css";
import { Container } from "@mantine/core";
import Link from "next/link";

export default function EventPage() {
	const params = useParams();
	const slug = params?.slug;

	return (
		<>
			<HeaderSimple scroll={(a) => null} links={false} />
			<section id={classes.event}>
				<Container size="sm" mt="56px" pt={64} pb={64}>
					<h1>Evento: {slug}</h1>
				</Container>
			</section>
		</>
	);
}
