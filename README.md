# ElectroBotList.js API Wrapper
![Hi](https://nodei.co/npm/edbl.js.png?downloads=true&stars=true)

A simple nodejs module helps you to get info/votes of bots from [Electro Discord Bot List](https://www.edbl.xyz)
# Setup and Examples
first, define module variable
```js
var edbl = require ('edbl.js');
```
Get info of bots
```js
edbl.getBot ('BotID').then (async (BotInfo) => {
  console.log (BotInfo);
  // returns botInfo Object
});
```
Check if user has voted to the bot
```js
edbl.hasVoted ('BotID', 'UserID').then (async (BotInfo) => {
  console.log (BotInfo);
  // returns hasVoted boolean (true, false);
});
```
# botInfo Object
returns Object contains: 
```js
id: String // Bot userid
username: String // Bot username
avatar: String // Bot avatarUrl
lib: String // Library of bot
prefix: String // Prefix of bot
shortdesc: String // Short description of bot in TBL site
longdesc: String // Long description of bot in TBL site (contains markdown & html)
support: String or Boolean // Support invite url , if haven't returns false
owner: Object // Owner object contains (id, name)
invite: String // Invite link of the bot (perms 8)
verified: Boolean // returns true if bot is verified and false if not
widget: String // widget api image url of bot in TBL
votesCount: Number // returns the size of votes
hasVoted: Object // Object of all votes in lifetime with timestamp of it
```
