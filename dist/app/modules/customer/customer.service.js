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
exports.CustomerService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.prisma.customer.create({
        data,
    });
    return customer;
});
const getAllCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.prisma.customer.findMany();
    return customer;
});
const getCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId,
        },
    });
    return result;
});
const updateCustomer = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.update({
        where: {
            customerId,
        },
        data,
    });
    return result;
});
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.delete({
        where: {
            customerId,
        },
    });
    return result;
});
exports.CustomerService = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
