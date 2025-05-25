import { Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme, Button, Group, Flex } from "@mantine/core";
import { IconMedal, IconBallFootball, IconDeviceGamepad, IconMoodWink2 } from "@tabler/icons-react";
import classes from "./component.module.css";
import { useTranslation } from "next-export-i18n";
import { useMediaQuery } from "@mantine/hooks";

type PlansProps = {
	scroll: Function;
};

const Features = (props: PlansProps) => {
	const { t } = useTranslation();
	let Ltheme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${Ltheme.breakpoints.sm})`);

	const data = [
		{
			title: t("plans.cards.0.title"),
			description: t("plans.cards.0.description"),
			icon: IconMedal,
			price: t("plans.cards.0.price"),
			oldPrice: t("plans.cards.0.oldPrice"),
			link: t("plans.cards.0.link"),
		},
		{
			title: t("plans.cards.1.title"),
			description: t("plans.cards.1.description"),
			icon: IconBallFootball,
			price: t("plans.cards.1.price"),
			oldPrice: null,
			link: t("plans.cards.1.link"),
		},
		{
			title: t("plans.cards.2.title"),
			description: t("plans.cards.2.description"),
			icon: IconDeviceGamepad,
			price: t("plans.cards.2.price"),
			oldPrice: null,
			link: t("plans.cards.2.link"),
		},
	];

	const theme = useMantineTheme();
	const features = data.map((feature) => (
		<Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
			<feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.blue[6]} />
			<Group style={{ height: "180px" }}>
				<Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
					{feature.title}
				</Text>
				<Text className={classes.card_description} fz="sm" mt="sm">
					{feature.description}
				</Text>
			</Group>
			<Container className={classes.priceContainer}>
				<Text className={classes.oldPrice} style={{ display: feature.oldPrice ? "block" : "none" }} fz="lg" mt="sm">
					R$ {feature.oldPrice}
				</Text>
				<Text className={classes.price}>R$ {feature.price}</Text>
			</Container>
			<a href={feature.link}>
				<Button className={classes.cta_cards + " " + classes.shadow} aria-label="plans" size="lg">
					Comprar agora
				</Button>
			</a>
		</Card>
	));

	return (
		<div className={classes.plans}>
			<Container className={classes.container} size="md">
				<Title order={2} className={classes.title} ta="center" mt="sm">
					{t("plans.title")}
				</Title>

				<Text c="dimmed" className={classes.description} ta="center" mt="md">
					{t("plans.description")}
				</Text>

				<SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
					{features}
				</SimpleGrid>

				<Card shadow="md" radius="md" className={classes.freecard} padding="xl" mt="xl">
					<Flex gap="md" align="center" direction={mobile ? "column" : "row"}>
						<IconMoodWink2 style={{ width: rem(mobile ? 50 : 100), height: rem(mobile ? 50 : 100) }} stroke={2} color={theme.colors.blue[6]} />
						<Text className={classes.freecard_description} fz="sm" my="md" mx="md">
							{t("plans.free.content")}
						</Text>
						<a href={t("plans.free.link")}>
							<Button className={classes.cta_cards + " " + classes.shadow} aria-label="plans" size="lg">
								{t("plans.free.cta")}
							</Button>
						</a>
					</Flex>
				</Card>
			</Container>
		</div>
	);
};

export default Features;
