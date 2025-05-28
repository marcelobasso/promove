import { Fragment, useState } from "react";
import { Button, Container, TextInput, Paper, Grid, Textarea, Flex } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Contact.module.css";
import { useMantineTheme } from "@mantine/core";
import { sendEmail } from "@/lib/resend";

interface ContactProps {
	title: string;
	description: string;
	phone: string;
	email: string;
}

function breakLine(text: string) {
	return text.split("\n").map((line, index) => (
		<Fragment key={index}>
			{line}
			<br />
		</Fragment>
	));
}

const Send = () => {
	// sendEmail();
	// console.log("send");
};

const Contact = (props: ContactProps) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const form = useForm({
		initialValues: { name: "", email: "" },
		validate: {
			name: hasLength({ min: 5 }, "Deve ter ao menos 5 caracteres."),
			email: isEmail("Email inválido"),
		},
	});

	return (
		<section id={classes.contact}>
			<Container c="var(--theme-blue)" size="md" className={classes.contactContainer}>
				<h2 className={classes.title}>{props.title}</h2>
				<p className={classes.description}>{breakLine(props.description)}</p>

				<Flex w="100%" direction="column" align="center">
					<Paper
						w="100%"
						p={24}
						maw={640}
						miw={{ base: 320, md: 400 }}
						className={classes.formContainer}
						style={{ backgroundColor: "var(--theme-blue)" }}
					>
						<form action={Send}>
							<TextInput {...form.getInputProps("name")} label="Seu nome completo" placeholder="seu nome..." />
							<TextInput {...form.getInputProps("email")} mt="md" label="Seu Email" placeholder="email..." />
							<TextInput {...form.getInputProps("assunto")} mt="md" label="Assunto" placeholder="assunto..." />
							<Textarea {...form.getInputProps("mensagem")} mt="md" label="Mensagem" placeholder="mensagem..." />

							<Button type="submit" mt="md" miw={160}>
								ENVIAR
							</Button>
						</form>
					</Paper>

					<Flex w="100%" direction="column" mt={64} align="start">
						<span className={classes.text}>
							<span style={{ fontWeight: 800 }}>Telefone:</span> {props.phone}
						</span>
						<span className={classes.text}>
							<span style={{ fontWeight: 800 }}>Email:</span> {props.email}
						</span>
					</Flex>
				</Flex>
			</Container>{" "}
		</section>
	);
};

export default Contact;
