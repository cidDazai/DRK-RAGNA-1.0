//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "2250564619604";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01HRytpd0FWd1RFdVc0dlIvcGlCTkVzRVpNVTVGUElNM2hubnQyL0trST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDQyRGE2TElEc2JQRUpEdGwzZmVadzhKSUZJa1ZuaC9YUm1jeVhUNlNrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRWF6RVJKOGpTbGM0aUVrM0VvM0RXV0FiTDVhYnZkVmFWQnRxakhDZ1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzQVNNZDhHeG43QVJSbjlZL00zNnppbm9rZnRpd2Zwc1FkamFzNk4wU2s4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFV2VYWUNFQzdBQ1ZTS0I2cG5JaGVORDlDZVFFcFJvalMxUXUrVm9KSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJRZHVpMWJYN3AxWGRWTUdHdmVxZS9xZWcyQ0lHWFhQN21hVTkwS2NZQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RDQXhBK1FIQ1dKM3hWK3FhUGlabytpRE9SOWVRSXJJbnNYb2lhaWtuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0prbmtDT1dUTTJDeFJmUVl2YURsSFdIcldaOGZJOHNUaTRXZzMzQ2tEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBDUEwyN1FDK2lSaXJSUWwwL0lNK1hYU0tNY2ZMVStsVy85b3hPR0UyNXpHa0UvY2RyZStmVHpJS0hCVy9KNG5mMTQvR1ZJdjFYbG1FRmM1OERRNGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJQYURQYVF6WDBhK3B2ZmN4ZHJqSzlpUzJjb1dQRHN5aWYrSVUvUGF3UkQ4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTY0NjE5NjA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NEUxNTkzMDk3MTczRUNGMzNBNTEzRDU1MkM4NDgzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDY4OTY0MTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyNTY0NjE5NjA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwOEE3QzAwMkU3RDUwODU4RkM3RjZDNUU3MThDM0I4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDY4OTY0MTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVVcnVudEJZU2xXWXNfWjVMR1ZuQ1EiLCJwaG9uZUlkIjoiNWEzMmJkYWYtNzdmOC00YTM2LWE5NWMtNGU5ZDY4ZGRlZWM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBqaDNZeFhxSHN1Z3NvMVVuRStlcStIYUJEND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyOFYvVVQyVmtoRGc5MGl4aWhDRGZxN09jZ0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDk5V1NWTEoiLCJtZSI6eyJpZCI6IjIyNTY0NjE5NjA0OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4L+Q4Ly14LyG4LyS8J2Ru/Cdka/wnZGsIPCdkb7wnZGs8J2RqPCdkbLwnZGs8J2RuvCdkbvgvJLgvIbgv5DgvLUg6qeCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOemdxZGNHRUpDTS9zQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsSHdCRTY4d3lvQm1MNG9TdXd6MEtCYTFSKzFRd0g5QWd5ODA5bHBCdmxFPSIsImFjY291bnRTaWduYXR1cmUiOiJMNFgzSlIxVmppeXNGdVg0NFA0NW12Q2daR1gxUVdxVnNSSVNyWjNTOGlOc3FoUVRjdUhvdHVpOUJDQmtvSFUxWHpJdU1ZVjI3Z3ZXRmxNeUxMRm9EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVGw5MFUvVkdzdjVyVUlFK21sWkppS3cxN1RzN1U5TXlHSjVueVJXWTFQT09zMHlMWS95L0w5RWNrVVdqd3ZDYkpkM0FpT2tEdzNTdU5wY2xXbm9WZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU2NDYxOTYwNDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpSOEFST3ZNTXFBWmkrS0Vyc005Q2dXdFVmdFVNQi9RSU12TlBaYVFiNVIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY4OTY0MTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWg0In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "꧁࿐༵༆༒𝑻𝑯𝑬 𝑾𝑬𝑨𝑲𝑬𝑺𝑻༒༆࿐༵ ꧂",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "privé",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
