const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
  name: "admin",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Show Owner Info",
  commandCategory: "info",
  usages: "admin",
  cooldowns: 2
};

module.exports.run = async function({ api, event }) {
  const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
  const imgPath = __dirname + "/cache/owner.jpg";

  // ✅ Direct image link
  const imageURL = "https://i.imgur.com/nI4laT8.jpeg";

  const callback = () => {
    api.sendMessage({
      body: `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│ 👤 𝐍𝐚𝐦𝐞 : 𝐌𝐔𝐍𝐓𝐀𝐒𝐈𝐑 𝐌𝐀𝐇𝐌𝐔𝐃
│ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫 : 𝐌𝐀𝐋𝐄
│ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝐌𝐈𝐍𝐆𝐋𝐄
│ 🎂 𝐀𝐠𝐞 : 15+
│ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : 𝐈𝐬𝐥𝐚𝐦
│ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐑𝐀𝐉𝐒𝐇𝐀𝐇𝐈
└───────────────⭓

┌───────────────⭓
│ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
├───────────────
│ 📘 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿:
│ https://m.me/ibonex.eden
│ 💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽:
│ তরে দিমু ক্যা?
└───────────────⭓

┌───────────────⭓
│ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲
├───────────────
│ ${time}
└───────────────⭓
`,
      attachment: fs.createReadStream(imgPath)
    }, event.threadID, () => fs.unlinkSync(imgPath));
  };

  // Download image and run callback
  request(imageURL)
    .pipe(fs.createWriteStream(imgPath))
    .on("close", callback);
};
