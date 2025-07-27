import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  ogCode: String,
  name: String,
  avatar: String,
  title: String,
  rank: String,
  points: Number,
  attack: {
    green: Number,
    black: Number,
    red: Number,
  },
  defence: {
    red: Number,
  },
  status: String,
  approval: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  matches: Number,
  wins: Number,
});

export const User = mongoose.model("User", userSchema);
