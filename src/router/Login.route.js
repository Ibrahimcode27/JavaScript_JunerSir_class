import express from "express";
import { Login } from "../controller/Login.controller.js";

const app = express();
app.post("/Login", Login);

export default app;
