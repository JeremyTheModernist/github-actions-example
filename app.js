const fs = require("fs");

const obj = {
	name: "John",
	getName() {
		console.log(this.name);
		return this.name;
	}
};

fs.mkdirSync("pages");
fs.writeFileSync("pages/name.js", JSON.stringify(obj), null);
