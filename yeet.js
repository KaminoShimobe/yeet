const Discord = require("discord.js");
const TwitchBot = require('twitch-bot');
const mysql = require("mysql");
const SpotifyWebApi = require('spotify-web-api-node');
const prefix = "&";
const mods = new Set();
const subs = new Set();
const followers = new Set();

const Bot = new TwitchBot({
  username: 'arion_seabiscuit',
  oauth: process.env.TWITCH,
  channels: ['falsevibrato8']
})

var scopes = ['playlist-modify-public'],
state = '34fFs29kd09';

var spotifyApi = new SpotifyWebApi({
  clientId: '43613288d3b448ac9f26b41060e4743a',
  clientSecret: process.env.SPOTIFY,
  redirectUri: process.env.SPOTIFY_URI
});

var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
 
console.log(authorizeURL);

var code = 'AQBPurmQhh9fZcFBLAQns0rQ0bN0L3UlKZ5f96K7FMjmOH3FM3pvonaKd2gNRivkcKqyTbxn3zL5FJRdhbqce80pJycTyYttu2Uc6VFxrmhcp9K-KYUj0JUjGoT2Wtk_GRbCcs_8b3R4x2Clv8fw2mBVr4mqlNJJZO0vP6PfsZd2vFNCNxl1EQs-7PMV1jbVb2UWEHyNhEmacri9ecOgetzXErg0j34T7mfdsjwKJ8Zk5_EVf73B7on0NFWHyvHa6WQdaU0'

// function resetToken(){

// spotifyApi.refreshAccessToken().then(
//   function(data) {
//     console.log('The access token has been refreshed!');
 
//     // Save the access token so that it's used in future calls
//     spotifyApi.setAccessToken(data.body['access_token']);
//   },
//   function(err) {
//     console.log('Could not refresh access token', err);
//   }
// );
	
// }



spotifyApi.authorizationCodeGrant(code).then(
  function(data) {
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);
 
    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
	  
	 
  },
  function(err) {
    console.log('Something went wrong!', err);
  }
);

