const Telegraf = require("telegraf");
const config = require("./config").telegraf;

const bot = new Telegraf(config.key);
bot.startWebhook(`/${config.prefix}`, null, config.port)
bot.telegram.setWebhook(`${config.address}/${config.prefix}`);

bot.catch((err) => {
  console.log("Ooops", err);
});

bot.on("message", ctx => {
  console.log("message", ctx.message.text);
});

bot.start((ctx) => ctx.reply(42/0));
bot.launch();
