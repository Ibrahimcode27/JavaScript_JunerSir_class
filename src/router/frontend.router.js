import express from "express";
import { frontend } from "../controller/frontend.controller.js";

const app = express();
app.post("/dedo", frontend);

export default app;
