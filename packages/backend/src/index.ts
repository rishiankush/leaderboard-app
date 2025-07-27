const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
import { connectDB } from "./db";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/users", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
