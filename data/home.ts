// src/data/content.ts

export const siteContent = {
	banner: {
		title: "PRO\nMO\nVE",
		subtitle: "Sua Plataforma de Eventos em Carlos Barbosa",
		cta: "Comprar ingressos",
		ctaLink: "",
	},

	about: {
		title: "Quem\nSomos?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt eros at placerat fermentum. Curabitur nisi odio, porta ac egestas non, luctus id diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat auctor tortor at cursus. Aenean at leo id nibh pulvinar egestas nec non erat. Nulla tincidunt suscipit risus sed rhoncus. Sed lacinia arcu nec porttitor mattis. Suspendisse imperdiet dolor sit amet magna congue, sed pharetra odio dictum. Nunc lacinia vulputate velit quis porttitor. Nunc interdum eget erat eget hendrerit.\n\nInteger quis ipsum porttitor, venenatis arcu at, varius eros. Duis sit amet ante vehicula, facilisis velit eget, ultrices sem. In sed pharetra orci. Vivamus maximus a mauris sit amet mollis. Integer a mi leo. Nunc id justo bibendum, auctor mi eu, rutrum urna. Ut consequat odio ligula, quis porttitor nisl facilisis quis.",
		team: [
			{
				name: "Vinícius Audibert",
				instagram: "@vini_audibert",
				image: "assets/quem-somos/vinicius.jpg",
			},
			{
				name: "Matheus Patzlaff",
				instagram: "@matheus_patzlaff",
				image: "assets/quem-somos/matheus.jpg",
			},
			{
				name: "Antonio",
				instagram: "@antonio_pwb",
				image: "assets/quem-somos/vinicius.jpg",
			},
		],
	},

	events: {
		title: "Próximos Eventos",
		noEvents: "Nenhum evento agendado no momento. Fique ligado para as próximas novidades!",
		viewDetails: "Ver Detalhes",
		dateLabel: "Data",
		locationLabel: "Local",
		eventNotFound: "Evento não encontrado.",
	},

	eventList: [
		// Example of event data, could be in a separate events.ts
		{
			id: "festival-inverno",
			name: "Festival de Inverno Carlos Barbosa",
			date: "15 MAI - 17 MAI",
			time: "18:00h",
			location: "Parque da Estação",
			description: "Três dias de música, gastronomia e cultura local.",
			image: "/images/events/festival.jpg",
		},
		{
			id: "corrida-vinho",
			name: "Corrida do Vinho Carlos Barbosa",
			date: "22 JUN",
			time: "08:00h",
			location: "Centro Histórico",
			description: "Corra pelas belas paisagens vinícolas da cidade.",
			image: "/images/events/corrida.jpg",
		},
	],
	sponsors: {
		title: "Nossos Patrocinadores",
		cta: "Seja um Patrocinador",
		list: [
			// Example sponsor list
			{
				name: "Sponsor A",
				logo: "/images/sponsors/sponsorA.png",
				link: "https://www.sponsorA.com",
			},
			{
				name: "Sponsor B",
				logo: "/images/sponsors/sponsorB.png",
				link: "https://www.sponsorB.com",
			},
		],
	},
	contact: {
		title: "Fale Conosco",
		name: "Seu Nome Completo",
		email: "Seu Email",
		subject: "Assunto",
		message: "Sua Mensagem",
		send: "Enviar Mensagem",
		phone: "Telefone:",
		address: "Endereço:",
		emailContact: "Email:",
		successMessage: "Mensagem enviada com sucesso!",
		errorMessage: "Erro ao enviar mensagem.",
	},
	footer: {
		copyright: "Todos os direitos reservados.",
	},
};

// If you prefer to export events separately:
export const eventsData = siteContent.eventList;
// Then remove eventList from siteContent and import eventsData where needed.
