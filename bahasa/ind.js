exports.wait = () => {
	return`*「 wait bro」 ITS IN PROCESS*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLED 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLED 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*YOUR LEVEL IS ZERO, LMAO🤣*`
}

exports.lvlnoon = () => {
	return`*GRUP LEVEL IS NOT ACTIVATED MERI DOST 😁*`
}

exports.noregis = () => {
	return`*「 💜REGISTER URSELF💜 」*\n\n*type ${prefix}register name|age for registration* \n*for example ${prefix}register ${pushname}|15*`
}

exports.rediregis = () => {
	return`*「 😑YOU ARE ALREADY REGISTERED NOOB😒 」*\n\n*😽 aap pahele se registered hai meri dost 😽*`
}

exports.stikga = () => {
	return`*fail, pls try again later 🥺*`
}

exports.linkga = () => {
	return`*your link is invalid💔*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「GRUP ADMIN ONLY」*`
}

exports.badmin = () => {
	return`*「BOT MUST BE ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW IS NOT ACTIVATED*`
}

exports.bug = () => {
	return`*the problem has been reported to the owner of the bot, False or messy reports will not be responded to.*`
}

exports.wrongf = () => {
	return`*Incorrect format / blank text!*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRATION 」*\n\nTo find out if you have registered, please check the message I sent \n\nNOTE:\n*If you haven't got the message. means you haven't saved your Bot number*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 USER DATA (xia BOT) 」*\n\nyou have been registered in bot database \n\n┏━⊱NAME\n┗⊱${namaUser}\n┏━⊱YOUR PM\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱AGE\n┗⊱${umurUser}\n┏━⊱REGISTRATION TIME\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : bot ko acchi tara se use karna, galat command bar bar mat likhna, nahi to bot database crash ho skta hai:V`
}

exports.cmdnf = (prefix, command) => {
	return`sorry my friend, command *${prefix + command}* is not available.\ntype *${prefix}menu to display all the available features or commands.*`
}

exports.owneresce = (pushname) => {
	return`*sorry but ${pushname} not the owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*sorry ${pushname} your level is not sufficient*\n\n*┏⊱your level : ${getLevelingLevel(sender)}*\n*┣⊱type of command : ${command}*\n*┗⊱level requirements : ${aha}*\n\n_NOTE : CHAT/ALWAYS ON TO GET XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*sorry ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type of command : ${command}*\n*┗⊱level requirements : ${ahb}*\n\n_NOTE : CHAT/ALWAYS ON TO GET XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*sorry ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type of command : ${command}*\n*┗⊱level requirements : ${ahc}*\n\n_NOTE : CHAT/ALWAYS ON TO GET XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*sorry ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type of command : ${command}*\n*┗⊱level requirements : ${ahd}*\n\n_NOTE : CHAT/ALWAYS ON TO GET XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*sorry ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type of command : ${command}*\n*┗⊱level requirements : ${ahe}*\n\n_NOTE : CHAT/ALWAYS ON TO GET XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*sorry ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type of command : ${command}*\n*┗⊱level requirements : ${ahf}*\n\n_NOTE : CHAT/ALWAYS ON TO GET XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「🥳 LEVEL UP🥳」*
 📝➤ NAME : ${pushname}
 🔍➤ NUMBER : ${sender.split("@")[0]}
 📥➤ XP : ${getLevelingXp(sender)}
 📤➤ LIMIT :  +3
 📈➤ RANK :  ${role}
 📊➤ LEVEL : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*sorry ${pushname} your day limit is up*\n*contact us* : wa.me/916909137213\n\n*Note : we will give you a random from 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
your remaining limit : ${limitCounts}

NOTE : To get to the limit. You can level up through groups or buylimit.
`}

exports.satukos = () => {
	return`*add parameter 1=enable or 0=disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Number* : ${sender.split("@")[0]}\n  └─ ❏ *Money* : ${uangkau}
`}
