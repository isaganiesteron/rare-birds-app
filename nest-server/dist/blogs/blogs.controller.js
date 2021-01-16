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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const blogs_service_1 = require("./blogs.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let BlogController = class BlogController {
    constructor(BlogsService) {
        this.BlogsService = BlogsService;
    }
    addBlog(title, status, views, content, publishedAt) {
        return this.BlogsService.addBlog(title, status, views, content, publishedAt);
    }
    getAllBlogs(req) {
        return this.BlogsService.getAllBlogs(req);
    }
    getBlog(role) {
        return this.BlogsService.getBlog(role);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body('title')), __param(1, common_1.Body('status')), __param(2, common_1.Body('views')), __param(3, common_1.Body('content')), __param(4, common_1.Body('publishedAt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Date]),
    __metadata("design:returntype", Object)
], BlogController.prototype, "addBlog", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], BlogController.prototype, "getAllBlogs", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('/:role'),
    __param(0, common_1.Param('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BlogController.prototype, "getBlog", null);
BlogController = __decorate([
    common_1.Controller('blog'),
    __metadata("design:paramtypes", [blogs_service_1.BlogsService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blogs.controller.js.map