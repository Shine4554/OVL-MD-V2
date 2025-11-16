module.exports={cmd:"aura",info:"Affiche une aura magique stylisée",category:"Fun",run:async({sock,m})=>{
  const n=m.pushName||"Inconnu";
  const c=["🔵","🟣","🟢","🔴","🟡","⚪","🟠"];
  const p=["Vision astrale","Bouclier mental","Charisme mystique","Force élémentaire","Vitesse spectrale","Chance divine","Sérénité absolue"];
  const a=c[Math.floor(Math.random()*c.length)];
  const r=p[Math.floor(Math.random()*p.length)];
  const out=`╭━━━[ ✨ Aura magique ✨ ]━━━╮
┃ 🧙 Nom : ${n}
┃ ${a} Aura : Activée
┃ 🧬 Pouvoir : ${r}
╰━━━━━━━━━━━━━━━━━━━━━━╯`;
  await sock.sendMessage(m.chat,{text:out},{quoted:m});
}}
