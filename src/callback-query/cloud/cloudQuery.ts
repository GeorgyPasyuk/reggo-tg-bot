
import {bot} from "@index/*";
import {cloudR} from "@shared/regexp/cloudRegexp";
import {cloudText} from "@shared/text/cloud/cloud";
import {forumId} from "@shared/forum/forumId";
export const cloudQuery = () => {
    bot.on("callback_query", async (ctx) => {
        try {
            if(cloudR.test(ctx.data)) {
                await bot.sendMessage(
                    ctx.message.chat.id,
                    cloudText
                ).then(() => bot.addListener("photo", async (photo)=> {}))
                bot.on('photo', async ()=> {
                    await bot.createForumTopic(forumId, ctx.message.chat.id.toString())
                    await bot.sendMessage(
                        ctx.message.chat.id,
                        'Спасибо! Теперь пожалуйста отправьте данное фото в WhatsApp по номеру представленному ниже:'
                    ).then(()=> bot.removeAllListeners('photo'))
                    await bot.sendContact(ctx.message.chat.id, "+79858153238", 'Поддержка REGGO')
                })
            }
        } catch (error) {
            console.log(error);
        }
    });
};