// packages
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from 'fs';

// routes import
import v1Routes from "./routes/v1";
import logger from "./helpers/winston/dev_logger";

dotenv.config();

// main app
const app: Express = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://post-dump-xi.vercel.app/"
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//routes
app.use("/v1", v1Routes);

app.get("/", (_: Request, res: Response) => {
  try {
    res.status(200).send("Welcome to the typeScript post dump backend!");
  } catch (error: any) {
    res.status(500).send("Error:" + error.message);
  }
});

const upload = multer({
  dest: "uploads/"
})

app.post("/upload", upload.single("image"), (req: Request, res: Response) => {
  if (req.file) {
    logger.info("File uploaded successfully "+req.file)
    res.send("File uploaded successfully")
  } else {
    logger.info("No file uploaded")
    res.status(400).send("No file uploaded")
  }
})

app.use(express.static(path.join(__dirname, "public")))

app.get('/images/:filename', async (req, res) => {
  const filename = req.params.filename;

  const filePath = path.join("uploads", filename);

  try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('Image not found');
    }

    const contentType = 'image/' + path.extname(filename).slice(1);

    res.setHeader('Content-Type', contentType);

    // Stream the image data efficiently
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);

    readStream.on('error', (error: any) => {
      console.error('Error reading image file:', error);
      res.status(500).send('Internal server error');
    });
  } catch (error) {
    console.error('Error serving image:', error);
    res.status(500).send('Internal server error');
  }
});




export default app;
