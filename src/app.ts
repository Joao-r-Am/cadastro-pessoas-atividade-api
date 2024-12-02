import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import { testConnection } from "./models";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import cors from "cors";

const app = express();
const PORT = 3000;
const corsOptional = {
  origin: "http://localhost:4200",
  credentials: true,
};

app.use(cors(corsOptional));
app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "rota não encontrada." });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "erro de server." });
});

app.listen(PORT, () => {
  console.log(`server rodando em http://localhost:${PORT}`);
});

testConnection();

export default app;
