
import {startMarkup} from "@mark-up/start-markup";
import {bot} from "../index";
import {faqMU} from "@mark-up/faq/faqMU";
import {forumId} from "@shared/forum/forumId";

export const connectCommands = () => {
    bot.on("text", async (msg) => {
        try {
            if (msg.text == "/start") {
                await bot.sendMessage(
                    msg.chat.id,
                    "Здравствуйте, вас приветствует компания REGGO. Спасибо, что выбрали нас, пожалуйста выберите, что вас интересует:",
                    startMarkup,
                );
            } else if (msg.text == "/faq") {
                await bot.sendMessage(
                    msg.chat.id,
                    "Вы перешли на часто задаваемые вопросы, пожалуйста выберите вашу проблему из списка ниже",
                    faqMU,
                );
            } else if (msg.text == "/phone") {
                await bot.sendMessage(
                    msg.chat.id,
                    "Номер телефона поддержки в WhatsApp",
                );
                await bot.sendContact(msg.chat.id, "+79858153238", 'Поддержка REGGO')
            }
        } catch (error) {
            console.log(error);
        }
    });
};