export const babysitterMU = {
    reply_markup: {
        inline_keyboard: [
            [{ text: "Нужна видеоинструкция", callback_data: "babysitter-video" }],
            [{ text: "Я уже подключил камеру, но выдаёт ошибку сети", callback_data: "babysitter-net-err" }],
        ],
    },
};

export const babysitterEndMU = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Не помогает", callback_data: "babysitter-end"}],
        ],
    }
}