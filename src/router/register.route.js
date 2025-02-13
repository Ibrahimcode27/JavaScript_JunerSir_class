import express from "express";
import { Registration } from "../controller/register.controller.js";

const app = express();
app.post("/register", Registration);

export default app;
