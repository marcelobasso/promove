import { Fragment, useState } from "react";
import { Button, Text, Code, Container, Flex, TextInput, Group, Paper, Grid, Textarea } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Contact.module.css";
import { useMantineTheme } from "@mantine/core";

interface ContactProps {
	title: string;
	description: string;
	phone: string;
	email: string;
	scroll: Function;
}

function breakLine(text: string) {
	return text.split("\n").map((line, index) => (
		<Fragment key={index}>
			{line}
			<br />
		</Fragment>
	));
}

const Contact = (props: ContactProps) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const form = useForm({
		mode: "controlled",
		initialValues: { name: "", email: "" },
		validate: {
			name: hasLength({ min: 5 }, "Deve ter ao menos 5 caracteres."),
			email: isEmail("Email inválido"),
		},
	});

	const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

	return (
		<section id={classes.contact}>
			<Container size="md" className={classes.contactContainer}>
				<h2 className={classes.title}>{props.title}</h2>
				<p className={classes.description}>{breakLine(props.description)}</p>

				<Grid grow w="100%" mt="xl" mb="xl">
					<Grid.Col className={classes.gridCol} span={mobile ? 12 : 5} style={{ order: mobile ? 2 : 1 }}>
						<div>
							<span className={classes.text}>Telefone: {props.phone}</span>
							<span className={classes.text}>Email: {props.email}</span>
						</div>
					</Grid.Col>
					<Grid.Col className={classes.gridCol} span={mobile ? 12 : 7} style={{ order: mobile ? 1 : 2 }}>
						<Paper w="100%" p={24} maw={640} className={classes.formContainer}>
							<form onSubmit={form.onSubmit(setSubmittedValues)}>
								<TextInput {...form.getInputProps("name")} label="Seu nome completo" placeholder="seu nome..." />
								<TextInput {...form.getInputProps("email")} mt="md" label="Seu Email" placeholder="email..." />
								<TextInput {...form.getInputProps("assunto")} mt="md" label="Assunto" placeholder="assunto..." />
								<Textarea {...form.getInputProps("mensagem")} mt="md" label="Mensagem" placeholder="mensagem..." />

								<Button type="submit" mt="md" miw={160}>
									Enviar
								</Button>

								{/* <Text mt="md">Form values:</Text> */}
								{/* <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}

								{/* <Text mt="md">Submitted values:</Text> */}
								{/* <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : "–"}</Code> */}
							</form>
						</Paper>
					</Grid.Col>
				</Grid>
			</Container>{" "}
		</section>
	);
};

export default Contact;
