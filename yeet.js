const Discord = require("discord.js");
const TwitchBot = require('twitch-bot');
const prefix = "!";
const mods = new Set();
const subs = new Set();
const followers = new Set();

const Bot = new TwitchBot({
  username: 'arion_seabiscuit',
  oauth: process.env.TWITCH,
  channels: ['falsevibrato8']
})
 
Bot.on('join', channel => {
  console.log(`Joined channel: ${channel}`)
  var greeting = ['Running it down mid today bois? :O', 'Welcome to a happy and wholesome stream <3', 'False is gonna DEF get tet dandy this time! >:(', 'Hi hi! It is STREAM time! :D']	
  Bot.say(greeting[Math.floor(Math.random()*3)]);
 	
})
 
Bot.on('error', err => {
  console.log(err)
})
 
Bot.on('message', chatter => {
  if(chatter.message === '!help' || chatter.message.indexOf("help") != -1 || chatter.message.indexOf("Help") != -1) {
    Bot.say('Contact one of our lovely mods for help with anything!');
    setTimeout(Bot.say('Except Kamino he a bum :P'), 2000);  
  }	
	
  if(chatter.message === '!discord' || chatter.message.indexOf("discord") != -1 || chatter.message.indexOf("Discord") != -1 || chatter.message.indexOf("Discord?") != -1 || chatter.message.indexOf("discord?") != -1) {
    Bot.say('Join our discord! We got da horses in da back! \n https://discord.gg/khQuZ62')
  }

//   if(chatter.username === 'Kamino_Shimobe' || chatter.display_name === 'Kamino_Shimobe') {
// 	var chance = Math.floor(Math.random() * 4) + 1;	  
// 	  if(chance == 1){
//     		Bot.say('OMG SHUT UP KAMINO >:( >:( >:(!');
// 	  }
//   }
	
// if(chatter.username === 'psytician' || chatter.display_name === 'Psytician') {
// 	var chance = Math.floor(Math.random() * 4) + 1;	  
// 	  if(chance == 1){
//     		Bot.say('Hi Psy :3');
// 	  }
//   }	
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
