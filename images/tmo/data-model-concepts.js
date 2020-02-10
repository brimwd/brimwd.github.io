var user = new Schema({
  _id: { type: String, index: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team', index: true },
  teamName: { type: String, trim: true },

  familyName: { type: String, trim: true },
  givenName: { type: String, trim: true },

  accessed: Date,
  deleted: Date
});

var team = new Schema({
  _id: { type: String, index: true },
  name: { type: String, trim: true },

  managers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  apps: [{ type: Schema.Types.ObjectId, ref: 'App' }],

  billing: { type: String, trim: true },

  created: { type: Date, default: Date.now },
  accessed: Date,
  deleted: Date
});

var app = new Schema({
  _id: { type: String, index: true },
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  appID: { type: String, trim: true, index: true }, //3 characters -- unique value to represent application

  managers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  OU: [{ type: String, trim: true, index: true }], //3 characters -- shared between apps to map to Active Directory (AD) groups

  billing: { type: String, trim: true },

  created: { type: Date, default: Date.now },
  accessed: Date,
  updated: Date,
  deleted: Date
});
