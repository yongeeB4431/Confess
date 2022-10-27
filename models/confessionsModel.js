import {Schema, model, models} from "mongoose";

const ConfessionSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	yourConfession: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	day: {
		type: String,
		required: true
	},
	starred: {
		type: Boolean
	},
	editHistory: [
		{
			yourConfession: String,
			date: String,
			day: String
		}
	]
})

const Confession = models.Confession || model("Confession", ConfessionSchema)

export default Confession;
