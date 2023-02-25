import express from "express";
import log4js from "log4js";
import { httpGetECGData } from "./pdfgen.controller";

const pdfgenRouter = express.Router();

pdfgenRouter.post("/", httpGetECGData);

export default pdfgenRouter;

// var logger = log4js.getLogger("log");
// logger.error(e);
