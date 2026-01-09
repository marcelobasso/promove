import { Container, Button, Flex } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./Banner.module.css";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import banner from '../public/assets/banner/BannerPC.png'
import mobileBanner from '../public/assets/banner/BannerMobile.png'


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
	const isMobile = useMediaQuery("(max-width: 768px)");
	const src = isMobile ? mobileBanner : banner;
	const smallSrc = isMobile ? "/assets/banner/BannerMobileSmall.png" : "/assets/banner/BannerPCSmall.png";

	return (
		<section id={classes.banner} className={classes.bannerContainer}>
			<Image
				src={src}
				alt="Next Event"
				fill
				sizes="100vw"
				quality={50}
    			className="hidden md:block"
				priority // Critical for the main banner!
				placeholder="blur" // Shows a blurry version while loading
				blurDataURL={smallSrc}
			/>

			<Container className={classes.banner} size="md">
				<h1 className={classes.promove}>
					{props.content.title.split("\n").map((line, index) => (
						<Fragment key={index}>
							{line}
							<br />
						</Fragment>
					))}
				</h1>
				<Flex style={{ height: '100vh', padding: "48px 0" }} gap={16} justify="end" align="center" direction="column" wrap="wrap">
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
