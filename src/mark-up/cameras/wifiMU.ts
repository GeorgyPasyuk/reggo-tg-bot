export const wifiMU = {
    reply_markup: {
        inline_keyboard: [
            [{ text: "Нужна видеоинструкция", callback_data: "wifi-video" }],
            [{ text: "Я уже подключил камеру, но выдаёт ошибку сети", callback_data: "wifi-net-err" }],
        ],
    },
};

export const wifiEndMU = {
    reply_markup: {
        inline_keyboard: [
            [{ text: "Не помогает", callback_data: "wifi-end" }],
        ],
    },
}