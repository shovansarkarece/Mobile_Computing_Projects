import express from "express";
import cors from "cors";
import usecaseRoutes from "./routes/usecases.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/usecases", usecaseRoutes);

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

