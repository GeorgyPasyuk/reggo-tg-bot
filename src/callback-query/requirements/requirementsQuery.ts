
import {bot} from "@index/*";
import {reqFourGR, reqR, reqSdCardR, reqWifiR} from "@shared/regexp/reqRegexp";
import {reqFourGText, reqSdCardText, reqText, reqWifiText} from "@shared/text/req/req";
import {requirementsMU} from "@mark-up/requirements/requirementsMU";
export const requirementsQuery = () => {
    bot.on("callback_query", async (ctx) => {
        try {
            if(reqR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    reqText,
                    requirementsMU
                );
            } else if (reqWifiR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    reqWifiText,
                );
            } else if (reqFourGR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    reqFourGText
                );
            } else if (reqSdCardR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    reqSdCardText
                );
            }
        } catch (error) {
            console.log(error);
        }
    });
};