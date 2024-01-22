import {bot} from "@index/*";
import {fourGEndR, fourGNetErrR, fourgVideoR} from "@shared/regexp/cameraRegexp";
import {fourGVideo} from "@shared/media/mediaFileId";
import {fourGEndText, fourGProblemText} from "@shared/text/cameras/fourG/fourGText";
import {endErrMU} from "@mark-up/end-err/endErrMU";
import {fourGEndMU} from "@mark-up/cameras/fourGMU";

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
                    fourGEndMU
                );
            } else if (fourGEndR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    fourGEndText,
                );
                await bot.sendVideo(
                    ctx.message.chat.id,
                    fourGVideo,
                    endErrMU
                );
            }
        } catch (error) {
            console.log(error);
        }
    });
};