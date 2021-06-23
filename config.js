module.exports = {
  Admins: ["732189608569471086", "781793295080488970"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/Qvy2x25KKN", //Support Server Link
  Token: process.env.Token || "ODU3MTY5NDMwNzQyODI3MDA4.YNLrPQ.TaJ_Vr-fhNMjwtJwQj6sBrqsMIE", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "857169430742827008", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "l6_Zh_3oStpFVxCJkOQIRgQNo2CRdaL3", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Kite In Air", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "5079c0d7be2a4daebdd84497ab7f257b", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "fe11da19814a45358d4b7946e9af99ab", //Spotify Client Secret
  },
};
