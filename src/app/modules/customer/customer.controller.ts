import { Request, Response } from "express";
import { CustomerService } from "./customer.service";
import catchAsync from "../../../shared/catchAsync";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const customer = await CustomerService.createCustomer(req.body);
  res.status(201).json({
    success: true,
    message: "Customer created successfully",
    data: customer,
  });
});

const getAllCustomer = catchAsync(async (_req: Request, res: Response) => {
  const result = await CustomerService.getAllCustomer();
  res.status(200).json({
    success: true,
    message: "All Customers get successfully",
    data: result,
  });
});
const getCustomerById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.getCustomerById(id);
  res.status(200).json({
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomer(id, req.body);
  res.status(200).json({
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await CustomerService.deleteCustomer(id);

  res.status(200).json({
    success: true,
    message: "Customer deleted successfully",
  });
});
export const CustomerController = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
