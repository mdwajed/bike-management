"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post("/", service_controller_1.ServiceController.createService);
router.get("/", service_controller_1.ServiceController.getAllServicesRecord);
router.get("/status", service_controller_1.ServiceController.getOverdueOrPendingServices);
router.get("/:id", service_controller_1.ServiceController.getServiceRecordById);
router.put("/:id/complete", service_controller_1.ServiceController.markAsCompleted);
exports.ServiceRoutes = router;
