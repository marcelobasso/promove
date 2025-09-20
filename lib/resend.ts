"use server";

import { Resend } from "resend";

interface ContactForm {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: ContactForm) {
	console.log("sending email");

	const result = await resend.emails.send({
		from: "Site <promove@promovecb.com.br>",
		to: "promove@promovecb.com.br",
		subject: `[Site Promove] - ${formData.subject as string}`,
		html: `<p><strong>Nome:</strong> ${formData.name}</p>
			<p><strong>Email:</strong> ${formData.email}</p>
			<p><strong>Mensagem:</strong><br/>${(formData.message as string).replace(/\n/g, "<br/>")}</p>`,
	});

	return result;
}
