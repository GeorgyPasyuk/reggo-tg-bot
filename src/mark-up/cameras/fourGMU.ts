export const fourGMU = {
    reply_markup: {
        inline_keyboard: [
            [{ text: "Нужна видеоинструкция", callback_data: "fourG-video" }],
            [{ text: "Я уже подключил камеру, но выдаёт ошибку сети", callback_data: "fourG-net-err" }],
        ],
    },
};

export const fourGEndMU = {
    reply_markup: {
        inline_keyboard: [
            [{ text: "Не помогает", callback_data: "fourG-end" }],
        ],
    },
}