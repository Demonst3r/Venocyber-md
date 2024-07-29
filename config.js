//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "2349163929054";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://venocyberqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID ="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BxWW0vT3NER3d4ZjZGTllDRmQ5UmRGeU44ZzMyb3VWOWgvUUp4b28waz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGtyeEtUaXhncnkzUDBBWmdxc2VPU21ZV3VxNDlHb1JjUmFmb3FqUGtHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS3p4MkZhek02aUdmVndCK054YXd6ek1QQ0FZY3RUbjRlaFNQSUhyQUdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMllETzJvY3VUTEZKRW9OVU1QTUJleDZ4Zld2eXZNZmgvaGpiU2M5bDM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMTnVKZUV4NlhaWUMxTHBsQ1VSS0M5SXg0cm85eWF6dER5T1pDNVFDMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcxcllxeUxISVIyMGl1aS9vcnpERWtJa1RtZWtEbXFOUFJjNUdBemRkWEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0xQRzh4cjJkNERmaFYvbm52d2xzU0V0YnMxSmdER3JBUjJrTU56M0IwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazJWQ0NlUFBmZzlxY01Qek1qYlUvTHVTUmJwUWN3WlhTaVZrVlZZamRGVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlqR2MyZHNJbnVKUWxmLytmMEdFVzNINktpdjE5RDlDdnRQSFlLV2QwS2drdkVPK3RLRWRReGpjVzRYMk5vclhESXBFNlFObGN3S3lKdFVSdWo2ekFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6IkNIZmdiUTJQTm9rRGNWdEc5T2dKSm8zb056dHRHTW5jd3UrYWo2WHFBVVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxCOFFLYVNOU2JtVHY5dUp5Y1lVQUEiLCJwaG9uZUlkIjoiMjFmYTI1M2UtYjNiNC00MDI2LTgxMTYtZTA3Mzg2YTJlNzcwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Ra25QYjY0SWI0Kytic3d6RHplbGt1N3o0MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMdG9zNU0ybVcwNVJ2QURPbFQrNFZUSURUK0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFkxTjlENVciLCJtZSI6eyJpZCI6IjIzNDkxNjM5MjkwNTQ6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLsgqzslYXtlZwg6riw67aEICjDilbDj0wgTcOYw5hEKSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnl3a2JJREVQU3luN1VHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMk13ZlJ4N2JZbmhsVU1LUGxnaTlDZjc5dVlzenRRblAxYnlocTdORVpEbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQWR3cFIxdTM5K2VMbStBRkR3RFZSUWYzaHVubTF1OU9jdnVuS2ZEVXBzYWtaWXo5dUZNUWR0cXhORzByQ2orYzYwbmN5cVpYREliMUVWYnRhTkdiQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InhINkxXMktGSkdRc05JcWJ1U0NtMFpmaEZVek5CQ3N6MEJ4Q3BxWlM4TUlFOGpNaXBITmg0UkljSmRTT3lKeFlXeC9SbWFVR1RndzR6U1FweGxwRENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE2MzkyOTA1NDo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRqTUgwY2UyMko0WlZEQ2o1WUl2UW4rL2JtTE03VUp6OVc4b2F1elJHUTYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyNzYyMjZ"
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-VENOCYBER-𝐌𝐃😍",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "EVIL MØØD😈🔥",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
