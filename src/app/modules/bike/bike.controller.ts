import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BikeService } from "./bike.service";

const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.createBike(req.body);
  res.status(201).json({
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getAllBike();
  res.status(200).json({
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getBikeById = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getBikeById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});
export const BikeController = {
  createBike,
  getAllBike,
  getBikeById,
};
