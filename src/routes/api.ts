import express from "express";
import imagesRouter from "./images/images.router";
import pdfgenRouter from "./pdfgen/pdfgen.router";

const api = express.Router();

api.get("/", (req, res) =>
  res.json({
    message: "Welcome to POC backend Project",
    status: "200(okay), running",
    "available routes": [
      "/graphql (for apollo sandbox)",
      "/upload (for images uploads)",
      "/images (for images)",
      "/ecgtopdf (for ecg graph pdf)",
    ],
  })
);
api.use("/upload", imagesRouter);
api.use("/ecgtopdf", pdfgenRouter);

export default api;
