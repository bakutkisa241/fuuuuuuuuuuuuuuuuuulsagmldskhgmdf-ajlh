const Discord = require("discord.js");
const client = new Discord.Client();
const dateFormat = require('dateformat');
const convert = require("hh-mm-ss")
const fs = require('fs');
const adminprefix = "+";
const devs = ['402043862480322562', '443696811421466624'];
const moment = require('moment');
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const simpleytapi = require('simple-youtube-api')
var Canvas = require('canvas')
var jimp = require('jimp')
const pretty = require('pretty-ms');
const yt_api_key = "AIzaSyDoH9YxF0yi6ljyi2txYZHB10vXNUEP_2U"
const prefix = "+";
var guilds = {};

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+moha')){
if (message.author.id !== '234454368072630283') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




client.on('message', message => {
  
    if(message.content.split(' ')[0] == '+sug'){
        if (message.author.bot) return;
      
                            let args = message.content.split(' ').slice(1).join(' ');
                                 if (!args) return message.reply("You Have To Write A Msg !");
    
      let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('**__:mailbox_with_mail: Suggestion Sent !__**')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .addField("**-Sent By :**", message.author.username)
                                                        .addField("**-Sender ID :**", message.author.id)
                                                    .addField("**-Suggest :**", args)
                                                    .setColor("FF0000")
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                   
                                                    
     client.channels.get("468102376495251466").send(embed)
      let embe = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('**__:mailbox_with_mail: Suggestion Sent Successfully !__**')
                                                    .setThumbnail(message.author.avatarURL)
                                                                                                    .setColor("FF0000")
    
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                    message.channel.sendEmbed(embe);
               
                                      
    }
    });
    

client.on('message' , message => {

    if (message.author.bot) return;
      if(message.content.startsWith( "+invite")) {
   
  const embed = new Discord.RichEmbed()
    .setFooter(`©  Dragon™ `)
       .setColor(0xd3d0c4)
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle(':arrow_right: Click Here Invite Link اضغط هنا')
  .setURL('https://discordapp.com/oauth2/authorize?client_id=459725014237970492&scope=bot&permissions=2146958583')
  
  message.channel.sendEmbed(embed);
  
  }
  });

  client.on("message", message => {
    if (message.content === "+help") {
           message.react("✅")
              message.react("📬")
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setDescription(`
   
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
══════════ஜ۩۞۩ஜ════════════ 

       🌎「اوامر عامة」💎

       **+help-public
    
══════════ஜ۩۞۩ஜ════════════
      👑「اوامر ادارية」👑

       **+help-admin**

   ══════════ஜ۩۞۩ஜ════════════
   
         🎮「العاب」🎮

        **+help-games**

   ══════════ஜ۩۞۩ஜ════════════

   +sug 「لأرسال اقتراح لصاحب البوت」
 
   +invite 「لدعوة البوت لسيرفرك」
   
    `)
       
       
      message.author.sendEmbed(embed)
       
      }
      }); 

//╭━━━╮╱╱╭╮╱╭╮
//┃╭━╮┃╱╱┃┃╱┃┃
//┃╰━╯┣╮╭┫╰━┫┃╭┳━━╮
//┃╭━━┫┃┃┃╭╮┃┃┣┫╭━╯
//┃┃╱╱┃╰╯┃╰╯┃╰┫┃╰━╮
//╰╯╱╱╰━━┻━━┻━┻┻━━╯

 

client.on('message', message => {

    if (message.content.startsWith ("+id")) {
 
 if(!message.channel.guild) return;
 
 let args = message.content.split(' ').slice(1).join(' ');
 
         let defineduser = '';
         if (!args[1]) { // If they didn't define anyone, set it to their own.
             defineduser = message.author;
         } else { // Run this if they did define someone...
             let firstMentioned = message.mentions.users.first();
             defineduser = firstMentioned;
         }
 
  const w = ['./img/id6.png','./img/id2.png','./img/id3.png','./img/id41.png','./img/id5.png'];
 var Canvas = require('canvas')
 var jimp = require('jimp')
 
          const millis = new Date().getTime() - defineduser.createdAt.getTime();
 const now = new Date();
 dateFormat(now, 'dddd, mmmm dS, yyyy');
 const stats2 = ['online', 'Low', 'Medium', 'Insane'];
 const days = millis / 1000 / 60 / 60 / 24;
           dateFormat(now, 'dddd, mmmm dS, yyyy');
               let time = `${dateFormat(defineduser.createdAt)}`
 var heg;
  if(men) {
      heg = men
  } else {
      heg = message.author
  }
 var mentionned = message.mentions.members.first();
   var h;
  if(mentionned) {
      h = mentionned
  } else {
      h = message.member
  }
 moment.locale('ar-TN');
         let Image = Canvas.Image,
             canvas = new Canvas(300, 300),
             ctx = canvas.getContext('2d');
         ctx.patternQuality = 'bilinear';
         ctx.filter = 'bilinear';
         ctx.antialias = 'subpixel';
 
         fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
             if (err) return console.log(err);
             let BG = Canvas.Image;
             let ground = new Image;
             ground.src = Background;
             ctx.drawImage(ground, 0, 0, 300, 300);
 
 })
    var mentionned = message.mentions.users.first();
 
     var client;
       if(mentionned){
           var client = mentionned;
       } else {
           var client = message.author;
 
       }
 
  var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
                 let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                 jimp.read(url, (err, ava) => {
                     if (err) return console.log(err);
                     ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                         if (err) return console.log(err);
 
                         let Avatar = Canvas.Image;
                         let ava = new Avatar;
                         ava.src = buf;
                         ctx.drawImage(ava, 112 , 40, 75, 75);
 
 
 
 
                         var status;
     if (defineduser.presence.status === 'online') {
         status = 'ONLINE';
 ctx.fillStyle = `#2ce032`;
 ctx.beginPath();
 ctx.arc(179, 107, 10, 0, Math.PI*2, true);
 ctx.closePath();
 ctx.fill();
 
     } else if (defineduser.presence.status === 'dnd') {
         status = 'DND';
         ctx.fillStyle = `#ff0000`;
 ctx.beginPath();
 ctx.arc(179, 107, 8, 0, Math.PI*2, true);
 ctx.closePath();
 ctx.fill();
     } else if (defineduser.presence.status === 'idle') {
         status = 'IDLE';
         ctx.fillStyle = `#f4d32e`;
 ctx.beginPath();
 ctx.arc(179, 107, 10, 0, Math.PI*2, true);
 ctx.closePath();
 ctx.fill();
     } else if (defineduser.presence.status === 'offline') {
         status = 'INVISIABLE';
         ctx.fillStyle = `#898988`;
 ctx.beginPath();
 ctx.arc(179, 107, 10, 0, Math.PI*2, true);
 ctx.closePath();
 ctx.fill();
     }
 
 
                                               var time2;
       if(mentionned){
           var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
       } else {
           var time2 = `${dateFormat(message.member.joinedAt)}`;
 
       }
 
 
                         ctx.font = 'Bold 15px Arial ';
                         ctx.fontSize = '15px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(status, 70 , 108 );
 
                          ctx.font = 'Bold 13px Arial';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );
 
 
                         ctx.font = 'Bold 20px Arial ';
                         ctx.fontSize = '15px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${defineduser.username}`, 150.50 , 140);
 
 
                         ctx.font = 'Bold 15px Arial';
                         ctx.fontSize = '15px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);
 
                         var time2;
       if(mentionned){
           var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
       } else {
           var time2 = `${dateFormat(message.member.joinedAt)}`;
 
       }
 
                                                 //wl
                         ctx.font = 'Bold 13px Arial ';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
 
 
 
 
                                                 //wl
                         ctx.font = 'Bold 13px Arial ';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
 
 message.channel.sendFile(canvas.toBuffer())
 
             // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
             // seconds after this.
         })
     })
 
 
 
 
 }
 
 })



