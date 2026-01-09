import { Container, Button, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Banner.module.css";
import { Fragment } from "react";
import Link from "next/link";

interface BannerProps {
	content: {
		title: string;
		subtitle: string;
		cta: string;
		ctaLink: string;

	};
}

const images = [];

export function Banner(props: BannerProps) {
	return (
		<section id={classes.banner} className={classes.bannerContainer}>
			<Container className={classes.banner} size="md">
				<h1 className={classes.promove}>
					{props.content.title.split("\n").map((line, index) => (
						<Fragment key={index}>
							{line}
							<br />
						</Fragment>
					))}
				</h1>
				<Flex style={{ height: '100vh' }} gap={16} justify="center" align="center" direction="column" wrap="wrap">
				  <a href={props.content.ctaLink} target="_blank">
				    <Button color="var(--theme-gold)" className={classes.cta} variant="filled" size="md">
				      <span style={{ color: "var(--theme-black)" }}>COMPRE AGORA</span>
				    </Button>
				  </a>
				
				</Flex>

			</Container>
		</section>
	);
}
