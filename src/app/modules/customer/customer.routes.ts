import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();
router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getAllCustomer);
router.get("/:id", CustomerController.getCustomerById);
router.put("/:id", CustomerController.updateCustomer);
router.delete("/:id", CustomerController.deleteCustomer);
export const CustomerRoutes = router;
