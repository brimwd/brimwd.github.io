funding = new Schema({
	_id: { type: Schema.Types.ObjectId, index: true },
	project: { type: String, required: true },
	app: { type: Schema.Types.ObjectId, ref: 'App' },
	year: Date, // year this funding item applies to

	type: { type: String, enum: [ 'capex', 'opex' ], lower: true, required: true },
	code: String, // enum against actual list of cost codes (opex) or PR codes (capex)

	budget: Number,
	estCost: Number
})

request = new Schema({
	_id: { type: Schema.Types.ObjectId, index: true },

	financing: { type: Schema.Types.ObjectId, ref: 'Funding' },
	type: { type: String, enum: [ 'capex', 'opex' ], lower: true, required: true }, // Do we need to store this request type here if we have it in the funding object? eg. Can you make a CAPEX request against an OPEX funding source?

	requestDate: Date,
	requestAmount: Number,
	// If we are we reusing the same request object to store the request and the 'received' response, then it's okay to set these request values as required.
	// if there is ever a possibility of creating this object without a request date/amount (if we're given a grant, for example, without a specific request against a funding source), then we can't set these values as required

	receivedDate: Date,
	receivedAmount: Number
	// received amounts and dates can't be "required", because we won't get the received amount at the time the request event is created
})