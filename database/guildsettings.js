const { Schema, model } = require('mongoose');

const guildSchema = Schema({
	guildID: String,
	guildName: String,
	prefix: { type: String, default: require('../../assets/json/defaultGuildSettings.json').prefix },
	welcomePlugin: { type: Boolean, default: false },
	welcomeRaidConnect: { type: Boolean, default: false },
	welcomeMessageToggle: { type: Boolean, default: false },
	welcomeMessageChannel: { type: String },
	welcomeMessageText: { type: String, default: 'Hello {user}, Welcome to **{server}**!' },
	welcomePrivateToggle: { type: Boolean, default: false },
	welcomePrivateText: { type: String, default: 'Have a great time here in **{server}**.' },
	welcomeRoleToggle: { type: Boolean, default: false },
	welcomeRoleGive: { type: Array },
	welcomeGoodbyeToggle: { type: Boolean, default: false },
	welcomeGoodbyeText: { type: String, default: '**{user}** just left the server.' },
	LevelOption: { type: Number, default: 1 },
	LevelChannel: { type: String },
	LevelMessage: { type: String, default: 'GG {user}, you have leveled up to {level}!' },
	LevelIgnoreRoles: { type: Array },
	LevelIgnoreChannel: { type: Array },
	LevelMultiplier: { type: Number, default: 1 },
	LevelRoleRewards: { type: Array },
	MusicDJ: { type: Boolean, default: false },
	MusicDJRole: { type: String }, // the user with the DJ role will be able to have more power than a user without the role
	ModLog: { type: Boolean, default: false }, // display actions done by users by sending them to a channel
	ModLogEvents: { type: Array },
	ModLogChannel: { type: String },
	ModLogIgnoreBot: { type: Boolean, default: true },
	ModLogIgnoreChannel: { type: Array },
	PrefixTags: { type: Boolean, default: false },
	ModeratorRoles: { type: Array },
	MutedRole: { type: String },
	MutedMembers: { type: Array },
	ModerationWarningCounter: { type: Number, default: 3 },
	ModerationClearToggle: { type: Boolean, default: true },
	ModerationIgnoreBotToggle: { type: Boolean, default: true },
	TicketToggle: { type: Boolean, default: true },
	TicketSupportRole: { type: String },
	TicketCategory: { type: String },
	Language: { type: String, default: 'en-US' },
	plugins: { type: Array, default: ['Fun', 'Giveaway', 'Guild','Misc', 'Moderation', 'Music', 'NSFW', 'Plugins', 'Ticket'] }, // will display plugins that are active or still need to be set up
	version: { type: Number, default: '1.2' }, // grooves version
});

module.exports = model('Guild', guildSchema);