client.on('message',message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/GnR2unD.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

   
client.on('message', message => {
    id = client.user.id;
    guild = message.guild;
    emojiHasPermission = permission => {
      console.log(permission);
      if (guild.member(id).permissions.has(permission, false)) {
        return ':white_check_mark:';
      } else {
        return ':x:';
      }
    };
    if (message.content === '+per') {
    message.channel.send({embed: {
      title: ':tools: Permissions',
      color: 0x06DF00,
      fields: [
        {
   
          name: 'Administrator :',
          value: emojiHasPermission('ADMINISTRATOR'),
          inline: true
        },
        {
          name: 'Create Instant Invite :',
          value: emojiHasPermission('CREATE_INSTANT_INVITE'),
          inline: true
        },
        {
          name: 'Kick Members :',
          value: emojiHasPermission('KICK_MEMBERS'),
          inline: true
        },
        {
          name: 'Ban Members :',
          value: emojiHasPermission('BAN_MEMBERS'),
          inline: true
        },
        {
          name: 'Manage Channels :',
          value: emojiHasPermission('MANAGE_CHANNELS'),
          inline: true
        },
        {
          name: 'Manage Guild :',
          value: emojiHasPermission('MANAGE_GUILD'),
          inline: true
        },
        {
          name: 'Add Reactions :',
          value: emojiHasPermission('ADD_REACTIONS'),
          inline: true
        },
        {
          name: 'View Audit Log :',
          value: emojiHasPermission('VIEW_AUDIT_LOG'),
          inline: true
        },
        {
   
          name: 'Manage Messages :',
          value: emojiHasPermission('MANAGE_MESSAGES'),
          inline: true
        },
        {
          name: 'Embed Links :',
          value: emojiHasPermission('EMBED_LINKS'),
          inline: true
        },
        {
          name: 'Attach Files :',
          value: emojiHasPermission('ATTACH_FILES'),
          inline: true
        },
        {
          name: 'Read Message History :',
          value: emojiHasPermission('READ_MESSAGE_HISTORY'),
          inline: true
        },
        {
          name: 'Mention Everyone :',
          value: emojiHasPermission('MENTION_EVERYONE'),
          inline: true
        },
        {
          name: 'Use External Emojis :',
          value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
          inline: true
        },
        {
          name: 'Connect :',
          value: emojiHasPermission('CONNECT'),
          inline: true
        },
        {
          name: 'Speak :',
          value: emojiHasPermission('SPEAK'),
          inline: true
        },
        {
   
          name: 'Mute Members :',
          value: emojiHasPermission('MUTE_MEMBERS'),
          inline: true
        },
        {
          name: 'Deafen Members :',
          value: emojiHasPermission('DEAFEN_MEMBERS'),
          inline: true
        },
        {
          name: 'Move Members :',
          value: emojiHasPermission('MOVE_MEMBERS'),
          inline: true
        },
        {
          name: 'Use VAD :',
          value: emojiHasPermission('USE_VAD'),
          inline: true
        },
        {
          name: 'Change Nickname :',
          value: emojiHasPermission('CHANGE_NICKNAME'),
          inline: true
        },
        {
          name: 'Manage Nicknames :',
          value: emojiHasPermission('MANAGE_NICKNAMES'),
          inline: true
        },
        {
          name: 'Manage Roles :',
          value: emojiHasPermission('MANAGE_ROLES'),
          inline: true
        },
        {
          name: 'Manage Webhooks :',
          value: emojiHasPermission('MANAGE_WEBHOOKS'),
          inline: true
        },
        {
          name: 'Manage Emojis :',
          value: emojiHasPermission('MANAGE_EMOJIS'),
          inline: true
        }
      ]
    }
    });
    }
  });



   
  client.on("message", async message => {
    if(!message.channel.guild) return;
    var prefix = "+";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});


client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "+";
if(message.content.startsWith(prefix + 'channel')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("Channel Info")
      .setColor("#9932CC")
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("Created At", `${channel.createdAt}`)
      .addField("Channel Type", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });
 

    client.on("message", async message => {
        if(!message.channel.guild) return;
    var prefix = "+";
    if(message.content.startsWith(prefix + 'member')) {
        let guild = await message.guild.fetchMembers()
        let bots = guild.members.filter(m => m.user.bot).size
        let members = guild.memberCount
        let humans = members - bots
        let dndusers = guild.members.filter(member => member.user.presence.status === "dnd")
        let awayusers = guild.members.filter(member => member.user.presence.status === "idle")
        let onlineusers = guild.members.filter(member => member.user.presence.status === "online")
        let offlineusers = guild.members.filter(member => member.user.presence.status === "offline")
        var embed = new Discord.RichEmbed()
              .setColor("#000000")
              .setTitle("Membercount")
              .setDescription("Membercount in " + guild.name)
              .addField("Members", `${members}`, true)
              .addField("Humans", `${humans}`, true)
              .addField("Bots", `${bots}`, true)
              .addField("Status Users", `Online Users: ${onlineusers.size}\nDND Users: ${dndusers.size}\nAway Users: ${awayusers.size}\nOffline Users: ${offlineusers.size}\nTotal Members: ${message.guild.memberCount}`, true)
              .setThumbnail(message.author.avatarURL)
              message.channel.send({ embed: embed });
     
      }
     
        });


        client.on('message', message => {
            var prefix = "+"
      if(message.content.startsWith (prefix  + 'mb')) {
          if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**:battery: حالة اعضاء السيرفر**
         
    **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
    **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
    **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
    **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
     
            message.channel.send()
     
    message.channel.sendEmbed(embed)
    }
    });
    
    client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "+";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

    client.on('message', message => {
        var prefix = "+"
        if(message.content === prefix + "emojis") {
          const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
          message.channel.send(emojiList);
        }
      });


      client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith('+report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
      }
      });

      client.on('message', message => {
        if (message.content.startsWith("رابط")) {
            message.channel.createInvite({
            thing: true,
            maxUses: 1,
            maxAge: 3600,
        }).then(invite =>
          message.author.sendMessage(invite.url)
        )
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
              .setDescription(" تم أرسال الرابط برسالة خاصة ")
               .setAuthor(client.user.username, client.user.avatarURL)
                     .setAuthor(client.user.username, client.user.avatarURL)
                    .setFooter('طلب بواسطة: ' + message.author.tag)
     
          message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
                  const Embed11 = new Discord.RichEmbed()
            .setColor("RANDOM")
             
        .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
          message.author.sendEmbed(Embed11)
        }
    }); 

    client.on('message', message => {
        if (message.content.startsWith("+avatar")) {
            var mentionned = message.mentions.users.first();
        var x5bzm;
          if(mentionned){
              var x5bzm = mentionned;
          } else {
              var x5bzm = message.author;
               
          }
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${x5bzm.avatarURL}`)
          message.channel.sendEmbed(embed);
        }
    });

    client.on('message', message => {
        if(!message.channel.guild) return;
    if (message.content.startsWith('+ping')) {
    if(!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`
    var api = `${Math.round(client.ping)}`
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail('https://media.discordapp.net/attachments/417477494950854656/438706305125974017/maxresdefaul1t.jpg?width=339&height=353')
    .setColor('RANDOM')
    .addField('**Time Taken:**',msg + " ms")
    .addField('**WebSocket:**',api + " ms")
    message.channel.send({embed:embed});
    }
    });


    var prefix = "+";
 
    client.on('message', message => {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command === "say") {
              message.delete()
        message.channel.sendMessage(args.join(" ")).catch(console.error);
      }
       
      
     
    if (command == "embed") {
        let say = new Discord.RichEmbed()
        .setDescription(args.join("  "))
        .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
      }
     
     
    });
     
    client.on("message", message => {
        const prefix = "+"
                   
              if(!message.channel.guild) return;
       if(message.author.bot) return;
          if(message.content === prefix + "image"){ 
              const embed = new Discord.RichEmbed()
       
          .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
      .setAuthor(message.author.username, message.guild.iconrURL)
        .setColor(0x164fe3)
        .setImage(message.guild.iconURL)
        .setURL(message.guild.iconrURL)
                        .setTimestamp()
     
       message.channel.send({embed});
          }
      });
      
