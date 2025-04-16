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
global.owner = process.env.OWNER_NUMBER || "2250143635096";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09FdFBOSHRMY2VyVmMvUUJURnh3dTdhZGE0QnRjZ3lPT1NYSlNFblBYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUklIUXRkYnFNWlhjWVNPVHNTbkFKcUJ4V2VndWRHaUhGTXIxaXkvcFNIST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R0N1QUZQUjRrUHNhMnVKb2llYjJUMlM2NHFxM0RNS1FiRlVRYVVxbUVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6eHdvbDZObE5reEFhVGh5MkhodVBOSGtmY1lSL3JCakFEZ21BU0xlUW00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIMHVUOG9zVUgrNHZCWkhxZStVRDBOZVBpL2cweVJROFAyM1BsTDJQa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVEbGgvcEUwckFsdHdZQUJ6QW5WdExzS3ozcVhxYlZGRFZIeThGRXlMRlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpUa3pVNXFreUJOd0ZTVGt0YUQwZ2x2ZjdkZklLRzM3c3RSajNiZUpVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnlqaG9QU3NGQWVyQTJJclpwbFJaY2JxQVJYZFA5c0pHKzdCOEpQUkJXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxSU3pxOFZjYmRzS082anZVTXVlNnZFd09YNmYzSDRtemZrd0c4YXhlM2lvV2lVSTVhd0E1bFJnWU5EVTNjc3FIVENpV21KSGJFZXM5bFdSME5ORmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6IjgzcVBUdnlNaVVvVTZmN3dLZ3lDb1RvWWtYaVNiRGhVNzUreUJzTGhla0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmUjFhNEpFUDYvL0w4R0dDVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhqV1cxMWhVL0JzbEJCRU1RckpkNkJaV3RtL2w2VEc0ZnhPdVNYblhOemc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imd3N0sxL2ZzN3gvcjB3ZS9tNDhTVmpaZGc3c1lMTHVKMzk4WXl2VFJsWE83dlY2WXJ5Rk0vbm5iMTF1QjhkUnNrZEo0OXc1SEYwU3NJK3hIaU12b0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0QkZGYUZPeEN2OTZvRzFlWTlldkt2K2ZiR2ZqRmdycXFkenNpcUhlZjd0TGU1ZjlQdG4rUTFCRTJ4ZGNMcVJXUlp5OTIzRktCVzhHVWhFQWNxeldpUT09In0sIm1lIjp7ImlkIjoiMjI1NDM1MzUwOTY6ODFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qg/CdkIjwnZCA8J2QgfCdkIvwnZCOIPCSi7LwnZCK8J2QlPCdkJHwnZCO8J2QmPCdkIDgvIYiLCJsaWQiOiIzNDc5ODM5NTUxMDk0Mzo4MUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NDM1MzUwOTY6ODFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjQxbHRkWVZQd2JKUVFSREVLeVhlZ1dWclp2NWVreHVIOFRya2w1MXpjNCJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0NzczMTMwLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9kMiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "꧁✯♟️𓊈𓃠𝐊𝐀𝐑𝐀⚜️𓊉ᏦℐᎽᎾᏆᎯᏦᎯ ♟️✯꧂",
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
