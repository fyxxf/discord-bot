const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("> Silinecek mesaj miktarını yazın ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} adet mesajı sildim. **:heavy_check_mark:**`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};