client.on('message', message =>{
    if(message.content == "+roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});


client.on('message', message => {
    if (message.content === "+rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
         
.addField(':arrow_down:اسماء الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
 

var prefix = "+";
const HeRo = new Discord.Client();
client.on('message', message => {
    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
            .setFooter(`+help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
             message.channel.sendEmbed(Date15);
    }
});


client.on('message', message => {
    var prefix = "+";
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "user")) {
    var embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(message.author.avatarURL)
    .addField("اسمك في السيرفر ", `${message.author.tag} (ID: ${message.author.id})`, true)
    .addField("حالتك :", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
    .addField("يلعب؟ : ", `${message.author.presence.game === null ? "None" :  message.author.presence.game.name}`, true)
    .addField("اسمك في دسكورد ", `${message.member.displayName}`, true)
    .addField("الرتب الذي تمتلكها ", `${message.member.roles.map(r => r.name).join(", ")}`)
    .addField("أعلى رتبه تمتلكها: ", message.member.highestRole.name)
    .addField("دخولك للدسكورد :", `${message.member.joinedAt.toDateString()}`)
    .addField("دخولك للسيرفر : ", `${message.author.createdAt.toDateString()}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
  if (message.mentions.users.size < 1) return message.channel.send({ embed: embed });
    
  let member = message.mentions.members.first();
  var embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(member.user.avatarURL)
    .addField("اسمه في دسكورد:", `${member.user.tag} (ID: ${member.id})`, true)
    .addField("حالته :", member.presence !== null && member.presence.status !== null ? member.presence.status : "Offline")
    .addField("يلعب :", `${member.user.presence.game === null ? "Nothing" :  member.user.presence.game.name}`, true)
    .addField("اسمه في السيرفر:", `${member.nickname === null ? "None" : member.nickname}`, true)
    .addField("الرتب :", `${member.roles.map(r => r.name).join(", ")}`)
    .addField("اعلى رتبه يمتلكها : :", member.highestRole.name)
    .addField("دخوله لدسكورد :", `${member.joinedAt.toDateString()}`)
    .addField("دخوله للسيرفر", `${member.user.createdAt.toDateString()}`)
    .setTimestamp()
    .setFooter(member.user.username, member.user.avatarURL);
    message.channel.send({ embed: embed });
            }
  });


  client.on("message", message => {
    var prefix = "+";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "report-owner")) {
  let reportMember = message.guild.member(message.mentions.members.first());
  let reportReason = args.slice(1).join(" ");
   
  if (message.mentions.users.size === 0) {
    message.channel.send("**منشن الشخص المراد الابلاغ عليه** :x:")
    return;
  } else {
    if(!reportMember) {
        message.channel.send("**هذه الشخص غير موجود في السيرفر** :x:")
        return; }}
    
  if (reportMember.id == message.author.id) {
    message.channel.send("**لا يمكنك الابلاغ عن نفسك** :facepalm:")
    return; }
   
  if (args[1] === undefined) {
    message.channel.send("**ضع سبب الابلاغ** :x:")
    return; }
   
  message.guild.owner.send({embed:{
    fields: [{
        name: "ابلاغ جديد من سيرفر : " + message.guild.name + "!",
        value: "تفاصيل:\n\n**صاحب الأبلاغ:** " + message.author.username + "\n**قام بالأبلاغ عن ::** " + reportMember.user.username + "\n**السبب:** " + reportReason + "\n**الروم المرسل منه الأبلاغ:** " + message.channel
      }
    ],
    thumbnail: {
        url: reportMember.user.displayAvatarURL
    },
    timestamp: new Date(),
    color: 0xFF0000
  }}).catch(err => {
    message.author.send("A error occured sending your report to the server owner! Error: " + err)
    return;
  })
  message.channel.send("تم ارسال الأبلاغ بنجاح\n\nمعلومات عن الأبلاغ:\n  **قمت بالابلاغ عن :** " + reportMember.user.username + "\n  **السبب:** " + reportReason + "\n  **الروم الذي قمت بأرسال الابلاغ منه:** " + message.channel)
   
  }
  });


  var prefix = "+";
  client.on('message', message => {
           if (message.content === prefix + "dt") {
           if (!message.channel.guild) return message.reply('** This command only for servers **');  
           var currentTime = new Date(),
              hours = currentTime.getHours() + 4 ,
              hours2 = currentTime.getHours() + 3 ,
              hours3 = currentTime.getHours() + 2 ,
              hours4 = currentTime.getHours() + 3 ,
              minutes = currentTime.getMinutes(),
              seconds = currentTime.getSeconds(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
               var h = hours
    if(hours > 12) {
                 hours -= 12;
              } else if(hours == 0) {
                  hours = "12";
              }  
               if(hours2 > 12) {
                 hours2 -= 12;
              } else if(hours2 == 0) {
                  hours2 = "12";
               
              }  
  if(hours3 > 12) {
                 hours3 -= 12;
              } else if(hours3 == 0) {
                  hours3 = "12";
              } 
              if (minutes < 10) {
                  minutes = '0' + minutes;
              }
   
   
              var suffix = 'صباحاَ';
              if (hours >= 12) {
                  suffix = 'مساء';
                  hours = hours - 12;
              }
              if (hours == 0) {
                  hours = 12;
              }
    
   
                  var Date15= new Discord.RichEmbed()
                  .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                  .setTitle( "「التاريخ  والوقت」")
                  .setColor('RANDOM')
                  .setFooter(message.author.username, message.author.avatarURL)
                  .addField('الامارات',
                  "「"+ hours + ":" + minutes +":"+ seconds + "」")
                   .addField('مكه المكرمه',
                  "「"+ hours2 + ":" + minutes +":"+ seconds  + "」") 
                  .addField('مصر',
                  "「"+ hours3 + ":" + minutes +":"+ seconds  + "」") 
                   
                  .addField('Date',
                  "「"+ Day + "-" + Month + "-" + Year +  "」")
   
                   message.channel.sendEmbed(Date15);
          }
      });
   

       
      
      client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!devs.includes(message.author.id)) return;
          
      if (message.content.startsWith(adminprefix + 'ply')) {
        client.user.setGame(argresult);
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      } else 
        if (message.content === (adminprefix + "Percie")) {
        message.guild.leave();        
      } else  
      if (message.content.startsWith(adminprefix + 'wt')) {
      client.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      } else 
      if (message.content.startsWith(adminprefix + 'ls')) {
      client.user.setActivity(argresult , {type:'LISTENING'});
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      } else     
        if (message.content.startsWith(adminprefix + 'setname')) {
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : Done :>`)
      return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
      } else
        if (message.content.startsWith(adminprefix + 'setavatar')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
            } else     
      if (message.content.startsWith(adminprefix + 'st')) {
        client.user.setGame(argresult, "https://www.twitch.tv/idk");
          message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
      }
        if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
            console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            console.log(`⚠️ Bot restarting... ⚠️`);
            console.log("===============================================\n\n");
            client.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`Bot Successfully Restarted`);
        }
      
      });
client.on("message", message => {
if (message.content === "+help-public") {
message.react("✅")
message.react("😵")
                         const embed = new Discord.RichEmbed() 
                             .setColor("#ffff00")
                             .setDescription(`

╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
                             

 ══════════ஜ۩۞۩ஜ════════════
🌎「اوامر عامة」💎
                       
🌎+server 「يعرض لك معلومات السيرفر」
 
🌎+user 「أمر الايدي」

🌎+id 「أمر الايدي بشكل مميز」

🌎+per 「لمعرفة خصائص رتبتك」

🌎+mb 「لمعرفة حالة الاعضاء」 

🌎+member 「عدد وحالة اعضاء السيرفر」 
                        
🌎+report 「للابلاغ عن شخص」

ملاحظة:**يجب انشاء روم بأسم report لتلقي الابلاغات**

🌎+report-owner 「لأرسال ابلاغ لصاحب السيرفر」 

🌎+date 「لمعرفه التاريخ」

🌎+dt 「لمعرفة التاريخ والوقت لدولة مصر والسعودية والامارات」
                           
🌎+ping 「لمعرفه سرعه البوت」

🌎+emojis 「يعرض لك ايموجيات حقت السيرفر」

🌎+rooms 「لعرض عدد واسماء الرومات」

🌎+roles 「لعرض اسماءالرتب」

🌎+channel 「يعرض لك معلومات عن الروم」

🌎+embed 「خاصيه غرد لكن بغير طريقه」

🌎+say 「لي يكرر الكلام الذي تقوله」

🌎رابط
「لارسال رابط السيرفر على الخاص」

🌎+invites 「يعرض لك كم جبت اعضاء لهذة السيرفر」

🌎+invite-codes 「يرسل لك على الخاص جميع الروابط التي قمت بأنشائها لهذة السيرفر」

🌎+top 「يعرض لك جميع روابط دعوات التي تم انشائها مع عدد الاشخاص الي دخلو من الرابط」

🎴+avatar 「لي عرض صورتك او صوره اي شخص」

🎴+image 「لي عرض صوره السيرفر」

══════════ஜ۩۞۩ஜ════════════

+sug 「لأرسال اقتراح لصاحب البوت」
 
+invite 「لدعوة البوت لسيرفرك」
                         
                          `)
                           
                           
message.author.send({ embed: embed });
                           
}
}); 
                        
//╭━━━╮╱╭╮
//┃╭━╮┃╱┃┃
//┃┃╱┃┣━╯┣╮╭┳┳━╮
//┃╰━╯┃╭╮┃╰╯┣┫╭╮╮
//┃╭━╮┃╰╯┃┃┃┃┃┃┃┃
//╰╯╱╰┻━━┻┻┻┻┻╯╰╯


client.on('message' , message => {
    var prefix = "+";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
  });
  

  
  
     client.on('message', message => {
        var prefix = "+";

        if (message.author.codes) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
        let args = message.content.split(" ").slice(1);
      
        if (command == "ban") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');
               
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
        let user = message.mentions.users.first();
        
        if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
        if (!message.guild.member(user)
        .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
      
      
        message.guild.member(user).ban(7, user);
      
      message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)
      
      }
      });
        

  client.on('message', message => {
    var prefix = "+";
    if (message.author.omar) return;
    if (!message.content.startsWith(prefix)) return;
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    var args = message.content.split(" ").slice(1);
    if (command == "kick") {
     if(!message.channel.guild) return message.reply('** This command only for servers :x:**');
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    var user = message.mentions.users.first();
    var reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
    if(!reason) return message.reply ("**Write A __Reason__ !**");
    if (!message.guild.member(user).kickable) return message.reply("**Can't Kick A Higher Role Than Me !**");
    const kickembed = new Discord.RichEmbed()
    .setAuthor(`KICKED!`, user.displayAvatarURL)
    .setColor("RANDOM")
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({embed : kickembed})
    user.send(reason).then(()=>{
  message.guild.member(user).kick();
    })
  }
  });
  
  
     client.on("message", async message => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(/(?:https?:\/)?discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
        message.delete();
        let inviteEmbed = new Discord.RichEmbed()
  
        .setDescription("__**Auto Suppression**__")
        .addField("> Envoyé par :", `<@${message.author.id}> avec l'ID ${message.author.id}`)
        .addField("> Suppression dans :", message.channel)
        .addField(`> Raison :`, `Envoie une invitation discord : ${message.content}`)
        .setColor(violet);
  
        let incidentchannel = message.guild.channels.find(`name`, "log");
        if(!incidentchannel) return message.channel.send(":no_entry: Je n'est pas trouvé le channel 'logs' !");
        return incidentchannel.send(inviteEmbed);
    }
  }
  });
  

  
 
  client.on('message', message =>{
    var prefix = "+";
      if(message.author.bot) return;
      if(!message.content == (prefix+'clear'))
  if(!true) return;
      if(message.content.split(' ')[0] == (prefix+'clear')){
      var lmt = message.content.split(' ')[1]
      ,  hang = 0
      ,  max  = 0;
      
      if(!lmt) lmt = 200;
      if(typeof lmt !== 'number') return;
      if(lmt > 100){
          for(;lmt > 100;){
          lmt--;
          hang++;
          }
          }
       message.channel.fetchMessages({limite:lmt}).then(msgs=>{
       msgs.channel.bulkDelete(msgs);
       });
       if(hang > 100){
           hang = 100;
       }
          message.channel.fetchMessages({limite:hang}).then(msgs=>{
          message.channel.bulkDelete(msgs);
       });
       
      max= hang+lmt;
      message.reply(` **Done, i have delete ${max} messages!**.`).catch(()=>{
          message.reply(` **Sorry, i can only bulk delete messages that are under 14 days old**.`)
      });
      }
  }); 
  
  
  client.on('message', async message =>{
    var prefix = "+";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
      if(command == "mute") {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
      if(tomute.hasPermission("MANAGE_MESSAGES"))return;
      let muterole = message.guild.roles.find(`name`, "muted");
      //start of create role
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      //end of create role
      let mutetime = args[1];
      if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
    
      await(tomute.addRole(muterole.id));
      message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    
      setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
      }, ms(mutetime));
    
    
    //end of module
    }
  
  });
  client.on('message', async message =>{
    var prefix = "+";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(msg => msg.delete(6000))
  
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });
  
  client.on('message', message => {
    var prefix = "+";
  
    if(message.content.startsWith(prefix + 'rename')) {
  if(message.member.hasPermission("ADMINISTRATOR")) {
          let args = message.content.split(' ').slice(2);
  var mentionned = message.mentions.users.first();
    
   if(!args){
     return message.channel.send(":x: " + `**| Please enter a new Nick for ${mentionned}**`);
   }
   if (!mentionned)return message.channel.send("**You Have to Mention A member :x:**")
   message.guild.member(mentionned).setNickname(args.join(" ")).then(user => message.channel.send(`:full_moon_with_face: ${mentionned}'s' **New NickName is **` + `__${args.join(" ")}__` + "!")).catch(console.error);
  } else {
   return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission");
   }
  
  
     }
  });
  
  
      client.on('message', message => {
        var prefix = "+";
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("Please mention a user to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Try again.");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("User muted successfully.");
        }
      }
    });
    client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });
   
  
      client.on('message', message => {
          if(!message.channel.guild) return;
          var prefix = "+";
      if(message.content.startsWith(prefix + 'move')) {
          var cmdrole = message.guild.roles.find("name", config.cmdrole)
             if (message.member.hasPermission("MOVE_MEMBERS")) {
  if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**I Don't Have `MOVE_MEMBERS` Permission**").then(msg => msg.delete(6000))
                    if (message.mentions.users.size === 0) {
                           return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
                    }
                    if (message.member.voiceChannel != null) {
                           if (message.mentions.members.first().voiceChannel != null) {
                                  var authorchannel = message.member.voiceChannelID;
                                  var usermentioned = message.mentions.members.first().id;
                                 var embed = new Discord.RichEmbed()
                                    .setTitle("Succes!")
                                    .setColor("#000000")
                                    .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
                                  var embed = new Discord.RichEmbed()
                                    .setTitle(`You are Moved in ${message.guild.name}`)
                                    .setColor("#000000")
                                    .setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
                                                                message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                                  message.guild.members.get(usermentioned).send(embed)
                           } else {
                                  message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
                           }
                    } else {
                           message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
                    }
             } else {
                    message.react("❌")
             }
          }
          });
  
          client.on('message', message => {
            var prefix = "+";
            if(message.content.startsWith(prefix + 'move all')) {
             if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
               if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
            if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
             var author = message.member.voiceChannelID;
             var m = message.guild.members.filter(m=>m.voiceChannel)
             message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
             m.setVoiceChannel(author)
             })
             message.channel.send(`**تم سحب جميع الأعضاء إليك**`)
            
            
             }
               });
  
  client.on("message", message => {
      var prefix = "+";
      const command = message.content.split(" ")[0];
   
      if(command == prefix+"voicekick"){
   
          if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
              return message.reply('you do not have permission to perform this action!');
          }
   
          var member = message.guild.members.get(message.mentions.users.array()[0].id);
          if(!message.mentions.users){
              message.reply("please mention the member")
              return;
          }
   
      if(!member.voiceChannel){
      message.reply("i can't include voice channel for member!")
      return;
      }
                message.guild.createChannel('voicekick', 'voice').then(c => {
                  member.setVoiceChannel(c).then(() => {
                      c.delete(305).catch(console.log)
   message.reply(' has been successfullly kicked from voice.');
       
        });
       });
      }
  });
  
  client.on("message", message => {
      var prefix = "+";
      var args = message.content.split(' ').slice(1); 
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if( msg.toLowerCase().startsWith( prefix + 'removerole' ) ){
   if (!message.member.hasPermission("ADMINISTRATOR"))  return message.reply("**للأسف ليس لديك صلاحية `ADMINISTRATOR`**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**I Don't Have `ADMINISTRATOR` Permission**").then(msg => msg.delete(6000));
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().removeRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.removeRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
          }   
      } else {
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
          } 
      } 
  });
  
      client.on('message', message => {
        var prefix = "+";
        if(message.content.startsWith(prefix + 'deafen')) {
      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
        return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
      }
      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
        return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x:').catch(console.error);
      }
     
      const deafenMember = (member) => {
        if (!member || !member.voiceChannel) return;
        if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);
        member.setDeaf(true).catch(console.error);
        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
      };
     
      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
        }
        
    });  
     
    client.on('message', async message =>{
      var prefix = "+";
      if(message.content.startsWith(prefix + 'undeafen')) {
     
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x: ').catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
    }
     
    const undeafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };
     
    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
    }
    });
  
  
  
  
   
  var prefix= "+";
  client.on("message", message => {
      if(message.content.startsWith(prefix + 'ct')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'text') // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
        message.channel.send(`:white_check_mark:  تم عمل الروم الكتابي : \`${nam}\``);
      }
      });
   
  var prefix= "+";
  client.on("message", message => {
      if(message.content.startsWith(prefix + 'cv2')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;   
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'voice')
        message.channel.send(`:white_check_mark:  تم عمل الروم الصوتي : \`${nam}\``);
      }
      });
  
  var prefix= "+";
  client.on("message", message => {
      if(message.content.startsWith(prefix + 'cc')) {
       let args = message.content.split(" ").slice(1);
         var nam = args.join(' ');
       
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
        if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
        message.guild.createChannel(nam, 'category') //  
        message.channel.send(`:white_check_mark:  تم عمل مجموعة : \`${nam}\``);
      }
      });
  
      var prefix= "+";
      client.on("message", message => {
          if(message.content.startsWith(prefix + 'v')) {
           let args = message.content.split(" ").slice(1);
             var nam = args.join(' ');
           
            if(!message.member.hasPermission('ADMINISTRATOR')) return;
            if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
            message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
            message.channel.send(`:ballot_box_with_check: تم عمل الروم الصوتي : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
          }
          });
  
  client.on('message', message => {
    var prefix = "+";
  if(message.content === prefix + "muteall") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: false
  
  }).then(() => {
      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
  
  });
  }
     
  
  
  });
    client.on('message', message => {
      var prefix = "+";
  if(message.content === prefix + "unmuteall") {
            if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: true
  
  }).then(() => {
      message.reply("**__تم فتح الشات__:white_check_mark:**")
  });
    }
     
  
  
  });
  
            client.on("message", (message) => {
              if (message.content.startsWith('+delet')) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
                  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("ليس لديك خاصية `MANAGE_CHANNELS` Premissions ");
           
                  let args = message.content.split(' ').slice(1);
                  let channel = message.client.channels.find('name', args.join(' '));
                  if (!channel) return message.reply('**مافي روم بهل اسم -_-**').catch(console.error);
                  channel.delete()
              }
          });
  
  
   
  var prefix = '+';
  
  client.on('message', message => {
      if(message.content === prefix + 'createcolors') {
                           if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
           if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
        message.guild.createRole({
                    name: "1",
                      color: "#FFB6C1",
                      permissions: []
       })
             message.guild.createRole({
                    name: "2",
                      color: "#FFC0CB",
                      permissions: []
       })
                  message.guild.createRole({
                    name: "3",
                      color: "#FF69B4",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "4",
                      color: "#FF1493",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "5",
                      color: "#DB7093",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "6",
                      color: "#C71585",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "7",
                      color: "#E6E6FA",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#D8BFD8",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "8",
                      color: "#DDA0DD",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "9",
                      color: "#DA70D6",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "10",
                      color: "#EE82EE",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "11",
                      color: "#FF00FF",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "12",
                      color: "#BA55D3",
                      permissions: []
       })
                       message.guild.createRole({
                    name: "13",
                      color: "#9932CC",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "14",
                      color: "#9400D3",
                      permissions: []
       })
                            message.guild.createRole({
                    name: "15",
                      color: "#8A2BE2",
                      permissions: []
       })
                                 message.guild.createRole({
                    name: "16",
                      color: "#8B008B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "17",
                      color: "#800080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "18",
                      color: "#9370DB",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "19",
                      color: "#7B68EE",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "20",
                      color: "#6A5ACD",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "21",
                      color: "#483D8B",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "22",
                      color: "#663399",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "23",
                      color: "#4B0082",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "24",
                      color: "#FFA07A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "25",
                      color: "#FA8072",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "26",
                      color: "#E9967A",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "27",
                      color: "#F08080",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "28",
                      color: "#CD5C5C",
                      permissions: []
       })
                                      message.guild.createRole({
                    name: "29",
                      color: "#DC143C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "30",
                      color: "	#FF0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "31",
                      color: "#B22222",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "32",
                      color: "#8B0000",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "33",
                      color: "#FFA500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "34",
                      color: "#FF8C00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "35",
                      color: "#FF7F50",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "36",
                      color: "#FF6347",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "37",
                      color: "#FF4500",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "38",
                      color: "#FFD700",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "39",
                      color: "#FFFFE0",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "40",
                      color: "#FFFACD",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "41",
                      color: "#FAFAD2",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "42",
                      color: "	#FFEFD5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "43",
                      color: "#FFE4B5",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "44",
                      color: "#FFDAB9",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "45",
                      color: "#EEE8AA",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "46",
                      color: "#F0E68C",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "47",
                      color: "#BDB76B",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "48",
                      color: "#ADFF2F",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "49",
                      color: "#7FFF00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "50",
                      color: "#7CFC00",
                      permissions: []
       })
                                           message.guild.createRole({
                    name: "51",
                      color: "#00FF00",
                      permissions: []
       })  
       
                                           message.guild.createRole({
                    name: "52",
                      color: "#32CD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "53",
                      color: "#98FB98",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "54",
                      color: "#90EE90",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "55",
                      color: "#00FA9A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "56",
                      color: "#00FF7F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "57",
                      color: "#3CB371",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "58",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "59",
                      color: "#2E8B57",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "60",
                      color: "#008000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "61",
                      color: "#006400",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "62",
                      color: "#9ACD32",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "63",
                      color: "#6B8E23",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "64",
                      color: "#556B2F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "65",
                      color: "#66CDAA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "66",
                      color: "#8FBC8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "67",
                      color: "#20B2AA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "68",
                      color: "#008B8B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "69",
                      color: "#008080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "70",
                      color: "#00FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "71",
                      color: "#E0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "72",
                      color: "#AFEEEE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "73",
                      color: "#7FFFD4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "74",
                      color: "#40E0D0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "75",
                      color: "#48D1CC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "76",
                      color: "#00CED1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "77",
                      color: "#5F9EA0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "78",
                      color: "#4682B4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "79",
                      color: "#B0C4DE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "80",
                      color: "#ADD8E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "81",
                      color: "#B0E0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "82",
                      color: "#87CEFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "83",
                      color: "#87CEEB",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "84",
                      color: "#6495ED",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "85",
                      color: "#00BFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "86",
                      color: "#1E90FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "87",
                      color: "#4169E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "88",
                      color: "#0000FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "89",
                      color: "#0000CD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "90",
                      color: "#00008B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "91",
                      color: "#000080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "92",
                      color: "#191970",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "93",
                      color: "#FFF8DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "94",
                      color: "#FFEBCD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "95",
                      color: "#FFE4C4",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "96",
                      color: "#FFDEAD",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "97",
                      color: "#F5DEB3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "98",
                      color: "#DEB887",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "99",
                      color: "#D2B48C",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "100",
                      color: "#BC8F8F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "101",
                      color: "#F4A460",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "102",
                      color: "#DAA520",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "103",
                      color: "#B8860B",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "104",
                      color: "#CD853F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "105",
                      color: "#D2691E",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "106",
                      color: "#808000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "107",
                      color: "#8B4513",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "108",
                      color: "#A0522D",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "109",
                      color: "#A52A2A",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "110",
                      color: "#800000",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "111",
                      color: "#FFFFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "112",
                      color: "#FFFAFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "113",
                      color: "#F0FFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "114",
                      color: "#F5FFFA",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "115",
                      color: "#F0FFFF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "116",
                      color: "#F0F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "117",
                      color: "#F8F8FF",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "118",
                      color: "#F5F5F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "119",
                      color: "#FFF5EE",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "120",
                      color: "#F5F5DC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "121",
                      color: "#FDF5E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "122",
                      color: "#FFFAF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "123",
                      color: "#FFFFF0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "124",
                      color: "#FAEBD7",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "125",
                      color: "#FAF0E6",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "126",
                      color: "#FFF0F5",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "127",
                      color: "#FFE4E1",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "128",
                      color: "#DCDCDC",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "129",
                      color: "#D3D3D3",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "130",
                      color: "#C0C0C0",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "131",
                      color: "#A9A9A9",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "132",
                      color: "#696969",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "133",
                      color: "#808080",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "134",
                      color: "#778899",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "135",
                      color: "#708090",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "136",
                      color: "#2F4F4F",
                      permissions: []
       })     
                                           message.guild.createRole({
                    name: "137",
                      color: "#000000",
                      permissions: []
       })     
  
       
            message.channel.sendMessage({embed: new Discord.RichEmbed()
       .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
      }
      });
  
      client.on("message", message => {
        if (message.content === "+help-admin") {
               message.react("✅")
                  message.react("📬")
         const embed = new Discord.RichEmbed() 
             .setColor("#ffff00")
             .setDescription(`
       
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
     
        ══════════ஜ۩۞۩ஜ════════════  
       
          👑「اوامر ادارية」👑
           
👑+bc 「للبرودكاست بأميد」
 
👑+allbc 「للبرودكاست بدون أميد」
 
👑+onlinebc 「لأرسال برودكاست للاونلاين فقط」
 
👑+rolebc 「لأرسال برودكاست لرتبة معينه」

👑+rename 「لتغير أسم شخص ما」
        
👑+muteall 「لقفل الشات」
        
👑+unmuteall 「لفتح الشات」
        
👑+mute 「 لاعطاء ميوت لشخص 」
        
👑+mutevoice 「 لاعطاء ميوت صوتي 」
        
👑+unmutevoice 「لفك ميوت صوتي 」
        
👑+deafen 「لأعطاء ديفن」
        
👑+undeafen 「لفك الديفن」
        
👑+unmute 「 لفك الميوت」
        
👑+createcolors 「لعمل 137 لون مرتب」
           
👑+ban 「لتعطي شخص باند مع السبب」
       
👑+unban 「لفك الباند عند شخص محدد」
          
👑+kick 「لتعطي شخص كيك مع السبب」
           
👑+clear 「لمسح الشات」
           
👑+v  「لانشاء روم صوتي مؤقت」
        
👑+cc  「لانشاء كاتجوري 」
        
👑+cv  「لانشاء روم صوتي دائم 」
       
👑+ct  「لانشاء روم كتابي دائم 」
        
👑+delet   「يحذف الـروم سواء صوتي او كتابي」
        
👑+role  「لأعطاء رتبة」
        
👑+roleremove  「 أزالة رتبة」
        
👑+role all  「لأعطاء جميع الي في سيرفر رتبة」
        
👑+role bots  「لأعطاء جميع البوتات رتبة」
        
👑+role humans   「لأعطاء جميع الناس معدى البوتات رتبة 」
        
👑+voicekick  「لطرد شخص من روم صوتي」
        
👑+move  「لسحب الشخص الى الروم صوتي الخاص بك」
       
👑+move all 「لسحب جميع الاشخاص الموجودون بالرومات الصوتية أليك」
       
        
       ══════════ஜ۩۞۩ஜ════════════  
       
   +sug 「لأرسال اقتراح لصاحب البوت」
 
   +invite 「لدعوة البوت لسيرفرك」
        `)
           
           
          message.author.sendEmbed(embed)
           
          }
          }); 




          
//╭━━╮╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭╮┃╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╭╯╰╮
//┃╰╯╰┳━┳━━┳━╯┣━━┳━━┳━━┳━┻╮╭╯
//┃╭━╮┃╭┫╭╮┃╭╮┃╭╮┃╭━┫╭╮┃━━┫┃
//┃╰━╯┃┃┃╰╯┃╰╯┃╭╮┃╰━┫╭╮┣━━┃╰╮
//╰━━━┻╯╰━━┻━━┻╯╰┻━━┻╯╰┻━━┻━╯
    
    
    
     client.on('message', message => {
                  if(!message.channel.guild) return;
        var prefix = "+";
        if(message.content.startsWith(prefix + 'bc')) {
        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "Dragon";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
         
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
         
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
         
        reaction1.on("collect", r => {
        message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
        var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('Server', message.guild.name)
           .addField('Sender', message.author.username)
           .addField('Message', args)
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        });
     client.on('message' , message => {
          var prefix = "+";
          if(message.author.bot) return;
         
          if(message.content.startsWith(prefix + "rolebc")) {
            if (!message.member.hasPermission("ADMINISTRATOR"))  return;
            let args = message.content.split(" ").slice(1);
         
            if(!args[0]) {
              message.channel.send("قم بمنشنة الرتبة | !rolebc @everyone message")
                return;
            }
            if(!args[1]) {
              message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
                return;
            }
         
              if(args[0] == "@everyone") {
                message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
                message.guild.members.forEach(m => {
                  m.send(
                  "**" + "السيرفر :" + "\n" +
                  `${message.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${message.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                return;
              }
         
                  var role = message.mentions.roles.first();
                    if(!role) {
                      message.reply("لا توجد رتبة بهذا الاسم")
                        return;
                    }
                message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
                  n.send(
                  "**" + "السيرفر :" + "\n" +
                  `${message.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${message.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
            }
        });
    
    client.on('message', message => {
        if (message.content.split(' ')[0] == '+allbc')
           message.guild.members.forEach( member => {
             if (!message.member.hasPermission("ADMINISTRATOR"))  return;
     
     
               member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                          message.delete();
                 
                                                        });
                 
                                                      });
       client.on("message", message => {
           var prefix = "*^%";
      
                 var args = message.content.substring(prefix.length).split(" ");
                    if (message.content.startsWith(prefix + "ظظظظظ")) {
                              if (!message.member.hasPermission("ADMINISTRATOR"))  return;
     
                              if (!args[1]) {
                                 
                                     let embed3 = new Discord.RichEmbed()
                                         .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                           .setColor("#FF00FF")
                                              message.channel.sendEmbed(embed3);
                                 
                                            } else {
     
                                 
                                               let embed4 = new Discord.RichEmbed()
                                                                .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                    .setColor("#99999")
                                    
                                                                    message.channel.sendEmbed(embed4);
                                                          message.delete();
                                }
                              }
    });
    
                    client.on("message", message => {
                         var prefix = "+";
                        if (message.content.startsWith(prefix + "onlinebc")) {
                                     if (!message.member.hasPermission("ADMINISTRATOR"))  return;
              let args = message.content.split(" ").slice(1);
              var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
             m.send(`${argresult}\n ${m}`);
            })
             message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
             message.delete(); 
            };     
            });


            

            client.on('message', async function(message) {
                if(message.author.bot) return;
                if(!message.channel.guild) return;
                //////////////////////////////////
                if(message.content === `<@${client.user.id}>`) return message.channel.send(`Hey I'am **${client.user.username}**, A nice music bot developed by: \`\`! HP , ء Moha,$ 55₅ , .#5555\`\``);
                // const noms = "** ❯ :musical_note: No music is playing, try ``m-play``" 
                // const nomatch = "**<:MxNo:449703922190385153> You've to be in the same voice channel!**"
                // const member = message.member;
            
                if (message.content.startsWith(`${prefix}eval`)) {
                    const eargs = message.content.split(" ").slice(1);
                    if(!devs.includes(message.author.id)) return;
                    const clean = text => {
                        if (typeof(text) === "string")
                          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                        else
                            return text;
                      }
                    try {
                      const code = eargs.join(" ");
                      let evaled = eval(code);
                
                      if (typeof evaled !== "string")
                        evaled = require("util").inspect(evaled);    
                      message.channel.send(clean(evaled), {code:"xl"});
                    } catch (err) {
                      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
                    }
                  }
            
                  if(message.content.startsWith(`${prefix}info`)) {
                    function convertMS(ms) {
                        var d, h, m, s;
                        s = Math.floor(ms / 1000);
                        m = Math.floor(s / 60);
                        s = s % 60;
                        h = Math.floor(m / 60);
                        m = m % 60;
                        d = Math.floor(h / 24);
                        h = h % 24;
                        return {
                            d: d,
                            h: h,
                            m: m,
                            s: s
                        };
                    };   
                    let u = convertMS(client.uptime);
                    let uptime = u.d + " days  , " + u.h + " hrs  , " + u.m + " mins  , " + u.s + " secs"
                    message.channel.send(new RichEmbed() 
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setURL("")
                    .addField("Version", "1.0v", true)
                    .addField("Library", "[discordjs](https://www.npmjs.com/search?q=discord.js)", true)
                    .addField("Creator", "Moha", true)
                    .addField("Users", `${client.users.size}`, true)
                    .addField('RAM Usage',`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,true)     
                    .addField("Website", "No website atm", true)
                    .setFooter("Uptime "+`${uptime}`)
                    .setColor("RANDOM")
                )
                  }
                
                const mess = message.content.toLowerCase();
                const args = message.content.split(' ').slice(1).join(" ");
                const youtube = new simpleytapi(yt_api_key);
            
                if (!guilds[message.guild.id]) {
                    guilds[message.guild.id] = {
                        queue: [],
                        queueNames: [],
                        isPlaying: false,
                        dispatcher: null,
                        voiceChannel: null,
                        volume: 1,
                        skipReq: 0,
                        skippers: [],
                        loop: false
                    };
                }
            
                function clear() { 
                    guilds[message.guild.id].queue = [];
                    guilds[message.guild.id].queueNames = [];
                    guilds[message.guild.id].isPlaying = false;
                    guilds[message.guild.id].dispatcher = null
                    guilds[message.guild.id].voiceChannel = null;
                    guilds[message.guild.id].skipReq = 0;
                    guilds[message.guild.id].skipReq = [];
                    guilds[message.guild.id].loop = false;
                    guilds[message.guild.id].volume = 1 ;
                }
            
            
                if (mess.startsWith(prefix + "play") || mess.startsWith(prefix+"شغل")) {
                    if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
                    const voiceChannel = message.member.voiceChannel
                    const permissions = voiceChannel.permissionsFor(message.client.user)
                    if (!permissions.has('CONNECT')) return message.channel.send({embed: {description: "🛑 I don't have permission to CONNECT! Give me some."}});
                    if (!permissions.has('SPEAK')) return message.channel.send({embed: {description: "🛑 I don't have permission to SPEAK! Give me some."}});
                     if (args.length == 0 || !args) return message.channel.send(`:musical_note: ❯ ${prefix}play **Youtube URL / Search**`)
                        if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
                            if(guilds[message.guild.id].queue.length > 100) return message.channel.send(``, {embed: {
                                description: `🔒 Sorry, max queue length is 100, do **${prefix}clear** to clear entire queue or **${prefix}clear <number>** to clear 1 item`
                            }})
                            if (args.match(/^.*(youtu.be\/|list=)([^#\&\?]*).*/)) {
                                const playlist = await youtube.getPlaylist(args);
                                const videos = await playlist.getVideos();
                                const queuesync = 100 - guilds[message.guild.id].queue.length
                                if(queuesync < 0 || queuesync == 0) return message.channel.send(`:x: Cannot add this playlist, **\`\`MAX_QUEUE = 100\`\`** clear the current queue and try again!`)
                                videos.slice(0, queuesync).forEach(video => {
                                    guilds[message.guild.id].isPlaying = true;
                                    guilds[message.guild.id].queueNames.push(video.title)
                                    guilds[message.guild.id].queue.push(video.id)
                                })
                                return message.channel.send(`[:musical_score: __${playlist.title}__] **${queuesync}** items Added to the **Queue**!`)                    ;
                            }
                            message.channel.send(`**Searching :mag_right: \`\`${args}\`\`**`).then(()=> {
                            getID(args, function(id) {
                               fetchVideoInfo(id, function(err, videoInfo) {
                                    if (err) throw new Error(err);
                                    if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`);
                                    else 
                                    add_to_queue(id, message);
                                    message.channel.send(new RichEmbed()
                                    .setAuthor("Added to queue", message.author.avatarURL)
                                    .setTitle(videoInfo.title)      
                                    .setURL(videoInfo.url)
                                    .addField("Channel", videoInfo.owner, true)
                                    .addField("Duration", convert.fromS(videoInfo.duration, 'mm:ss') , true)
                                    .addField("Published at", videoInfo.datePublished, true)
                                    .addField("Postion in queue", guilds[message.guild.id].queueNames.length, true)
                                    .setColor("RED")
                                    .setThumbnail(videoInfo.thumbnailUrl)
                                    )
                                    guilds[message.guild.id].queueNames.push(videoInfo.title);
                                });
                            })
                        })
                        } else {
                            if (args.match(/^.*(youtu.be\/|list=)([^#\&\?]*).*/)) {
                                const playlist = await youtube.getPlaylist(args);
                                const videos = await playlist.getVideos();
                                playMusic(videos[0].id, message)
                                guilds[message.guild.id].queueNames.push(videos[0].title)
                                guilds[message.guild.id].queue.push(videos[0].id)
                                videos.slice(1, 100).forEach(video => {
                                    guilds[message.guild.id].isPlaying = true;
                                    guilds[message.guild.id].queueNames.push(video.title)
                                    guilds[message.guild.id].queue.push(video.id)
                                })
                                return message.channel.send(`[:musical_score: __${playlist.title}__] **${videos.slice(0, 100).length}** items Added to the **Queue**!\n**Playing :notes: \`\`${videos[0].title}\`\` - Now!**`)                    ;
                            }
                            message.channel.send(`**Searching :mag_right: \`\`${args}\`\` **`).then(() => {
                            getID(args, function(id) {
                                fetchVideoInfo(id, function(err, videoInfo) {
                                    if (err) throw new Error(err);
                                    if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`)
                                    else 
                                    playMusic(id, message);
                                    guilds[message.guild.id].isPlaying = true;
                                    guilds[message.guild.id].queue.push(id);
                                    guilds[message.guild.id].queueNames.push(videoInfo.title);
                                    message.channel.send(`**Playing :notes: \`\`${videoInfo.title}\`\` - Now!**`);
                                });
                            })})
                        }
                    } else {
                        message.reply(novc);
                    }
            
                } else if (mess.startsWith(prefix + "skip") || mess.startsWith(prefix+"عدي")) {
                    if(!message.member.voiceChannel) return message.reply(novc)
                    if(message.member.hasPermission('MANAGE_CHANNELS')) {
                    if (guilds[message.guild.id].queueNames[0]) {
                        message.channel.send(`**:fast_forward: Skipped** ${guilds[message.guild.id].queueNames[0]}`);
                        return skip_song(message);
                    } else return message.channel.send(`**:x: Nothing playing in this server**`);
                    }
                    else
                    if (guilds[message.guild.id].skippers.indexOf(message.author.id) === -1) {
                        guilds[message.guild.id].skippers.push(message.author.id);
                        guilds[message.guild.id].skipReq++;
                        if (guilds[message.guild.id].skipReq >= Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2)) {
                            if (guilds[message.guild.id].queueNames[0]) {
                            message.channel.send(`**:fast_forward: Skipped** ${guilds[message.guild.id].queueNames[0]}`);
                            skip_song(message);
                            } else return message.channel.send(`**:x: Nothing playing in this server**`);
                        } else {
                            message.channel.send(`**:point_up::skin-tone-1: ${message.author.username} has vote to skip current song! **` + Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2) - guilds[message.guild.id].skipReq) + "**  more votes to skip! **";
                        }
                    } else {
                        message.reply(":x:  you already voted to skip!");
                    }
            
                } else if (mess.startsWith(prefix + "queue") || mess.startsWith(prefix+"قائمة")) {
                    if(guilds[message.guild.id].queueNames.length < 1) return message.channel.send(`**:x: Nothing playing in this server**`);
                    if(!guilds[message.guild.id].queueNames[1]) return message.channel.send('', {embed: {
                    description: `__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})**`,
                    author: {
                    name: `${message.guild.name}'s Queue.`,
                    icon_url: message.guild.iconURL
                    },
                    color: 3447003
                    }});
                    else {
                        let x;
                        if(args > 1) {
                         x = Math.floor(args)*10+1
                        } else {
                          x = Math.floor(11)
                        }
                        let i;
                        if(args > 1) {
                            i = x-11
                           } else {
                             i = 0
                           }
                        let queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                        if(!queuelist) return message.channel.send(`:x:  | Page doesn't exist!`)
                        return message.channel.send('', {embed: {
                            description: `__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})**\n\n:arrow_down: __Up Next__  :arrow_down:\n\n${queuelist}\n\n**Total items in queue: ${guilds[message.guild.id].queueNames.length} | Page ${Math.floor(x/10)} of ${Math.floor((guilds[message.guild.id].queue.slice(1).length+10) /10)}**`,
                            thumbnail: {url: "https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png"} , 
                            author: {
                                name: `${message.guild.name}'s Queue.`,
                                icon_url: message.guild.iconURL
                                },
                            color: 3447003
                        }}) 
                    }
                }
            
            if(mess.startsWith(prefix+"np")) {
                const short = require('short-number');
                if(!guilds[message.guild.id].queue[0] || !guilds[message.guild.id].isPlaying) return message.channel.send(`**:x: Nothing playing in this server.**`)
                await message.channel.startTyping()
                await fetchVideoInfo(guilds[message.guild.id].queue[0], function(err, videoInfo) {
                                    if (err) throw new Error(err);
                                    message.channel.stopTyping(true);
                                    message.channel.send(new RichEmbed()
                                    .setTitle(videoInfo.title)      
                                    .setURL(videoInfo.url)
                                    .addField("Channel", `[**${videoInfo.owner}**](https://youtube.com/channel/${videoInfo.channelId})`, true)
                                    .addField("Duration", `${convert.fromS(videoInfo.duration, 'mm:ss')} — [**Download MP3**](https://www.flvto.biz/sa/downloads/mp3/yt_${videoInfo.videoId})`, true)
                                    .addField("Views", short(videoInfo.views), true)
                                    .addField("Likes/Dislikes", `👍 **${short(videoInfo.likeCount)}** / 👎 **${short(videoInfo.dislikeCount)}**`, true)
                                    .setColor("RED")
                                    .setImage(videoInfo.thumbnailUrl)
                                    )
                })
            }
            
            if(mess.startsWith(prefix+"stop") || mess.startsWith(prefix+"اطلع")) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if(guilds[message.guild.id].isPlaying) guilds[message.guild.id].dispatcher.end();
                if (guilds[message.guild.id].voiceChannel)
                { 
                await clear()
                message.guild.voiceConnection.disconnect();
                message.channel.send(`**:mailbox_with_no_mail: Successfully disconnected!**`)
                }
            }
            
            if(mess.startsWith(prefix+"stuf") || message.content.startsWith(`<@${client.user.id}> stfu`)) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if(guilds[message.guild.id].isPlaying) guilds[message.guild.id].dispatcher.end();
                if (guilds[message.guild.id].voiceChannel)
                { 
                await clear()
                message.guild.voiceConnection.disconnect();
                message.channel.send(`:cry: k sempai!`)
                }
            }
            
            if(message.content.startsWith(prefix+"search")) {
                let index = 0
                if(!args) return message.channel.send(`**${prefix}search [song name]**`)
                const videos = await youtube.searchVideos(args, 10)
                message.channel.send(`**:white_check_mark:   Search Results for \`\`${args}\`\`**`,{embed: {
                description: videos.map(song =>`**[${++index}]** [${song.title}](${song.url})`).join('\n'),
                author: {
                icon_url: message.author.avatarURL,
                name: `${message.author.username} (${message.author.id})`  
                },
                footer: {
                    text: `Type a num between 1 and ${videos.length}, type cancel to cancel.`,
                }
                }})
            try {
            var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11 || msg2.content === 'cancel' && msg2.author.id === message.author.id, {
                maxMatches: 1,
                time: 30000,
                errors: ['time'],
            });
            } catch (error) {
            return message.channel.send(`**:x: Timeout**`) 
            }
            if(guilds[message.guild.id].queue.length > 100) return message.channel.send(``, {embed: {
                description: `🔒 Sorry, max queue length is 100, do **${prefix}clear** to clear entire queue or **${prefix}clear <number>** to clear 1 item`
            }})
            if(response.first().content === 'cancel') return message.channel.send(`**Cancelled it for yah :wink:**`)
            const videoIndex = parseInt(response.first().content)
            const voiceChannel = message.member.voiceChannel
            const permissions = voiceChannel.permissionsFor(message.client.user)
            if (!permissions.has('CONNECT')) return message.channel.send({embed: {description: "🛑 I don't have permission to CONNECT! Give me some."}});
            if (!permissions.has('SPEAK')) return message.channel.send({embed: {description: "🛑 I don't have permission to SPEAK! Give me some."}});    
            const id = videos[videoIndex - 1].id;
            message.delete();
            if(!guilds[message.guild.id].queue[0] || !guilds[message.guild.id].isPlaying) {
            fetchVideoInfo(id, function(err, videoInfo) {
            if (err) throw new Error(err);
            if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`);
            else 
            playMusic(id, message);
            guilds[message.guild.id].isPlaying = true;
            guilds[message.guild.id].queue.push(id);
            guilds[message.guild.id].queueNames.push(videos[videoIndex - 1].title);
            message.channel.send(`**Playing :notes: \`\`${videos[videoIndex - 1].title}\`\` - Now!**`);
            });
            } else {
                    fetchVideoInfo(`${id}`, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`);
                        else 
                        add_to_queue(id, message);
                        message.channel.send(new RichEmbed()
                        .setAuthor("Added to queue", message.author.avatarURL)
                        .setTitle(videoInfo.title)
                        .setURL(videoInfo.url)
                        .addField("Channel", videoInfo.owner, true)
                        .addField("Duration", convert.fromS(videoInfo.duration, 'mm:ss') , true)
                        .addField("Published at", videoInfo.datePublished, true)
                        .addField("Postion in queue", guilds[message.guild.id].queueNames.length, true)
                        .setColor("RED")
                        .setThumbnail(videoInfo.thumbnailUrl)
                        )
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                    });
            }
                }
            
            
            else if (message.content.startsWith(prefix + 'vol') || mess.startsWith(prefix+"صوت")) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if (!guilds[message.guild.id].isPlaying) return message.channel.send("**:x: Nothing playing in this server**")
                if(!args) return message.channel.send(`**:loud_sound: Current Volume:** ${guilds[message.guild.id].dispatcher.volume*100}`)
                if(isNaN(args)) return message.channel.send(`**:x: Volume must be a number -_-**`)
                if (args > 200) return message.reply('**:headphones: For some health reasons the max vol you can use is ``200``, kthx**');
                if (args < 1) return message.reply("**:headphones: you can set volume from ``1`` to ``200``**");
                guilds[message.guild.id].dispatcher.setVolume((0.01 * parseInt(args)))
                guilds[message.guild.id].volume = 0.01 * parseInt(args)
                message.channel.send(`**:loud_sound: Volume:** ${guilds[message.guild.id].dispatcher.volume*100}`);
            }
            
            
            else if (mess.startsWith(prefix + 'pause') || mess.startsWith(prefix+"وقف")) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if (guilds[message.guild.id].dispatcher.paused === true) return message.channel.send("*:hash: Already paused*")
                message.channel.send(':pause_button: **Paused**').then(() => {
                    guilds[message.guild.id].dispatcher.pause();
                });
            }
            
            else if (mess.startsWith(prefix + 'resume') || mess.startsWith(prefix+"كمل")) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if (guilds[message.guild.id].dispatcher.paused === false) return message.channel.send("*:hash: Nothing to resume.*")
                message.channel.send(':play_pause: **Resuming**').then(() => {
                    guilds[message.guild.id].dispatcher.resume();
                });
            }
            
            
            // ONE ITEM WORKS, BUT QUEUE NO... ==> QUEUE LOOP SYSTEM IN 2.0
            
            else if (mess.startsWith(prefix + 'loop') || mess.startsWith(prefix+"عيد")) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if (!guilds[message.guild.id].isPlaying) return message.channel.send("**:x: Nothing playing in this server**")
                if(guilds[message.guild.id].loop === true) {
                    message.channel.send(`:arrow_right_hook: **Looping Disabled**`)
                    guilds[message.guild.id].loop = false;        
                    return;
                } else if(guilds[message.guild.id].loop === false) {
                guilds[message.guild.id].loop = true;
                message.channel.send(':repeat_one: **Looping Enabled!**')
                return;
                }
            }
            
            
            else if (mess.startsWith(prefix + 'join') || mess.startsWith(prefix+"ادخل")) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if(!guilds[message.guild.id].isPlaying && guilds[message.guild.id].queueNames.length <= 0) {
                    message.member.voiceChannel.join();
                    message.channel.send(`**:page_facing_up: Queue moved to \`\`${message.member.voiceChannel.name}\`\`**`)
                } else {
                    message.channel.send(`:x:  **Music is being played in another voice channel!**`)
                }
            }
            
            else if (mess.startsWith(prefix + 'clear') || mess.startsWith(prefix+"نظف")) {
                if (!message.member.voiceChannel) return message.reply(novc);
                if(!guilds[message.guild.id].queueNames[0] || !guilds[message.guild.id].isPlaying) return message.channel.send(`**:x: Nothing playing in this server**`)
               if(guilds[message.guild.id].queueNames.length > 1) {
                if(!args || isNaN(args) && args != 0) {
                guilds[message.guild.id].queueNames.splice(1, guilds[message.guild.id].queueNames.length)
                guilds[message.guild.id].queue.splice(1, guilds[message.guild.id].queue.length)
                message.channel.send(`:asterisk: Cleared the queue of **${message.guild.name}**`)
                } else if(args > 0) {
                    const removedsong = guilds[message.guild.id].queueNames[parseInt(args)]
                    if(!removedsong) return message.channel.send(`:x: **No such item, or item doesn't exist!**`)
                    guilds[message.guild.id].queueNames.splice(parseInt(args), 1)
                    guilds[message.guild.id].queue.splice(parseInt(args), 1)
                    return message.channel.send(`:wastebasket: Removed **${removedsong}** from the queue.`);}
               } else if(guilds[message.guild.id].queueNames.length <= 1 ) {
                   message.channel.send(`:x:  There's only 1 item in the queue. use \`\`${prefix}skip\`\` instead! `)
               }
            }
            });
            
            
            
            //
            function skip_song(message) {
                guilds[message.guild.id].dispatcher.end();
            }
            
            //ERROR: Playing 1 item over and over.
            async function playMusic(id, message) {
                guilds[message.guild.id].voiceChannel = message.member.voiceChannel;
                guilds[message.guild.id].voiceChannel.join().then(function(connection) {
                    stream = ytdl("https://www.youtube.com/watch?v=" + id, {
                        filter: 'audioonly',
                        quality: 'highestaudio',
                        audioEncoding: "opus"
                    });
                    guilds[message.guild.id].skipReq = 0;
                    guilds[message.guild.id].skippers = [];
                    guilds[message.guild.id].dispatcher = connection.playStream(stream, {bitrate: "auto", volume: guilds[message.guild.id].volume});
                    guilds[message.guild.id].dispatcher.on('end', async function() {
                        guilds[message.guild.id].skipReq = 0;
                        guilds[message.guild.id].skippers = [];
                       if(guilds[message.guild.id].loop === true) return playMusic(guilds[message.guild.id].queue[0], message)
                       else                      
                       await guilds[message.guild.id].queue.shift();
                       await guilds[message.guild.id].queueNames.shift();
                        if (guilds[message.guild.id].queue.length === 0) {
                            guilds[message.guild.id].queue = [];          
                            guilds[message.guild.id].queueNames = [];
                            guilds[message.guild.id].isPlaying = false;
                            setTimeout(function() {
                            if(guilds[message.guild.id].voiceChannel !== null) return message.channel.send(`**:stop_button: Queue concluded.**`)
                        }, 1000)
                        } else {
                            setTimeout(async function() {
                                if(!guilds[message.guild.id].queueNames || guilds[message.guild.id].queueNames[0] == undefined) return;
                                await playMusic(guilds[message.guild.id].queue[0], message);
                               message.channel.send(`**Playing :notes: \`\`${guilds[message.guild.id].queueNames[0]}\`\` - Now!**`)
                            }, 500);
                        }
                    });
                });
            }
            
            
            
            function getID(str, cb) {
                if (isYoutube(str)) {
                     cb(getYouTubeID(str));
                } else {
                    search_video(str, function(id) {
                        cb(id);
                    });
                }
            }
            
            function add_to_queue(strID, message) {
                if (isYoutube(strID)) {
                    guilds[message.guild.id].queue.push(getYouTubeID(strID));
                } else {
                    guilds[message.guild.id].queue.push(strID);
                }
            }
            
            function search_video(query, callback) {
                request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
                    var json = JSON.parse(body);
                    if (!json.items[0]) callback("3_-a9nVZYjk");
                    else {
                        callback(json.items[0].id.videoId);
                    }
                });
            }
            
            function isYoutube(str) {
                return str.toLowerCase().indexOf("youtube.com") > -1 || str.toLowerCase().indexOf("youtu.be") > -1;
            }
            
 
