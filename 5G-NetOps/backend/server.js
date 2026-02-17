import express from "express";
import cors from "cors";
import usecaseRoutes from "./routes/usecases.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/usecases", usecaseRoutes);

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
