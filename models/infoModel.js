import { Schema, model, models } from "mongoose";

const infoSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  oNames: String,
  DOB: String,
  age: String,
  rStatus: String,
  crush: String,
  favoritePerson: String,
  favoriteFood: String,
  favoriteClub: String,
});

const Info = models.usersInfo || model("usersInfo", infoSchema);

export default Info;
