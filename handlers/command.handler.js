const { Collection } = require("discord.js")

const { readdirSync } = require("fs")

const ascii = require("ascii-table")

const table = new ascii().setHeading('Command', 'Load status')

const chalk = require("chalk")

module.exports = (client) => {
 // Commands
 client.commands = new Collection()

 const commandFiles = readdirSync(__dirname + "/../commands").filter((file) => 
     file.endsWith(".command.js"),
 )

 for (const file of commandFiles) {
     const command = require(__dirname + `/../commands/${file}`)

     if (command.name) {
         client.commands.set(command.name, command)
         table.addRow(file, '✅')
     } else {
         table.addRow(file, '🚨 -> missing "name" !')
         continue
     }
 }

 console.log(table.toString())

 client.on("message", msg => {
    const { author, guild } = msg
  
    if (author.bot || !guild) {
      return
    }
  
    if (msg.content === "&ping") {
      msg.reply("Pong!");
    }
  });
  
  client.on("message", msg => {
    if (msg.content === "kim jest pingi?") {
      msg.channel.send("To bot zrobiony przez Emila!");
    }
  });

  client.on("message", msg => {
    if (msg.content === "daj słonia") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/779291934078140428/IMG_20201118_105243.png');
    }
  });

  client.on("message", msg => {
    if (msg.content === "daj pingu") {
      msg.channel.send('https://media.discordapp.net/attachments/773491441434492939/778963824657039400/maxresdefault.jpg?width=891&height=501');
    }
  });

  client.on("message", msg => {
    if (msg.content === "xD") {
      msg.channel.send('xD');
    }
  });

  client.on("message", msg => {
    if (msg.content === "cześć") {
      msg.reply(`cześć.🖐`);
    }
  });

  client.on("message", msg => {
    if (msg.content === "&help") {
      msg.channel.send("Cześć, tu Pingi! Moim zadaniem jest witanie użytkowników wchodzących na serwer i z nigo wychodzących oraz wysyłanie przeróżnych wiadomości. Jeśli chcesz, odwiedź moją stronę internetową: https://www.pingi.emilkrawczyk.pl/. Mój adres email to: lubie@pingi.emilkrawczyk.pl. 🙂")
    }
  })
}



