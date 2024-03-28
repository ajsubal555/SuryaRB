// File://home/rose/BOT/SuryaRB/config.js
export const Config = {
	phone_number: "918005453017",
	owners: ["918005453017"],
	use_pairing_code: true,
	pairing_wait: 1000 * 6,

	// TODO: FIX PREFIXES ERROR
	prefix: ["!", ".", ""],

	itsrose_apikey: process.env.ITSROSE_APIKEY || "AcRJNhdThOD76dhuyI0yzUuSGF8bYlBkZB7gKFkn9etdFRsD0BCPq4bOB1DVkjZ3",

	database: {
		use_mongo: True,
		mongo_url: "mongodb://localhost:27017/database",

		path: "./database.json",
		save_interval: 10_000,
		debug: false,
	},
};
