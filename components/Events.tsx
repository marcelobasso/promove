import { Container, Text, Image, useMantineTheme, Card } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Events.module.css";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Fragment } from "react";
import Link from "next/link";

interface Event {
	name: string;
	description: string;
	link: string;
	image: string;
	imageAlt: string;
}

interface EventsProps {
	title: string;
	description: string;
	//subDescription: string;
	events: Event[];
}

interface EventSlideProps {
	event: Event;
}

function breakLine(text: string) {
	return text.split("\n").map((line, index) => (
		<Fragment key={index}>
			{line}
			<br />
		</Fragment>
	));
}

function EventSlide(props: EventSlideProps) {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	return (
		<Card className={classes.eventSlide} shadow="sm" padding="xl" m="16px" mb="48px" radius={8}>
			{/* <Link href={`/events/${props.event.link}`} style={{ textDecoration: "none", color: "var(--theme-black)" }}> */}
			<Card.Section>
				<Image src={`/assets/events/${props.event.image}`} alt={props.event.imageAlt} h={320} />
			</Card.Section>

			<Text fw={500} size="lg" mt="md">
				{props.event.name}
			</Text>

			<Text mt="xs" c="gray.8" size="sm">
				{props.event.description}
			</Text>
			{/* </Link> */}
		</Card>
	);
}

const Events = (props: EventsProps) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const slides = props.events.map((item, index) => <EventSlide key={index} event={item} />);

	return (
		<section id={classes.events}>
			<Container className={classes.eventsContainer} size="md">
				<h2 className={classes.title}>{breakLine(props.title)}</h2>
				<p className={classes.description}>{breakLine(props.description)}</p>

				<Carousel mt="32px" slideSize="90%" controlsOffset="xl" controlSize={24} withControls={mobile ? false : true} withIndicators loop>
					{" "}
					{slides}
				</Carousel>
			</Container>
		</section>
	);
};

export default Events;
