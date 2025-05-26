"use client";

import { siteContent } from "@/data/home"; // Import your content
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Suspense, useRef } from "react";
import { Banner } from "@/components/Banner";
import About from "@/components/About";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";

const Home = () => {
	const { about, banner, events, sponsors, contact } = siteContent;
	const theme = useMantineTheme();
	const aboutRef = useRef<null | HTMLDivElement>(null);
	const bannerRef = useRef<null | HTMLDivElement>(null);
	// const plansRef = useRef<null | HTMLDivElement>(null);
	// const ebooksRef = useRef<null | HTMLDivElement>(null);
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const scroll = (id: string) => {
		// if (id == "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
		// if (id == "plans") plansRef.current?.scrollIntoView({ behavior: "smooth" });
		// if (id == "ebooks") ebooksRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// prettier-ignore
	return (
        <Suspense>
            <Banner content={banner} scroll={scroll} />
            <About content={about} scroll={scroll} />
            <Events {...events} scroll={scroll} />
            <Sponsors {...sponsors} scroll={scroll} />
            <Contact {...contact} scroll={scroll} />
            {/* <div ref={aboutRef} style={{ scrollMarginTop: "150px" }} ><About content={about} scroll={scroll} /></div> */}
            {/* <div ref={plansRef} style={{ scrollMarginTop: mobile ? "0px" : "0px" }}><Plans scroll={scroll} /></div> */}
            {/* <div ref={ebooksRef} style={{ scrollMarginTop: mobile ? "0px" : "0px" }}><EbooksCaroussel scroll={scroll} /></div> */}
            {/* <Footer scroll={scroll} /> */}
        </Suspense>
    );
};

export default Home;
