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

// to-do: buscar imagens automaticamente em assets/banner_images.
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
				<Flex gap="md" justify="center" align="center" direction="column" wrap="wrap" className={classes.box}>
					<p className={classes.subtitle}>{props.content.subtitle}</p>
					<a style={{ textDecoration: "none" }} href={props.content.ctaLink}>
						<Button color="var(--theme-gold)" className={classes.cta} variant="filled" size="md">
							COMPRAR INGRESSOS
						</Button>
					</a>
				</Flex>
			</Container>
		</section>
	);
}
