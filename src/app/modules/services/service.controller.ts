import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { Services } from "./services.service";

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await Services.createService(req.body);
  res.status(200).json({
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServicesRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await Services.getAllServicesRecord();
  res.status(200).json({
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getServiceRecordById = catchAsync(async (req: Request, res: Response) => {
  const result = await Services.getServiceRecordById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const markAsCompleted = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.id;
  const { completionDate } = req.body;
  const result = await Services.markAsCompleted(serviceId, completionDate);
  res.status(200).json({
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});
const getOverdueOrPendingServices = catchAsync(
  async (req: Request, res: Response) => {
    const result = await Services.getOverdueOrPendingServices();
    res.status(200).json({
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: result,
    });
  }
);
export const ServiceController = {
  createService,
  getAllServicesRecord,
  getServiceRecordById,
  markAsCompleted,
  getOverdueOrPendingServices,
};
