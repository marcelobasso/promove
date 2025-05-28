"use server";

import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (req: VercelRequest, res: VercelResponse) => {
	const { name, email, assunto, mensagem } = req.body;

	await resend.emails.send({
		to: "contato@promovecb.com.br",
		from: "OrcDev <onboarding@resend.dev>",
		subject: assunto,
		html: `<p><strong>Nome:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Mensagem:<br/>${mensagem.replace(/\n/g, "<br/>")}</p>`,
	});
};
