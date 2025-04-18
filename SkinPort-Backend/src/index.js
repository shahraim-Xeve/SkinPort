import dotenv from "dotenv";
import connectionDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config();

connectionDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("App Listening on ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("DB-Error: ", err);
  });
