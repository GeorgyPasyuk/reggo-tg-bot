export const requestContactMU= {
    reply_markup: ({
        keyboard: [
            [{ text: "Поделитесь своим номером телефона", request_contact: true }]
        ],
        one_time_keyboard : true
    })
};