spotifyApi.refreshAccessToken().then(
  function(data) {
    console.log('The access token has been refreshed!');
 
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Could not refresh access token', err);
  }
);


 
Bot.on('join', channel => {
  console.log(`Joined channel: ${channel}`)
	
 con.query(`SELECT * FROM stream WHERE id = 'steelBarnBot'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let thisGreeting = rows[0].greeting;
		
		
		
		if(rows.length < 1) {
			  Bot.say("Welcome to False Vibrato's Stream!! <3");

		} else {
			if(thisGreeting == undefined){
			  Bot.say("Welcome to False Vibrato's Stream!! <3");	
			}	else {
			Bot.say(thisGreeting);
			}	
		
}
	});			
   	


	
	
//   var greeting = ['Running it down mid today bois? :O', 'Welcome to a happy and wholesome stream <3', 'False is gonna DEF get tet dandy this time! >:(', 'Hi hi! It is STREAM time! :D']	
//   Bot.say(greeting[Math.floor(Math.random()*3)]);
 	
})
 
Bot.on('error', err => {
  console.log(err)
})
 
Bot.on('message', chatter => {
  if(chatter.message === '!help' || chatter.message.indexOf("help") != -1 || chatter.message.indexOf("Help") != -1) {
    Bot.say('Contact one of our lovely mods for help with anything!');
   
  }	
	
  if(chatter.message === '!discord' || chatter.message.indexOf("discord") != -1 || chatter.message.indexOf("Discord") != -1 || chatter.message.indexOf("Discord?") != -1 || chatter.message.indexOf("discord?") != -1) {
    Bot.say('Join our ranch! We got da horses in da back! https://discord.gg/khQuZ62')
  }

  if(chatter.message === '!spotify' || chatter.message.indexOf("spotify") != -1 || chatter.message.indexOf("Spotify") != -1 || chatter.message.indexOf("Spotify?") != -1 || chatter.message.indexOf("spotify?") != -1) {
    Bot.say('Join our ranch! We got da horses in da back! https://discord.gg/khQuZ62')
  }

if(chatter.username === 'Kamino_Shimobe' || chatter.display_name === 'Kamino_Shimobe' || chatter.username === 'psytician' || chatter.display_name === 'Psytician' || chatter.username === 'falsevibrato8' || chatter.display_name === 'falsevibrato8'){
  if(chatter.message === '!toggle'){
		con.query(`SELECT * FROM spotify WHERE id = 'steelBarnBot'`, (err, rows) => {
		if(err) throw err;
		let sql;

		let accept = rows[0].accept;

		if(rows.length < 1) {
			sql = `INSERT INTO spotify (accept) VALUES (${true})`;
			con.query(sql, console.log);
			Bot.say(`Accepting spotify requests!`);
			return;
		} else {
			if(accept == true){
				sql = `UPDATE spotify SET accept = ${false} WHERE id = 'steelBarnBot'`;
				con.query(sql, console.log);
				Bot.say(`Not accepting spotify requests!`);
			} else if(accept == false){
				sql = `UPDATE spotify SET accept = ${true} WHERE id = 'steelBarnBot'`;
				con.query(sql, console.log);
				Bot.say(`Accepting spotify requests!`);
			}

		}


		});	
	}
}

  if(chatter.username === 'Kamino_Shimobe' || chatter.display_name === 'Kamino_Shimobe') {
	var chance = Math.floor(Math.random() * 8) + 1;	  
	  if(chance == 1){
    		Bot.say('Kamino is our master coder');
	  }
  }
	
if(chatter.username === 'Psytician' || chatter.display_name === 'Psytician') {
	var chance = Math.floor(Math.random() * 8) + 1;	  
	  if(chance == 1){
    		Bot.say('It is our lovely mod Psy (:');
	  }
  }	

  if(chatter.username === 'ExcessiveTv' || chatter.display_name === 'ExcessiveTv') {
	var chance = Math.floor(Math.random() * 8) + 1;	  
	  if(chance == 1){
    		Bot.say('Suck my ass like a chicken wing');
	  }
  }	
})

const bot = new Discord.Client({disableEveryone: true})

var con_fig = {
	host: "us-cdbr-iron-east-02.cleardb.net",
	user: "ba70974f187526",
	password: process.env.MY_SQL,
	database: "heroku_2433a99852a1991",
	port: 3306
};

var con;

function handleDisconnect() {
con = mysql.createConnection(con_fig);
con.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  }); 	

process.on('uncaughtException', function (err) {
    console.log(err);
	
}); 
	


con.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
       throw err;                                 // server variable configures this)
    }
});
       }
handleDisconnect();


 

	

bot.on("ready", async () => {

	console.log(`${bot.user.username} is ready!`);
	
	bot.user.setPresence({ status: 'online', game: { name: '&stream' } });

	

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

	if(command === `${prefix}table`){
	if(message.author.id == '242118931769196544'){
		var sql = "CREATE TABLE spotify (id VARCHAR(30), accept BOOLEAN)";
		
		
		con.query(sql, function (err, result) {
    	if (err) throw err;
    	message.author.send("Table Spotify created!");
  	});
	
		var sql2 = "CREATE TABLE stream (id VARCHAR(30), greeting VARCHAR(300))";
		
		
		con.query(sql2, function (err, result) {
    	if (err) throw err;
    	message.author.send("Table stream created!");
  	});
		

	
}
	}	

	if(command === `${prefix}drop`){
	if(message.author.id == '242118931769196544'){
		var sql = "DROP TABLE spotify";
		
		
		con.query(sql, function (err, result) {
    	if (err) throw err;
    	message.author.send("Table Spotify dropped!");
  	});
	
		var sql2 = "DROP TABLE stream"
		
		
		con.query(sql2, function (err, result) {
    	if (err) throw err;
    	message.author.send("Table stream dropped!");
  	});
		

	
}
	}	
	
	if(command === `${prefix}spotify`){
		con.query(`SELECT * FROM spotify WHERE id = 'steelBarnBot'`, (err, rows) => {
		if(err) throw err;
		let sql;
		
		if(rows.length < 1) {
			sql = `INSERT INTO spotify (id, accept) VALUES ('steelBarnBot', ${true})`;
			con.query(sql, console.log);
			message.channel.send(`Accepting spotify requests!`)
			return;
		} 	
			
		let accept = rows[0].accept;

		
			if(accept == true){
				sql = `UPDATE spotify SET accept = ${false} WHERE id = 'steelBarnBot'`;
				con.query(sql, console.log);
				message.channel.send(`Not accepting spotify requests!`);
			} else if(accept == false){
				sql = `UPDATE spotify SET accept = ${true} WHERE id = 'steelBarnBot'`;
				con.query(sql, console.log);
				message.channel.send(`Accepting spotify requests!`);
			}

		


		});	
	}
	
	if(command === `${prefix}greet`){
		con.query(`SELECT * FROM stream WHERE id = 'steelBarnBot'`, (err, rows) => {
		if(err) throw err;
		let sql;

		
			

		if(rows.length < 1) {
			
			message.channel.send(`You have no greeting, what would you like it to be? ${prefix}cancel to cancel.`);
			 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == "&cancel") { 
            			message.channel.send("Greeting cancelled.");
            			return;
            		} else {
				
            			sql = `INSERT INTO stream (id, greeting) VALUES ('steelBarnBot', '${message.context}')`;
				con.query(sql, console.log);
				message.channel.send("Greeting updated to: \n **" + message.context + "**");
				return;
            		}
			});	
				
			
			
			
		} 
			let greetings = rows[0].greeting;
			
			message.channel.send(`Your current greeting is \n **${greetings}** \n, what would you like it to be? ${prefix}cancel to cancel.`);
			 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == "&cancel") { 
            			message.channel.send("Greeting cancelled.");
            			return;
            		} else {
				sql = `UPDATE stream SET greeting = '${message.context}' WHERE id = 'steelBarnBot'`;
				con.query(sql, console.log);
				message.channel.send("Greeting updated to: \n **" + message.context + "**");
				return;
            		}
			});	
		


		});	
	}
	
	


		
	
	
	if(message.author.bot) return;
	
if(command === `${prefix}stream`){
	message.channel.send("False be streamin here: \n https://m.twitch.tv/falsevibrato8/profile \n GO CHECK HER OUT CUZ")
}
	
if(command === `${prefix}info`){
	spotifyApi.getMe()
  	.then(function(data) {
    console.log('Some information about the authenticated user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
	
}

if(command === `${prefix}playlist`){
	spotifyApi.getPlaylist('5pKBnd1hsZXiHHoosznaYs')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
	
}

if(command === `${prefix}search` && messageArray[1] != undefined){

var thing = message.content;
var query = thing.replace(prefix +"search", "");

spotifyApi.searchTracks(query)
  .then(function(data) {
    console.log('Search by ' + query + ':', data.body);
    console.log(data.body.tracks.items[0].uri);

    var songs = [data.body.tracks.items[0].name, data.body.tracks.items[1].name, data.body.tracks.items[2].name, data.body.tracks.items[3].name, data.body.tracks.items[4].name];
	var songIds = [data.body.tracks.items[0].uri, data.body.tracks.items[1].uri, data.body.tracks.items[2].uri, data.body.tracks.items[3].uri, data.body.tracks.items[4].uri]




message.channel.send("Which song would you like to play? respond with (1 - 5) to select or &cancel to cancel.\n 1." + songs[0] + "\n 2." + songs[1] + "\n 3." + songs[2] + "\n 4." + songs[3] + "\n 5." + songs[4])
 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content === "&cancel") { 
            			message.channel.send("Search cancelled.");
            			return;
            		} else if (message.content === "1") {

            			spotifyApi.addTracksToPlaylist('5pKBnd1hsZXiHHoosznaYs', [songIds[0]])
						  .then(function(data) {
						  	message.channel.send('Added '+ songs[0] +' to playlist');
						    console.log('Added '+ songs[0] +' to playlist!');
						  }, function(err) {
						    console.log('Something went wrong!', err);
						  });
            			return;
            		}	else if (message.content === "2") { 
            			spotifyApi.addTracksToPlaylist('5pKBnd1hsZXiHHoosznaYs', [songIds[1]])
						  .then(function(data) {
						  	message.channel.send('Added '+ songs[1] +' to playlist');
						    console.log('Added '+ songs[1] +' to playlist!');
						  }, function(err) {
						    console.log('Something went wrong!', err);
						  });
            			return;
            		}	else if (message.content === "3") { 
            			spotifyApi.addTracksToPlaylist('5pKBnd1hsZXiHHoosznaYs', [songIds[2]])
						  .then(function(data) {
						  	message.channel.send('Added '+ songs[2] +' to playlist');
						    console.log('Added '+ songs[2] +' to playlist!');
						  }, function(err) {
						    console.log('Something went wrong!', err);
						  });
            			return;
            		}	else if (message.content === "4") { 
            			spotifyApi.addTracksToPlaylist('5pKBnd1hsZXiHHoosznaYs', [songIds[3]])
						  .then(function(data) {
						  	message.channel.send('Added '+ songs[3] +' to playlist');
						    console.log('Added '+ songs[3] +' to playlist!');
						  }, function(err) {
						    console.log('Something went wrong!', err);
						  });
            			return;
            		}	else if (message.content === "5") { 
            			spotifyApi.addTracksToPlaylist('5pKBnd1hsZXiHHoosznaYs', [songIds[4]])
						  .then(function(data) {
						  	message.channel.send('Added '+ songs[4] +' to playlist');
						    console.log('Added '+ songs[4] +' to playlist!');
						  }, function(err) {
						    console.log('Something went wrong!', err);
						  });
            			return;
            		}	else {
            			message.channel.send("Query Cancelled.")
            			return;
            		}

            	});

  }, function(err) {
    console.error(err);
  });



}

//5pKBnd1hsZXiHHoosznaYs

// spotifyApi.addTracksToPlaylist('5pKBnd1hsZXiHHoosznaYs', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
//   .then(function(data) {
//     console.log('Added tracks to playlist!');
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });
//kl0knbim8wcfrun4jfjekwj1t


	
});	

bot.login(process.env.BOT_TOKEN);
