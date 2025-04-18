import mongoose from "mongoose";
import { DB_Name } from "../constants/index.js";

const connectionDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log("Connection Host: ", connectionDB.connection.host);
  } catch (error) {
    console.log("Mongoose Connection Error: ", error);
    process.exit(1);
  }
};
export default connectionDB;
