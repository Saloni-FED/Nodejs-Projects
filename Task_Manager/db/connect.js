import mongoose from "mongoose";

export const connectDb = (URL) => {
  return mongoose
    .connect(URL)
    .then(() => console.log("connecting..."));
};
