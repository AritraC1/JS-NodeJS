const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

// Create a client
const client = new Client({
  // client permissions
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Run this callback function whenever a message is created
client.on("messageCreate", (message) => {
  // After bot messages return, stops the bot from replying to itself
  if (message.author.bot) return;

  message.reply({
    content: `Hello! ${message.author}`,
  });
});

// Callback to interact with the bot
client.on("interactionCreate", (interaction) => {
  // console.log(interaction);
  interaction.reply("Pong");
});

// Client login using unique secret token
client.login(process.env.DISCORD_TOKEN);
