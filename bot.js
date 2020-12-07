require("dotenv").config();
const tmi = require("tmi.js");

const commands = {
  hello(channel, username) {
    return client.say(channel, `@${username}, salve!`);
  },
  zenith(channel, username) {
    return client.say(
      channel,
      `@${username}, Então, o Zenith é o criador da porra toda. Roch tem sorte de ter os mods que tem!`
    );
  },
  botlivinha(channel, username) {
    return client.say(
      channel,
      `@${username}, A mais estressada da live, sem dúvidas. Bota uns twice louco e fica puto se você reclamar da qualidade musical.`
    );
  },
  botruanzinho(channel, username) {
    return client.say(
      channel,
      `@${username}, Melhor mod desse canal, definitivamente. Ta ativo em todas as lives e da sub pra todo mundo, só pedir.`
    );
  },
  elmo(channel, username) {
    return client.say(
      channel,
      `@${username}, Editor da porra toda, melhor que o Bronziocre. Tira leite de pedra pra fazer o conteúdo desse desse maluco ser minimamente aceitável.`
    );
  },
  roch(channel, username) {
    return client.say(
      channel,
      `@${username}, O pessoal vem aqui por pena dele. A gente gosta mesmo é do chat, aturar ele e as merdas que ele fala são partes do combo.`
    );
  },
};

const config = {
  options: { debug: true, messagesLogLevel: "info" },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: ["ooozenith"],
};
const client = new tmi.Client(config);
client.connect().catch(console.error);
client.on("message", onmessageHandler);

function onmessageHandler(channel, tags, message, self) {
  if (self) return;
  console.log(message, tags.username);
  if (message.startsWith("*")) {
    const action = message.replace("*", "");
    if (commands[action]) {
      commands[action](channel, tags.username);
    }
  }
  return null;
}
