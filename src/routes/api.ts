import express from "express";
import imagesRouter from "./images/images.router";
import pdfgenRouter from "./pdfgen/pdfgen.router";

const api = express.Router();

api.get("/", (req, res) =>
  res.json({
    message: "Welcome to POC backend Project",
    status: "200(okay), running",
    "available routes": [
      "/images (for images)",
      "/upload (for images uploads)",
      "/ecgtopdf (for ecg graph pdf)",
    ],
  })
);
api.use("/upload", imagesRouter);
api.use("/ecgtopdf", pdfgenRouter);

export default api;
