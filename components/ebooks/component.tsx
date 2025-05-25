import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title, useMantineTheme, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./component.module.css";
import { useTranslation } from "next-export-i18n";

type EbooksCarousselProps = {
	scroll: Function;
};

interface CardProps {
	link: string;
	image: string;
	title: string;
	category: string;
}

function Card({ image, title, category, link }: CardProps) {
	return (
		<Paper shadow="md" p="xl" radius="md" style={{ backgroundImage: `url(${image})` }} className={classes.card}>
			{/* <div>
				<Text className={classes.category} size="xs">
					{category}
				</Text>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div> */}
			<a href={link} target="_blank">
				<Button className={classes.ebookButton}>Acessar Material</Button>
			</a>
		</Paper>
	);
}

const data = [
	{
		image: "assets/ebooks/beginner.jpg",
		title: "Guia Iniciante",
		category: "Iniciante",
		link: "/ebooks/visao-de-aguia.pdf",
	},
	{
		image: "assets/ebooks/tipster.jpg",
		title: "Guia de Tipster",
		category: "Intermediário",
		link: "/ebooks/como-escolher-um-tipster.pdf",
	},
	{
		image: "assets/ebooks/psichology.jpg",
		title: "Psicologia de Predador",
		category: "Intermediário",
		link: "/ebooks/mentalidade-de-predador.pdf",
	},
	// {
	// 	image: "assets/ebooks/goldenwing.jpg",
	// 	title: "Planilha de planejamento",
	// 	category: "Intermediário",
	// 	link: "",
	// },
];

export function EbooksCaroussel(props: EbooksCarousselProps) {
	const { t } = useTranslation();
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const slides = data.map((item) => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
		<section id={classes.ebooks}>
			<Title order={2} className={classes.ebooksTitle} ta="center" mt="sm">
				{t("ebooks.title")}
			</Title>

			<Text c="dimmed" className={classes.ebooksDescription} ta="center" mt="md">
				{t("ebooks.description")}
			</Text>

			<Container className={classes.container} size="md">
				<Carousel slideSize={{ base: "100%", sm: "33.3%" }} slideGap={{ base: 4, sm: "xl" }} align="start" slidesToScroll={1}>
					{slides}
				</Carousel>
			</Container>
		</section>
	);
}

export default EbooksCaroussel;
