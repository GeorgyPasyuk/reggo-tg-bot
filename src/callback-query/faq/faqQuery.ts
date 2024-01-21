import {bot} from "@index/*";
import {registrationVideo, sdCardVideo, wifiVideo} from "@shared/media/mediaFileId";
import {alarmR, faqR, fourGErrorR, howtoAddUserR, registrationVideoR, sdVideoR} from "@shared/regexp/faqRegexp";
import {addUserText, alarmText, errFourG} from "@shared/text/faq/faq";
import {faqMU} from "@mark-up/faq/faqMU";

export const faqQuery = () => {
    bot.on("callback_query", async (ctx) => {
        if (faqR.test(ctx.data)) {
            await bot.sendMessage(
                ctx.message.chat.id,
                'Выберите интересующий Вас вопрос',
                faqMU
            )
        } else if (registrationVideoR.test(ctx.data)) {
            await bot.sendVideo(
                ctx.message.chat.id,
                registrationVideo
            )
        } else if (sdVideoR.test(ctx.data)) {
            await bot.sendVideo(
                ctx.message.chat.id,
                sdCardVideo
            )
        } else if (howtoAddUserR.test(ctx.data)) {
            await bot.sendMessage(
                ctx.message.chat.id,
                addUserText
            )
        } else if (fourGErrorR.test(ctx.data)) {
            await bot.sendMessage(
                ctx.message.chat.id,
                errFourG
            )
        } else if (alarmR.test(ctx.data)) {
            await bot.sendMessage(
                ctx.message.chat.id,
                alarmText
            )
        }
    });
};