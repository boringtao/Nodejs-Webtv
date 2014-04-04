module.exports = function (app, config, mongoose) {
	var Province = new mongoose.Schema ({
		name: 		{ type: String, unique: true },
		intro: 		{ type: String, unique: true },
		location: 	{ 
			lat: 	{ type: String, unique: true },
			lon: 	{ type: String, unique: true }
		}
		stations: 	[ Station ]	
	});

	var Station = new mongoose.Schema ({
		name: 		{ type: String },
		logo: 		{ type: String },
		intro: 		{ type: String },
		programs: 	[ Program ]
	});

	var Program = new mongoose.Schema ({
		name: 		{ type: String },
		cover: 		{ type: String },
		intro: 		{ type: String },
		categories: [ { type: String } ],
		episodes: 	[ Episode ]
	});

	var Episode = new mongoose.Schema ({
		name: 		{ type: String },
		cover: 		{ type: String },
		intro: 		{ type: String },
		keywords: 	[ { type: String } ],
		video: 		{ type: String }
	})
};