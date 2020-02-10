var team = new Schema({
	_id: { type: Schema.Types.ObjectId, index: true },
	name: { type: String, trim: true },

	managers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	apps: [{ type: Schema.Types.ObjectId, ref: 'App' }],

	created: { type: Date, default: Date.now },
	accessed: Date,
	deleted: Date
})


// We can simplify our application by using this model for "general contacts" as well as users.
// -> "general contacts" referring to people who are not strictly 'users' of Conductor, but for whom we need basic contact info
// Doing so will allow us to consolidate our data sources and reduce the number of places/ways we need to look for info
var user = new Schema({
	_id: { type: String, index: true },
	teamId: { type: Schema.Types.ObjectId, ref: 'Team', index: true },

	email: { type: String, trim: true, required: true },
	ntid: { type: String, trim: true, required: true },

	familyName: { type: String, trim: true },
	givenName: { type: String, trim: true },

	accessed: Date,
	deleted: Date
});
