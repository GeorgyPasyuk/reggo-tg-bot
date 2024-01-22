
import {bot} from "@index/*";
import {cloudR} from "@shared/regexp/cloudRegexp";
import {cloudText} from "@shared/text/cloud/cloud";
export const cloudQuery = () => {
    bot.on("callback_query", async (ctx) => {
        try {
            if(cloudR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    cloudText
                )
                await bot.sendContact(ctx.message.chat.id, "+79858153238", 'Поддержка REGGO')
            }
        } catch (error) {
            console.log(error);
        }
    });
};