//╭━━━┳━━━┳━╮╭━┳━━━┳━━━╮
//┃╭━╮┃╭━╮┃┃╰╯┃┃╭━━┫╭━╮┃
//┃┃╱╰┫┃╱┃┃╭╮╭╮┃╰━━┫╰━━╮
//┃┃╭━┫╰━╯┃┃┃┃┃┃╭━━┻━━╮┃
//┃╰┻━┃╭━╮┃┃┃┃┃┃╰━━┫╰━╯┃
//╰━━━┻╯╱╰┻╯╰╯╰┻━━━┻━━━╯


            let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));
            var prefix = "+";//البريفكس
            
            client.on('message', message => {
            if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
              };
            if (message.content.startsWith(prefix + 'لغز')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
            
            const type = require('./fkk/quiz.json');
            const item = type[Math.floor(Math.random() * type.length)];
            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };
            message.channel.send('**لديك 15 ثانيه لحل هذه الغز**').then(msg => {
            
                        
            msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                    .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من حل هذه الغز بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                        let won = collected.first().author;
                        points[won.id].points++;
                      })
                      .catch(collected => {
                        message.channel.send(`:x: **لم يتمكن احد من حل هذه الغز  في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                      })
                    })
                })
            }
            });
            
            client.on('message', message => {
              if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
                };
              if (message.content.startsWith(prefix + 'فكك')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
              
              const type = require('./fkk/fkk.json');
              const item = type[Math.floor(Math.random() * type.length)];
              const filter = response => {
                  return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
              };
              message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {
              
                    
              msg.channel.send(`${item.type}`).then(() => {
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                      .then((collected) => {
                  message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                          message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
                    console.log('[Typing] Error: No one type the word.');
                        })
                  })
                })
              }
              });
            
            
              client.on('message', message => {
                if (!points[message.author.id]) points[message.author.id] = {
                  points: 0,
                  };
                if (message.content.startsWith(prefix + 'ركب')) {
                  if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                
                const type = require('./fkk/RKB.json');
                const item = type[Math.floor(Math.random() * type.length)];
                const filter = response => {
                    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                };
                message.channel.send('**لديك 15 ثانيه لتركيب الكلمه**').then(msg => {
                
                      
                msg.channel.send(`${item.type}`).then(() => {
                        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                        .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تركيب الكلمه بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                            let won = collected.first().author;
                            points[won.id].points++;
                          })
                          .catch(collected => {
                            message.channel.send(`:x: **لم يتمكن احد من تركيب الكلمه في الوقت المناسب**`);
                      console.log('[Typing] Error: No one type the word.');
                          })
                    })
                  })
                }
                });
            
              client.on('message', message => {
                if (!points[message.author.id]) points[message.author.id] = {
                  points: 0,
                  };
                if (message.content.startsWith(prefix + 'رياضيات')) {
                  if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                
                const type = require('./fkk/math.json');
                const item = type[Math.floor(Math.random() * type.length)];
                const filter = response => {
                    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                };
                message.channel.send('**لديك 15 ثانيه لحل المسئله**').then(msg => {
                
                      
                msg.channel.send(`${item.type}`).then(() => {
                        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                        .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من أجابه عن معادله بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                            let won = collected.first().author;
                            points[won.id].points++;
                          })
                          .catch(collected => {
                            message.channel.send(`:x: **لم يتمكن احد من حل معادله في الوقت المناسب**`);
                      console.log('[Typing] Error: No one type the word.');
                          })
                    })
                  })
                }
                });

                client.on('message', message => {
                    if (!points[message.author.id]) points[message.author.id] = {
                        points: 0,
                      };
                    if (message.content.startsWith(prefix + 'عواصم')) {
                        if(!message.channel.guild) return
                     
                    const type = require('./fkk/3wasm.json');
                    const item = type[Math.floor(Math.random() * type.length)];
                    const filter = response => {
                        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                    };
                    message.channel.send('**لديك 10 ثانية لتجيب**').then(msg => {
                     
                                 
                    msg.channel.send(`${item.type}`).then(() => {
                            message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
                            .then((collected) => {
                            message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
                    لمعرفة نقطاك الرجاء كتابة +نقاطي**`);
                            console.log(`[Typing] ${collected.first().author} typed the word.`);
                                let userData = points[message.author.id];
                                userData.points++;
                              })
                              .catch(collected => {
                                message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                                console.log('[Typing] Error: No one type the word.');
                              })
                            })
                        })
                    }
                    });
            
            client.on('message', message => {
            if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
              };
            if (message.content.startsWith(prefix + 'شقلب')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
            
            const type = require('./fkk/SHAKLEB.json');
            const item = type[Math.floor(Math.random() * type.length)];
            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };
            message.channel.send('**لديك 15 ثانيه لشقلبة الكلمه**').then(msg => {
            
                        
            msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                    .then((collected) => {
                    message.channel.send(`${collected.first().author} ✅ **احسنت,لقد تمكنت من شقلبة الكلمة في الوقت المناسب**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                        let won = collected.first().author;
                        points[won.id].points++;
                      })
                      .catch(collected => {
                        message.channel.send(`:x: **لم يتمكن احد من شقلبة الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                      })
                    })
                })
            }
            });
            
                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'كتابة')) {
                    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                  
                  const type = require('./fkk/type.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                      console.log(`[Typing] ${collected.first().author} typed the word.`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                            })
                      })
                    })
                  }
                  });

                  client.on('message', message => {
                    if(message.content.startsWith ("+marry")) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **')
                    var proposed = message.mentions.members.first()
                   
                    if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
                    if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
                     if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
                      if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
                            message.channel.send(`**${proposed} 
               بدك تقبلي عرض الزواج من ${message.author}
               العرض لمدة 15 ثانية 
               اكتب موافقة او لا** `)
              
              const filter = m => m.content.startsWith("موافقة");
              message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
              .then(collected =>{ 
                  message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
              })
                 .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
                 
                 const filte = m => m.content.startsWith("لا");
              message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
              .then(collected =>{ 
                 message.channel.send(`**${message.author} تم رفض عرضك**`);
              })
                      
                
                           
                  
                }
              }); 
                   
