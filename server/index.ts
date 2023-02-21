import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";

const PORT = 8000;

express()
  .use(express.json())
  .use(helmet())
  .use(morgan("tiny"))

  .get("/", (req, res) => {
    res.send("HELLO from express + TS");
  })

  .get("/hi", (req, res) => {
    res.send("hi");
  })

  .listen(PORT, () => {
    console.log(`Listening on port ${PORT} ⚡`);
  });
