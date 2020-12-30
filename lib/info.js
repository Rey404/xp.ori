exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XPTN}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${XPTN}*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: *DIL-BOT*
║├≽️🛡️ *DESIGNER*: *DIL-BOT*
╠════════════════════
╠════════════════════
║  *${XPTN}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║┠❥︎ *Instagram <Follow>*
║│ _${instagram}_
║┠❥︎ *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────────────
╠════════════════════
║ *MADE BY DIL-BOT*
╚════════════════════`
}