var prefix = "+";
var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var lo = new Discord.RichEmbed()
.setImage(viper[Math.floor(Math.random() * viper.length)])
message.channel.sendEmbed(lo);
    }
});
 
 
 
const secreT = [
    "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
    "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
    "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
    "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
    "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
    "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
    "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
    "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
    "**المناقشات العقيمة لا تنجب افكارا**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
    "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  ]
   
   
   client.on('message', message => {
     if (message.content.startsWith("+خواطر")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
   
     .setThumbnail(message.author.avatarURL) 
   .addField('لعبه خواطر' ,
    `${secreT[Math.floor(Math.random() * secreT.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[id] Send By: ' + message.author.username)
      }
  });
 
 
 
const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
client.on('message', message => {
  if (message.content.startsWith("+كت تويت")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});
 
 
    var prefix = "+";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
 
const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',                                                                                                                                            
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('+صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});  


                  client.on("message", message => {
                    if (message.content === "+help-games") {
                           message.react("✅")
                              message.react("📬")
                     const embed = new Discord.RichEmbed() 
                         .setColor("#ffff00")
                        .setDescription(`

╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
                        
══════════ஜ۩۞۩ஜ════════════  
                    🎮「العاب」🎮
                   
🎮+فكك
                   
🎮+لغز
                      
🎮+كتابة
                   
🎮+رياضيات
                   
🎮+شقلب
                   
🎮+ركب

🎮+كت تويت
 
🎮+لو خيروك 

🎮+خواطر 

🎮+صراحه

🎮+animal

🎮+marry

                   
══════════ஜ۩۞۩ஜ════════════ 

+sug 「لأرسال اقتراح لصاحب البوت」
 
+invite 「لدعوة البوت لسيرفرك」
                    `)
                   
                      message.author.sendEmbed(embed)
                      
                      }
                      }); 

            client.login(process.env.BOT_TOKEN);

  