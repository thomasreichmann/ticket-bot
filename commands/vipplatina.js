const Discord = require('discord.js');

module.exports = {
	name: 'vipplatina',
	description: 'Manda as embeds que formam o canal do vipplatina.',
	usage: 'vipplatina',
	ids: ['181270590672338944'],
	hideHelp: true,
	execute(/** @type {Discord.Client} */ client, /** @type {Discord.Message} */ message, args) {
		message.delete();

		let color = 'aafff3';

		let kitPvpEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setDescription('**KIT PVP**\n\nPode ser usado a cada **1 Hora**\nÉ bloqueado por **6 Horas** após o wipe')
			.setImage('https://i.imgur.com/D6QlzrU.png');

		message.channel.send(kitPvpEmbed);

		let kitRecursoEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setDescription('**KIT RECURSOS**\n\nPode ser usado a cada **21 Horas**\nÉ bloqueado por **6 Horas** após o wipe')
			.setImage('https://i.imgur.com/jvvVVyI.png');

		message.channel.send(kitRecursoEmbed);

		let kitFarmEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setDescription('**KIT FARM**\n\nPode ser usado a cada **15 Minutos**')
			.setImage('https://i.imgur.com/LyDQcns.png');

		message.channel.send(kitFarmEmbed);

		let kitBaseEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setDescription('**KIT BASE**\n\nPode ser usado a cada **24 Horas**')
			.setImage('https://i.imgur.com/YbkcvKN.png');

		message.channel.send(kitBaseEmbed);

		let infoEmbed = new Discord.MessageEmbed()
			.setColor(color);

		let d = '**Vip Platina**\n\n' +
		'ㅤ🏆 **Todos os kits disponíveis nesse VIP estao listados acima**\n\n' +
		'Tag **Platina** ingame e cargo no discord\n\n' +
		'**Divisor de fornalha ➣** Divisao automatica de items em fornalha\n' +
		'**/bgrade (1-4) ➣** Upgrade automatico de contrucoes\n' +
		'**/sil ➣** Imagens customizadas em placas\n' +
		'**/al ➣** Sistema Automático de Tranca em portas/baús\n' +
		'**/turret ➣** Turrets e SAM Sites não precisam de energia\n\n' +
		'Backpack **Slots** ➣ ~~6~~ - 24\n' +
		'Max **Homes** ➣ ~~5~~ - 12\n' +
		'Cooldown **Home** ➣ ~~30s~~ - 5s\n' +
		'Cooldown **TPR** ➣ ~~30s~~ - 5s\n' +
		'Prioridade de **Queue**\n\n' +
		'ㅤ☄️ **Exclusividades**\n\n' +
		'**/mymini ➣** Spawn Heli Cooldown **10 Min**\n' +
		'**/mycar ➣** Spawn Carro Cooldown **6 Horas**\n' +
		'**Kit Base ➣** Kit com cooldown de 24h';

		infoEmbed.setDescription(d);

		message.channel.send(infoEmbed);

		let priceEmbed = new Discord.MessageEmbed()
			.setColor(color);

		d = '**💠 Info**\n\n' +
		'**Preço**: R$75,00\n' +
		'**Duração**: 30 dias\n' +
		'**Métodos de pagamento**: Cartão de crédito, PayPal, Boleto e Transferência bancária\n\n' +
		'Duvidas ou interesse em compra, contate <@181270590672338944>';
		priceEmbed.setDescription(d);

		message.channel.send(priceEmbed);

	},
};