module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Eden", // তোমার নাম
  description: "Random fun reply when someone says Bot or any other nickname",
  commandCategory: "Fun",
  usages: "[Bot|Baby|Janu|Eden|Melissa|Bou|...]",
  cooldowns: 2,
};

const botReplies = [
  "বেশি bot Bot করলে leave নিবো কিন্তু😒😒",
  "শুনবো না😼 ইডেন বস mingle🫥",
  "আমি আবাল দের সাথে কথা বলি না,ok😒",
  "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
  "Bolo Babu, তুমি কি আমাকে ভালোবাসো?🙈",
  "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑",
  "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?",
  "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬",
  "I love you janu🥰",
  "আরে Bolo আমার জান ,কেমন আছো?😚",
  "Bot বলে অসম্মান করছি,😰😿",
  "Hop beda😾,Boss বল boss😼",
  "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু",
  "এইনে আমার বস এর আইডি😼 https://www.facebook.com/share/1LZBKT9s7Z/",
  "Bot না , জানু বল জানু 😘",
  "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋",
  "আরে বলদ এতো ডাকিস কেন🤬",
  "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘",
  "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒",
  "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘",
  "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস 😉😋🤣",
  "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂",
  "আমাকে ডেকো না,আমি বস eden এর সাথে ব্যাস্ত আছি🤣🤣",
  "বস কী বলবেন বলেন🤣🤣",
  "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏",
  "কালকে দেখা করিস তো একটু 😈",
  "হা বলো, শুনছি আমি 😏",
  "আর কত বার ডাকবি ,শুনছি তো",
  "হুম বলো কি বলবে😒",
  "বলো কি করতে পারি তোমার জন্য",
  "আমি তো অন্ধ কিছু দেখি না🐸 😎",
  "Bot না জানু,বল 😌",
  "বলো জানু 🌚",
  "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒",
  "হুম জান তোমার ওই গালে উম্মহ😑😘",
  "আহ শুনা আমার তোমার গালেতে গালেতে উম্মাহ😇😘",
  "jang hanga korba😒😬",
  "হুম জান?🙈💋",
  "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..?",
  "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈",
  "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻",
  "আমি এখন বস eden এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
  "আমার বস MUNTASIR MAHMUD এর আরেক নাম 𝐄𝐝𝐞𝐧 愛"
];

const triggers = ["bot", "baby", "janu", "জানু", "eden", "kutta", "bby", "melissa", "bou"];

// RegExp ব্যবহার করে punctuation বা emoji ignore করে match করা হবে
const triggerRegex = new RegExp(triggers.join("|"), "i"); // "i" = case-insensitive

module.exports.run = async function ({ api, event }) {
  try {
    if (!event || !event.body) return;
    const text = event.body;

    // Regex দিয়ে trigger match করা হচ্ছে
    if (!triggerRegex.test(text)) return;

    const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
    api.sendMessage(reply, event.threadID, event.messageID);
  } catch (err) {
    console.error(err);
  }
};
