import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Photo = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Photo`, Photo, `Photo`);
