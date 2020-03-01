  
async function getBot (ID) {
  if (!ID) return 'error no id';
  else return JSON.parse (await require ('request-promise') ('https://electro-api.glitch.me/api/bots/' + ID));
}
module.exports = getBot;
