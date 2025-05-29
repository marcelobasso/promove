"use client";

import { FormEvent, Fragment, useState } from "react";
import { Button, Container, TextInput, Paper, Grid, Textarea, Flex, Dialog, Text } from "@mantine/core";
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

const Contact = (props: ContactProps) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	const [dialogOpened, setDialogOpened] = useState(false);
	const [dialogMessage, setDialogMessage] = useState("");
	const [dialogError, setDialogError] = useState(false);

	const form = useForm({
		initialValues: { name: "", email: "", subject: "", message: "" },
		validate: {
			name: hasLength({ min: 5 }, "Deve ter ao menos 5 caracteres."),
			email: isEmail("Email inválido"),
			subject: hasLength({ min: 1 }, "Defina um assunto"),
			message: hasLength({ min: 10, max: 1000 }, "A mensagem deve ter entre 10 e 1000 caracteres"),
		},
	});

	const handleSubmit = async (values: typeof form.values) => {
		try {
			console.log(values);
			const result = await sendEmail(values);

			if (result.error) {
				setDialogError(true);
				setDialogMessage("Erro ao enviar a mensagem. Tente novamente mais tarde.");
			} else {
				setDialogError(false);
				setDialogMessage("Mensagem enviada com sucesso!");
				form.reset();
			}
		} catch (err) {
			console.error(err);
			setDialogError(true);
			setDialogMessage("Erro inesperado ao enviar a mensagem.");
		} finally {
			setDialogOpened(true);
			setTimeout(() => setDialogOpened(false), 4000); // Auto-close after 4 seconds
		}
	};

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
						<Dialog
							opened={dialogOpened}
							onClose={() => setDialogOpened(false)}
							position={{ top: 20, left: "50%" }}
							transitionProps={{ transition: "slide-down", duration: 300 }}
							style={{ transform: "translateX(-50%)" }}
							radius="md"
							p="md"
							withCloseButton
							bg={dialogError ? "red.5" : "green.5"}
						>
							<Text c="white">{dialogMessage}</Text>
						</Dialog>
						<form onSubmit={form.onSubmit(handleSubmit)}>
							<TextInput {...form.getInputProps("name")} label="Seu nome completo" />
							<TextInput {...form.getInputProps("email")} mt="md" label="Seu Email" />
							<TextInput {...form.getInputProps("subject")} mt="md" label="Assunto" />
							<Textarea {...form.getInputProps("message")} mt="md" label="Mensagem" />

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
