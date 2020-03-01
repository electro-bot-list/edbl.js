async function getVotes (BotID, UserID) {
  if (!BotID) return 'error no id';
  else if (!UserID) return 'error no userid'
  var Data = await require ('./getBot.js') (BotID);
  if (Data.error) return 'error no Bot';
  else return Object.keys (Data.hasVoted).includes(UserID);
}
module.exports = getVotes;
