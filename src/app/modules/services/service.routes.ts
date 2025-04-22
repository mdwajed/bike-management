import express from "express";
import { ServiceController } from "./service.controller";

const router = express.Router();
router.post("/", ServiceController.createService);
router.get("/", ServiceController.getAllServicesRecord);
router.get("/status", ServiceController.getOverdueOrPendingServices);
router.get("/:id", ServiceController.getServiceRecordById);
router.put("/:id/complete", ServiceController.markAsCompleted);
export const ServiceRoutes = router;
