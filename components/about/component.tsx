"use client";

import { Container, Flex, Title, Text, Button, Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./component.module.css"; // Assuming your CSS module is named About.module.css

interface AboutProps {
	content: {
		title: string;
		description: string;
		cta: string;
	};
	scroll: Function;
}

const About = (props: AboutProps) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	return (
		<section id={styles.about}>
			<Container style={{ marginTop: "116px", marginBottom: "50px" }} size="xl" className={styles.content}>
				<Flex className={styles.mainContainer} mih={50} gap="xl" wrap="wrap" justify="center" align="center">
					<Flex mih={50} gap="xl" direction="column" wrap="wrap" align="flex-start">
						<Title visibleFrom="sm" order={1} className={styles.title}>
							{props.content.title}
							<Text span c="blue" inherit>
								{props.content.title}
							</Text>
						</Title>

						{/* <Flex gap="xl" justify="center" direction="column" className={styles.left}>
							<Text className={styles.description}>
								{props.content.description}
								<span className={styles.highlight}>
									{props.content.description}
								</span>
							</Text>

							<Flex style={{ marginTop: "30px" }} gap="sm" direction={mobile ? "column" : "row"}>
								<Button className={styles.cta_plans + " " + styles.shadow} aria-label="plans" onClick={() => props.scroll("plans")} size="lg">
									{props.content.cta}
								</Button>
							</Flex>
						</Flex> */}
					</Flex>

					<Image id={styles.main} src="assets/logos/logo-3-big.png" alt="GoldenWing Tips logo" />
				</Flex>

				<Flex style={{ marginTop: "64px" }} mih={50} gap="xl" wrap="wrap" justify="center" align="center">
					<div className={styles.container} style={{ width: "28px" }}>
						<div className={styles.chevron}></div>
						<div className={styles.chevron}></div>
						<div className={styles.chevron}></div>
					</div>
				</Flex>
			</Container>
		</section>
	);
};

export default About;
