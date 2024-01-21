import {bot} from "@index/*";
import {babysitterEndR, babysitterNetErrR, babysitterVideoR} from "@shared/regexp/cameraRegexp";
import {babysitterVideo} from "@shared/media/mediaFileId";
import {wifiProblemText} from "@shared/text/cameras/wifi/wifiText";
import {babysitterEndMU} from "@mark-up/cameras/babysitterMU";
import {babysitterEndText} from "@shared/text/cameras/babysitter/babysitterText";

export const babysitterQuery = () => {
    bot.on("callback_query", async (ctx) => {
        try {
            if(babysitterVideoR.test(ctx.data)) {
                await bot.sendVideo(
                    ctx.message.chat.id,
                    babysitterVideo
                );
            } else if (babysitterNetErrR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    wifiProblemText,
                    babysitterEndMU
                );
            } else if (babysitterEndR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    babysitterEndText,
                );
                await bot.sendVideo(
                    ctx.message.chat.id,
                    babysitterVideo
                );
            }
        } catch (error) {
            console.log(error);
        }
    });
};