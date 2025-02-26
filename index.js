const { Client } = require('discord.js');
const axios = require('axios');
const client = new Client({ intents: 32767 });

client.on('ready', () => {
 console.log('bot açıldı'); 
});

client.on('messageCreate', (message) => {
	if(message.content === '!deneme') {
		message.reply({
			content: 'Deneyebilirsinizzz',
			components:[{ type: 1, components: [{
				type: 2, custom_id: 'button', label: 'Denemek İçin Tıkla', style: 'PRIMARY',
			}] }],
		});
	}
});

client.on('interactionCreate', async (interaction) => {
	await axios({
		method: 'POST',
		url: `https://discord.com/api/interactions/${interaction.id}/${interaction.token}/callback`,
		headers: {
			Authorization: `Bot ${client.token}`,
		},
		data: {
			type: 9,
			data: {
				title: 'LosKros Register',
				custom_id: 'register',
				components: [
					{
						type: 1,
						components: [
							{
								type: 4,
								custom_id: 'registerr',
								label: 'İsim girmelisin?',
								style: 1,
								min_length: 2,
								max_length: 400,
								required : true,
							},
						],
					},
				],
			},
		},
	});
});

client.login(" token ");