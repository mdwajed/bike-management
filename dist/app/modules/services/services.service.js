"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const prisma_1 = require("../../../shared/prisma");
const date_fns_1 = require("date-fns");
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.serviceRecord.create({
        data,
    });
});
const getAllServicesRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.serviceRecord.findMany();
});
const getServiceRecordById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
});
const markAsCompleted = (serviceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { completionDate } = data;
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId,
        },
        data: {
            status: "done",
            completionDate: completionDate ? new Date(completionDate) : new Date(),
        },
    });
    return result;
});
const getOverdueOrPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = (0, date_fns_1.subDays)(new Date(), 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
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
});
exports.Services = {
    createService,
    getAllServicesRecord,
    getServiceRecordById,
    markAsCompleted,
    getOverdueOrPendingServices,
};
