"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const mongoose = require("mongoose");
exports.BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, required: true },
    views: { type: Number, required: true },
    content: { type: String, required: true },
    publishedAt: { type: Date, required: true }
});
//# sourceMappingURL=blogs.model.js.map