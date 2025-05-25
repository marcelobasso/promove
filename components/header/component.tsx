import {
	Group,
	Divider,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	rem,
	Container,
	Menu,
	Button,
	ActionIcon,
	useMantineColorScheme,
	useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./component.module.css";
import Logo from "../logo/component";
import { IconLanguage, IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";

interface HeaderProps {
	scroll: Function;
}

const Header = (props: HeaderProps) => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

	const { t } = useTranslation();

	return (
		<Box>
			<header className={classes.header + " " + classes.shadow}>
				<Container style={{ height: "100%" }}>
					<Group justify="space-between" h="100%">
						<Logo />

						<Group h="100%" gap={0} visibleFrom="sm">
							<a className={classes.link} onClick={() => props.scroll("about")}>
								{t("header.home")}
							</a>
							<a className={classes.link} onClick={() => props.scroll("plans")}>
								{t("header.plans")}
							</a>
							<a className={classes.link} onClick={() => props.scroll("ebooks")}>
								{t("header.ebooks")}
							</a>
						</Group>

						<Group h="100%" gap={20}>
							<Menu shadow="md" width={200}>
								<Menu.Target>
									<Button
										aria-label="idiomas do site"
										variant="outline"
										leftSection={<IconLanguage style={{ width: rem(18), height: rem(18) }} />}
									>
										{t("header.languages")}
									</Button>
								</Menu.Target>

								<Menu.Dropdown>
									<Menu.Label>{t("header.languagesDescription")}</Menu.Label>
									<LanguageSwitcher lang="pt">
										<Menu.Item> {t("header.portuguese")} </Menu.Item>
									</LanguageSwitcher>
									<LanguageSwitcher lang="en">
										<Menu.Item> {t("header.english")} </Menu.Item>
									</LanguageSwitcher>
								</Menu.Dropdown>
							</Menu>
						</Group>

						<Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
					</Group>
				</Container>
			</header>

			<Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" hiddenFrom="sm" zIndex={1000000}>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />

					<a
						className={classes.link}
						onClick={() => {
							closeDrawer();
							props.scroll("about");
						}}
					>
						{t("header.home")}
					</a>

					<a
						className={classes.link}
						onClick={() => {
							closeDrawer();
							props.scroll("plans");
						}}
					>
						{t("header.plans")}
					</a>

					<a
						className={classes.link}
						onClick={() => {
							closeDrawer();
							props.scroll("ebooks");
						}}
					>
						{t("header.ebooks")}
					</a>
				</ScrollArea>
			</Drawer>
		</Box>
	);
};

export default Header;
