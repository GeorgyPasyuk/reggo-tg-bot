import {bot} from "@index/*";
import {fourGEndR, fourGNetErrR, fourgVideoR} from "@shared/regexp/cameraRegexp";
import {fourGVideo} from "@shared/media/mediaFileId";
import {fourGEndText, fourGProblemText} from "@shared/text/cameras/fourG/fourGText";

export const fourGQuery = () => {
    bot.on("callback_query", async (ctx) => {
        try {
            if (fourgVideoR.test(ctx.data)) {
                await bot.sendVideo(
                    ctx.message.chat.id,
                    fourGVideo,
                );
            } else if (fourGNetErrR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    fourGProblemText,
                );
            } else if (fourGEndR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    fourGEndText,
                );
                await bot.sendVideo(
                    ctx.message.chat.id,
                    fourGVideo,
                );
            }
        } catch (error) {
            console.log(error);
        }
    });
};