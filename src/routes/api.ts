import express from "express";
import imagesRouter from "./images/images.router";
import pdfgenRouter from "./pdfgen/pdfgen.router";

const api = express.Router();

api.use("/upload", imagesRouter);
api.use("/ecgtopdf", pdfgenRouter);

export default api;
