import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `â *ð® Script SilenceBOT*\nââ¢ *Script :*\nââ³ Private ya hihihiã¾(ã^â^)ï¾\nââ¢ *Node_Modules:*\nââ³ https://semawur.com/mwuPPdYT\nââ³ Ato tekan *npm  i/yarn install*\nââ¢ *Base :* \nââ³ github.com/bochilgaming/games-wabot-md/\nââââââââââââââââââââââââ\n\nð *N o t e :* \nâ¢ Script ada di Github:v\nâ¢ Jangan Lupa kasih star, follow & kasih credit\nâ¢ *Dilarang menjual* Script Ini!\nâ¢ Jika menemukan bug di script, harap lapor owner\nâ¢ Github SilenceBOT: https://github.com/CyexSynMD Jangan, lupa follow github\nâ¢ Bot ini free untuk digunakan di grup ini, kalo mau memasukan BOT ke grup lain minta izin owner dulu ya:)`
let kled = `https://telegra.ph/file/ff053a2dff6c14bcb0578.jpg`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'Script.pdf',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':1000,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':sig,
'mediaType':2,
'previewType':'pdf',
'title':'ð¦ðºð¶ð¹ð²ððð¼ðð~',
'body':titlebot,
'thumbnail':await(await fetch(kled)).buffer(),
'sourceUrl':'https://www.instagram.com/dvekgw'}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat, buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler