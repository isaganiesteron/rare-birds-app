"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BlogsService = class BlogsService {
    constructor(blogModel) {
        this.blogModel = blogModel;
        this.blog = [];
    }
    async addBlog(title, status, views, content, publishedAt) {
        const newBlog = new this.blogModel({ title, status, views, content, publishedAt });
        const result = await newBlog.save();
        return result._id;
    }
    async getAllBlogs(user) {
        const allBlogs = this.blogModel.find();
        return allBlogs;
    }
    getBlog(role) {
        let filter = (role == 'admin') ? {} : { status: "published" };
        const someBlogs = this.blogModel.find(filter);
        if (!someBlogs)
            throw new common_1.NotFoundException('No blog found.');
        return someBlogs;
    }
};
BlogsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Blog')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogsService);
exports.BlogsService = BlogsService;
//# sourceMappingURL=blogs.service.js.map