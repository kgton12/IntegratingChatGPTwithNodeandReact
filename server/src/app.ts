import cors from "cors";
import express from "express";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

export default app;
