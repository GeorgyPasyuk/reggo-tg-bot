import {bot} from "@index/*";
import {endErrRegexp} from "@shared/end-err/endErrRegexp";
import {phoneText} from "@shared/text/phone/phoneText";

export const endErrQuery = () => {
    bot.on("callback_query", async (ctx) => {
        if (endErrRegexp.test(ctx.data)) {
            await bot.sendMessage(
                ctx.message.chat.id,
                phoneText,
            )
            await bot.sendMessage(ctx.message.chat.id, "+79858153238")
        }
    });
};