
import {bot} from "@index/*";
import {cameraSelectMU} from "@mark-up/cameras/cameraSelectMU";
import {wifiMU} from "@mark-up/cameras/wifiMU";
import {babysitterR, cameraIssueR, fourgR, wifiR} from "@shared/regexp/cameraRegexp";
import {babysitterMU} from "@mark-up/cameras/babysitterMU";
import {fourGMU} from "@mark-up/cameras/fourGMU";
import {wifiText} from "@shared/text/cameras/wifi/wifiText";
import {
    babysitterPhoto,
    fourGPhoto,
    fourGPhoto2,
    fourGPhoto3,
    wifiPhoto,
    wifiPhoto2,
    wifiPhoto3
} from "@shared/media/mediaFileId";
import {babysitterText} from "@shared/text/cameras/babysitter/babysitterText";
import {fourGText} from "@shared/text/cameras/fourG/fourGText";
export const cameraQuery = () => {
    bot.on("callback_query", async (ctx) => {
        try {
            if(cameraIssueR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    "Пожалуйста, выберите Вашу камеру",
                    cameraSelectMU,
                );
            } else if (wifiR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    wifiText,
                );
                await bot.sendPhoto(
                    ctx.message.chat.id,
                    wifiPhoto,
                );
                await bot.sendPhoto(
                    ctx.message.chat.id,
                    wifiPhoto2,
                );
                await bot.sendPhoto(
                    ctx.message.chat.id,
                    wifiPhoto3,
                );
                await bot.sendMessage(
                    ctx.message.chat.id,
                    "Пожалуйста, уточните Вашу проблему",
                    wifiMU,
                );
            } else if (babysitterR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    babysitterText
                );
                await bot.sendPhoto(
                    ctx.message.chat.id,
                    babysitterPhoto,
                );
                await bot.sendMessage(
                    ctx.message.chat.id,
                    "Пожалуйста, уточните Вашу проблему",
                    babysitterMU,
                );
            } else if (fourgR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    fourGText
                );
                await bot.sendPhoto(
                    ctx.message.chat.id,
                    fourGPhoto,
                );
                await bot.sendPhoto(
                    ctx.message.chat.id,
                    fourGPhoto2,
                );
                await bot.sendPhoto(
                    ctx.message.chat.id,
                    fourGPhoto3,
                );
                await bot.sendMessage(
                    ctx.message.chat.id,
                    "Пожалуйста, уточните Вашу проблему",
                    fourGMU,
                );
            }
        } catch (error) {
            console.log(error);
        }
    });
};