"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const http_status_codes_1 = require("http-status-codes");
const globalError = (err, _req, res, _next) => {
    const statusCode = err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json(Object.assign({ success: false, status: statusCode, message: err.message || "Something went wrong" }, (process.env.NODE_ENV === "development" && { stack: err.stack })));
};
exports.globalError = globalError;
