const fs = require("fs");

require("dotenv").config({ path: `${__dirname}/.env.development` });

console.log(process.env);

const obj = {
	name: "John",
	getName() {
		console.log(this.name);
		return this.name;
	}
};

if (!fs.existsSync("pages")) {
	fs.mkdirSync("pages");
	fs.writeFileSync("pages/name.js", JSON.stringify(obj), null);
}
