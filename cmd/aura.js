module.exports = {
  name: "aura",
  description: "Affiche une aura magique stylisée autour de l'utilisateur",
  category: "Fun",
  usage: ".aura",
  execute: async (client, m) => {
    const sender = m.sender;
    const name = m.pushName || "Inconnu";
    const auraColors = ["🔵", "🟣", "🟢", "🔴", "🟡", "⚪", "🟠"];
    const powers = [
      "Vision astrale",
      "Bouclier mental",
      "Charisme mystique",
      "Force élémentaire",
      "Vitesse spectrale",
      "Chance divine",
      "Sérénité absolue"
    ];

    const aura = auraColors[Math.floor(Math.random() * auraColors.length)];
    const power = powers[Math.floor(Math.random() * powers.length)];

    const message = `
╭━━━[ ✨ ᴀᴜʀᴀ ᴍᴀɢɪǫᴜᴇ ✨ ]━━━╮
┃ 🧙‍♂️ Nom : ${name}
┃ ${aura} Aura : Activée
┃ 🧬 Pouvoir : ${power}
╰━━━━━━━━━━━━━━━━━━━━━━╯
`;

    await m.reply(message);
  }
};
