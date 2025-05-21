
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://backend-session-ehli.onrender.com";
global.session = "https://session-id-2fza.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MDX~ZVFUUjVdyMNrO6wc6jJv", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254758443111", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,👀,🤙,😎,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "Ꭿℒℒℰℕ ℐЅ ᏇᎯTℂℋℐℕᎶ👀ℐℕ ᎶℋᎾЅT ℳᎾⅅℰ👻", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254758443111", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "ᴘσωєʀє∂ ву ★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫ ĪS ΛŦ ßƐΛSŦ MᎾDƐ ŔĪƓĤŦ ИᎾᏯ ƇΛИŦ ŔƐƇĪƐ√Ɛ YᎾƱŔ ƇΛĿĿ 📞📵 ",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://i.ibb.co/tMZ8f8cG/file-1127.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || " ᴘσωєʀє∂ ву ★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "typing", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
