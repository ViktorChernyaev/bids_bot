const { NODE_PORT, TELEGRAM_BOT_KEY, TELEGRAM_ROUTE_ADDRESS, TELEGRAM_ROUTE_PREFIX } = process.env;

if (!NODE_PORT) throw new Error("Please provide NODE_PORT");
if (!TELEGRAM_BOT_KEY) throw new Error("Please provide TELEGRAM_BOT_KEY");
if (!TELEGRAM_ROUTE_ADDRESS) throw new Error("Please provide TELEGRAM_ROUTE_ADDRESS");
if (!TELEGRAM_ROUTE_PREFIX) throw new Error("Please provide TELEGRAM_ROUTE_PREFIX");

const telegraf = {
  port: NODE_PORT,
  key: TELEGRAM_BOT_KEY,
  address: TELEGRAM_ROUTE_ADDRESS,
  prefix: TELEGRAM_ROUTE_PREFIX,
};

module.exports = { telegraf };
