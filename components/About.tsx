import { Container, Flex, Text, Image, useMantineTheme, Paper, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./About.module.css";
import { Fragment } from "react";
import { FiInstagram } from "react-icons/fi";

interface AboutProps {
	content: {
		title: string;
		description: string;
		team: { name: string; instagram: string; image: string }[];
	};
}

interface CardProps {
	name: string;
	instagram: string;
	image: string;
	index: number;
}

function breakLine(text: string) {
	return text.split("\n").map((line, index) => (
		<Fragment key={index}>
			{line}
			<br />
		</Fragment>
	));
}

function Card({ name, instagram, image, index }: CardProps) {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const cardAlignment = mobile ? (index % 2 == 0 ? "row" : "row-reverse") : "column-reverse";

	return (
		<Paper withBorder={false} p={{ base: 0, sm: "md", md: "xl" }} radius="sm" bg="var(--theme-gray)" className={classes.teamCard}>
			<div>
				<Flex direction={cardAlignment} align="center" justify="space-between">
					<Flex align="start" p="md">
						<div className={index % 2 == 0 ? classes.teamText : classes.reverseText}>
							<Text className={classes.name}>{name}</Text>
							<a
								style={{ display: "flex", alignItems: "center" }}
								href={"https://instagram.com/" + instagram.slice(1, instagram.length)}
								target="_blank"
								className={classes.instaLink}
							>
								{instagram}
								<FiInstagram style={{ lineHeight: 16, marginLeft: 8 }} />
							</a>
						</div>
					</Flex>
					<a href={"https://instagram.com/" + instagram.slice(1, instagram.length)} target="_blank">
						<Image w={{ base: 100, sm: 120, md: 160 }} radius={100} src={`/assets/about/${image}`} />
					</a>
				</Flex>
			</div>
		</Paper>
	);
}

const About = (props: AboutProps) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const team = props.content.team.map((item, index) => <Card key={index} index={index} {...item} />);

	return (
		<section id={classes.about}>
			<Container size="md" p={{ base: "xl", sm: "sm" }} className={classes.content}>
				<Flex justify="center" align="center" direction="column" mih={50}>
					<h2 className={classes.title}>{breakLine(props.content.title)}</h2>
					<p className={classes.description} dangerouslySetInnerHTML={{ __html: props.content.description }}></p>

					<Flex className={classes.teamContainer} justify="center" align="center" direction={mobile ? "column" : "row"} m={{ base: "sm", md: "xl" }}>
						{team}
					</Flex>
				</Flex>
			</Container>
		</section>
	);
};

export default About;
