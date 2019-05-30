const Discord = require("discord.js");
const TwitchBot = require('twitch-bot');
const prefix = "!";

const Bot = new TwitchBot({
  username: 'arion_seabiscuit',
  oauth: process.env.TWITCH,
  channels: ['falsevibrato8']
})
 
Bot.on('join', channel => {
  console.log(`Joined channel: ${channel}`)
  Bot.say('We schleep ^_^ Zzz')	
})
 
Bot.on('error', err => {
  console.log(err)
})
 
Bot.on('message', chatter => {
  if(chatter.message === '!yeet') {
    Bot.say('YA YEET!')
  }
})

const bot = new Discord.Client({disableEveryone: true})

// var con_fig = {
// 	host: "",
// 	user: "",
// 	password: process.env.MY_SQL,
// 	database: "",
// 	port: 3306
// };

// var con;

// function handleDisconnect() {
// con = mysql.createConnection(con_fig);
// con.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//   }); 	

// process.on('uncaughtException', function (err) {
//     console.log(err);
	
// }); 
	


// con.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//        throw err;                                 // server variable configures this)
//     }
// });
//        }
// handleDisconnect();


 

	

bot.on("ready", async () => {

	console.log(`${bot.user.username} is ready!`);
	
	bot.user.setPresence({ status: 'online', game: { name: '!stream' } });

	

	try {

		let link = await bot.generateInvite(["ADMINISTRATOR"]);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}
//


});

bot.on("message", async message => {
	
	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);

	
	


	


		
	
	
	if(message.author.bot) return;
	
if(command === `${prefix}stream`){
	message.channel.send("False be streamin here: \n https://m.twitch.tv/falsevibrato8/profile \n GO CHECK HER OUT CUZ")
}
	
});	

bot.login(process.env.BOT_TOKEN);
