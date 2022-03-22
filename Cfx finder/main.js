console.log("\x1b[31m   _____ ________   __              _____ _____     ______ _           _           ");
console.log("  / ____|  ____\\ \\ / /             |_   _|  __ \\   |  ____(_)         | |          ");
console.log(" | |    | |__   \\ V /   _ __ ___     | | | |__) |  | |__   _ _ __   __| | ___ _ __ ");
console.log(" | |    |  __|   > <   | '__/ _ \\    | | |  ___/   |  __| | | '_ \\ / _` |/ _ \\ '__|");
console.log(" | |____| |     / . \\ _| | |  __/   _| |_| |       | |    | | | | | (_| |  __/ |   ");
console.log("  \\_____|_|    /_/ \\_(_)_|  \\___|  |_____|_|       |_|    |_|_| |_|\\__,_|\\___|_|   ");
console.log("\x1b[0m");

const readline = require('readline');
const axios = require('axios');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
rl.question("Veuillez saisir l’adresse IP CFX.re du serveur (cfx.re/join/XXXXXX or XXXXXX): ", (url) => {

if (url.startsWith("cfx.re/join/")) {
  
  var request = "https://" + url

}

else {
  
  var request = "https://cfx.re/join/" + url
  var url = "cfx.re/join/" + url;
  
}

  async function storeheader() {

try {

  var response = (await axios.get(request)).headers["x-citizenfx-url"].replace("http://", "").replace("/", "");

} catch (error) {

  var response = "Le serveur n’a pas été trouvé ! Vérifiez l’adresse IP du serveur CFX.re ou le serveur peut être hors ligne !"

}

console.log();
  console.log(`CFX.re IP: \x1b[36m${url}`);
  console.log(`\x1b[0mIP address: \x1b[36m${response}\x1b[0m`);
  console.log();
  console.log(`\x1b[32mNote : Rappelez-vous que certains serveurs ont leur IP cachée et il n’y a pas d’autre moyen d’obtenir l’IP du serveur. Assurez-vous également que ce serveur est en ligne!`)
  console.log();
  console.log(`\x1b[33mContact : SP1D3R#9999.`);
  console.log(`\x1b[33mN’hésitez pas à demander des fonctionnalités et signaler des bugs. Je vais les corriger ou implémenter des fonctionnalités aussi vite que je peux. : )\x1b[0m`);
  console.log();
  recursiveAsyncReadLine();

}

storeheader()
});
};
recursiveAsyncReadLine();
