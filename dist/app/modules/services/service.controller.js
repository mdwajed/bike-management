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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const services_service_1 = require("./services.service");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.Services.createService(req.body);
    res.status(200).json({
        success: true,
        message: "Service record created successfully",
        data: result,
    });
}));
const getAllServicesRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.Services.getAllServicesRecord();
    res.status(200).json({
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getServiceRecordById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.Services.getServiceRecordById(req.params.id);
    res.status(200).json({
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
}));
const markAsCompleted = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.id;
    const { completionDate } = req.body;
    const result = yield services_service_1.Services.markAsCompleted(serviceId, completionDate);
    res.status(200).json({
        success: true,
        message: "Service marked as completed",
        data: result,
    });
}));
const getOverdueOrPendingServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_service_1.Services.getOverdueOrPendingServices();
    res.status(200).json({
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
}));
exports.ServiceController = {
    createService,
    getAllServicesRecord,
    getServiceRecordById,
    markAsCompleted,
    getOverdueOrPendingServices,
};
