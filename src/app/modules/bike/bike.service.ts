import { prisma } from "../../../shared/prisma";

type TBike = {
  brand: string;
  model: string;
  year: number;
  customerId: string;
};
const createBike = async (data: TBike) => {
  return await prisma.bike.create({ data });
};

const getAllBike = async () => {
  return await prisma.bike.findMany();
};
const getBikeById = async (bikeId: string) => {
  return await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId,
    },
  });
};
export const BikeService = {
  createBike,
  getAllBike,
  getBikeById,
};
