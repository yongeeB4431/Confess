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
	starred: Boolean,
	timesEdited: Number,
	editHistory: Array,
	musicLink: String,
})

const Confession = models.Confession || model("Confession", ConfessionSchema)

export default Confession;