import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    zoneCode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    secretCode: {
      type: String,
      required: true,
      default: "-",
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`User`, User, `User`);
