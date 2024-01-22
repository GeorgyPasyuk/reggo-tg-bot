import TelegramBot from "node-telegram-bot-api";
import {menuCommands} from "@shared/commands";
import {connectCommands} from "@commands/botCommands";
import {connectCallbackQueries} from "./callback-query";


require('dotenv').config();

const { TG_TOKEN: token } = process.env;

export const bot = new TelegramBot(token, { polling: true });
bot.setMyCommands(menuCommands!);


connectCommands();
connectCallbackQueries()

