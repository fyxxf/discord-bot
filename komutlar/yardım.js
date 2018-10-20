const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(3447003)
  .addField("- Eğlence ", `f!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \nf!starwars = StarWars'ın Kısa Animasyon Filmini Gösterir. \nf!banned = Dene ve Gör! \nf!kahkaha = Kahkaha Atarsınız \nf!herkesebendençay = Herkese Çay Alırsınız. \nf!koş = Koşarsınız.\nf!çayiç = Çay İçersiniz. \nf!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nf!çayaşekerat = Çaya Şeker Atarsınız. \nf!yumruk-at = Yumruk Atarsınız. \nf!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("- Kullanıcı", `f!report = İstediğiniz Kullanıcıyı Reportlarsınız. \nf!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \nf!yaz = Bota İsediğinizi Yazdırırsınız. \nf!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nf!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \n!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n!avatarım = Avatarınınızı Gösterir. `)
  .addField("- Yetkili", `f!ban = İstediğiniz Kişiyi Sunucudan kalıcı olarak yasaklar. \nf!kick  = İstediğiniz kişi sunucudan atar. \nf!unban = İstediğiniz Kişinin Yasağını Açar. \nf!sustur = İstediğiniz Kişiyi Susturur. \nf!temizle = Belirttiğiniz sayıda mesaj siler. \nf!oylama = Oylama Açar. \nf!duyuru -> Duyuru yapar.`)
  .addField("- Temel ", "f!yardım = BOT Komutlarını Atar. \nf!ping = BOT Gecikme Süresini Söyler. \nf!davet = BOT Davet Linkini Atar. \nf!istatistik = BOT İstatistiklerini Gösterir.")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
