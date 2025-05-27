import { Container, Flex, Text, Image, useMantineTheme, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Sponsors.module.css";
import { Grid } from "@mantine/core";
import { Fragment } from "react";

interface Sponsor {
	name: string;
	logo: string;
	link: string;
	instagram: string;
}

interface SponsorProps {
	title: string;
	description: string;
	cta: string;
	sponsors: Sponsor[];
	scroll: Function;
}

interface SponsorCardProp {
	sponsor: Sponsor;
}

function breakLine(text: string) {
	return text.split("\n").map((line, index) => (
		<Fragment key={index}>
			{line}
			<br />
		</Fragment>
	));
}

function Card(props: SponsorCardProp) {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	return (
		<Grid.Col className={classes.gridCol} span={mobile ? 6 : 2} mt="xl">
			<Image className={classes.sponsorImage} m="0 auto" radius={100} src={`/assets/sponsors/${props.sponsor.logo}`} />
			<Text mt="md">
				<a target="_blank" className={classes.sponsorName} href={props.sponsor.link}>
					{props.sponsor.name}
				</a>
				<a
					target="_blank"
					className={classes.instagram}
					href={`https://instagram.com/${props.sponsor.instagram.slice(1, props.sponsor.instagram.length)}`}
				>
					{props.sponsor.instagram}
				</a>
			</Text>
		</Grid.Col>
	);
}

const Sponsors = (props: SponsorProps) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const sponsors = props.sponsors.map((item, index) => <Card key={index} sponsor={item} />);

	return (
		<section id={classes.sponsors}>
			<Container size="md" className={classes.content}>
				<Flex justify="center" align="center" direction="column" mih={50}>
					<h2 className={classes.title}>{breakLine(props.title)}</h2>
					<p className={classes.description}>{breakLine(props.description)}</p>

					<Grid className={classes.grid} grow w="100%" m="xl">
						{sponsors}
					</Grid>

					<Text fs="14px" td="underline" m="xl" className={classes.ctaSponsor} onClick={() => props.scroll("contact")}>
						{props.cta}
					</Text>
				</Flex>
			</Container>
		</section>
	);
};

export default Sponsors;
