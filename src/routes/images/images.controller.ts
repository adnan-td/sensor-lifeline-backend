import multer from "multer";
import log4js from "../../log4js";

var logger = log4js.getLogger("log");

export const upload = multer({
  storage: multer.diskStorage({
    destination: "/uploads",
    filename: (req: any, file, cb) => {
      const filename = `${Date.now()}_${file.originalname}`;
      req.filename = filename;
      cb(null, filename);
    },
  }),
  limits: {
    fileSize: 1 * 1024 * parseInt(process.env.FILE_SIZE || ""),
  },
}).single("uploadimg");

export async function httpPostImage(req: any, res: any) {
  if (req.file) {
    logger.error(JSON.stringify(req.file));
    res.status(201).json({ img: `images/${req.filename}` });
  } else {
    res.status(400).json({ message: "Failed to upload" });
  }
}
