import TelegramBot from "node-telegram-bot-api";
import {menuCommands} from "@shared/commands";
import {connectCommands} from "@commands/botCommands";
import {connectCallbackQueries} from "./callback-query";
import {forumId} from "@shared/forum/forumId";


const { TG_TOKEN: test } = process.env;

const token = '6703568202:AAFwhVdBEQkCZA6DBFYNg8Xb3ooFq34twcY'
export const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands(menuCommands!);

bot.on('text', async (msg)=> {
    if (msg.chat.id === forumId) {
        console.log(msg.reply_to_message)
        const userId = msg.reply_to_message.forum_topic_created.name.split(' ')[1]
        await bot.sendMessage(userId, msg.text)
    } else {
        //await bot.sendMessage(forumId, msg.text, {message_thread_id: 82})
        // const threadId = ''
        // await bot.sendMessage(forumId, msg.text, {message_thread_id: threadId})
    }
})
connectCommands();
connectCallbackQueries()

