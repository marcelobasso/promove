"use client";

import { siteContent } from "@/data/home";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Suspense, useRef } from "react";
import { Banner } from "@/components/Banner";
import About from "@/components/About";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import { HeaderSimple } from "@/components/HeaderSimple";

const Home = () => {
	const { about, banner, events, sponsors, contact } = siteContent;
	const theme = useMantineTheme();
	const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	// Create refs for all scrollable sections
	const bannerRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const eventsRef = useRef<HTMLDivElement>(null);
	const sponsorsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const scroll = (id: string) => {
		if (id === "banner") bannerRef.current?.scrollIntoView({ behavior: "smooth" });
		if (id === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
		if (id === "events") eventsRef.current?.scrollIntoView({ behavior: "smooth" });
		if (id === "sponsors") sponsorsRef.current?.scrollIntoView({ behavior: "smooth" });
		if (id === "contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// prettier-ignore
	return (
		<Suspense>
            <HeaderSimple scroll={scroll} links={true} />
			<div ref={bannerRef} style={{ scrollMarginTop: "56px" }}><Banner content={banner} /></div>
			<div ref={aboutRef} style={{ scrollMarginTop: "56px" }}><About content={about} /></div>
			<div ref={eventsRef} style={{ scrollMarginTop: "56px"  }}><Events {...events} /></div>
			<div ref={sponsorsRef} style={{ scrollMarginTop: "56px"  }}><Sponsors {...sponsors} scroll={scroll}/></div>
			<div ref={contactRef} style={{ scrollMarginTop: "56px"  }}><Contact {...contact} /></div>
		</Suspense>
	);
};

export default Home;
