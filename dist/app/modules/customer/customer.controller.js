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
exports.CustomerController = void 0;
const customer_service_1 = require("./customer.service");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_service_1.CustomerService.createCustomer(req.body);
    res.status(201).json({
        success: true,
        message: "Customer created successfully",
        data: customer,
    });
}));
const getAllCustomer = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.CustomerService.getAllCustomer();
    res.status(200).json({
        success: true,
        message: "All Customers get successfully",
        data: result,
    });
}));
const getCustomerById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.CustomerService.getCustomerById(id);
    res.status(200).json({
        success: true,
        message: "Customer fetched successfully",
        data: result,
    });
}));
const updateCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield customer_service_1.CustomerService.updateCustomer(id, req.body);
    res.status(200).json({
        success: true,
        message: "Customer updated successfully",
        data: result,
    });
}));
const deleteCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield customer_service_1.CustomerService.deleteCustomer(id);
    res.status(200).json({
        success: true,
        message: "Customer deleted successfully",
    });
}));
exports.CustomerController = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
