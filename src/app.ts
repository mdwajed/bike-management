import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CustomerRoutes } from "./app/modules/customer/customer.routes";
import { globalError } from "./app/middlewares/error";
import { BikeRoutes } from "./app/modules/bike/bike.routes";
import { ServiceRoutes } from "./app/modules/services/service.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.send({
    message: "Bike Management app is running",
  });
});
app.use("/api/customers", CustomerRoutes);
app.use("/api/bikes", BikeRoutes);
app.use("/api/services", ServiceRoutes);
app.use(globalError);
export default app;
