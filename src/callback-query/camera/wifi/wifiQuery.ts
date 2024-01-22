import {bot} from "@index/*";
import {cameraSelectMU} from "@mark-up/cameras/cameraSelectMU";
import {wifiEndR, wifiNetErrR, wifiVideoR} from "@shared/regexp/cameraRegexp";
import {registrationVideo, wifiVideo} from "@shared/media/mediaFileId";
import {reqWifiText} from "@shared/text/req/req";
import {wifiEndText, wifiProblemText} from "@shared/text/cameras/wifi/wifiText";
import {wifiEndMU} from "@mark-up/cameras/wifiMU";
import {phoneText} from "@shared/text/phone/phoneText";

export const wifiQuery = () => {
    bot.on("callback_query", async (ctx) => {
        try {
            if(wifiVideoR.test(ctx.data)) {
                await bot.sendVideo(
                    ctx.message.chat.id,
                    wifiVideo
                );
            } else if (wifiNetErrR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    wifiProblemText,
                    wifiEndMU
                )
            } else if (wifiEndR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    wifiEndText,
                )
                await bot.sendVideo(
                    ctx.message.chat.id,
                    wifiVideo
                );
                await bot.sendMessage(
                    ctx.message.chat.id,
                    phoneText,
                );
                await bot.sendContact(ctx.message.chat.id, "+79858153238", 'Поддержка REGGO')
            }
        } catch (error) {
            console.log(error);
        }
    });
};