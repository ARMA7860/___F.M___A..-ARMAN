////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT ARIF BABU
const fs = require("fs");
module.exports.config = {
        name: "gana mark",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "FAIZ ANSARI", 
        description: "THIS BOT IS faiz Ansari",
        commandCategory: "NO PREFIX",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("song") ||
     react.includes("music") || react.includes("audio") || react.includes("play") ||
react.includes("Song") ||
react.includes("Music")) {
                var msg = {
                                body: `मेरी जान गाने के लिए [ #yt ] लिखो 🎶🙂`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎶", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

				       }
