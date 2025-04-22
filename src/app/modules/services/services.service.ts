import { serviceStatus } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { subDays } from "date-fns";
type TService = {
  bikeId: string;
  serviceDate: string;
  description: string;
  status: serviceStatus;
};
const createService = async (data: TService) => {
  return await prisma.serviceRecord.create({
    data,
  });
};
const getAllServicesRecord = async () => {
  return await prisma.serviceRecord.findMany();
};

const getServiceRecordById = async (serviceId: string) => {
  return await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });
};
const markAsCompleted = async (
  serviceId: string,
  data: { completionDate?: string }
) => {
  const { completionDate } = data;
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      status: "done",
      completionDate: completionDate ? new Date(completionDate) : new Date(),
    },
  });
  return result;
};

const getOverdueOrPendingServices = async () => {
  const sevenDaysAgo = subDays(new Date(), 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ["pending", "in_progress"],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });
  return result;
};
export const Services = {
  createService,
  getAllServicesRecord,
  getServiceRecordById,
  markAsCompleted,
  getOverdueOrPendingServices,
};
