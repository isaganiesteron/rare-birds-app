"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const blogs_controller_1 = require("./blogs/blogs.controller");
const blogs_service_1 = require("./blogs/blogs.service");
const auth_service_1 = require("./auth/auth.service");
const local_strategy_1 = require("./auth/local.strategy");
const jwt_strategy_1 = require("./auth/jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./auth/constants");
const users_model_1 = require("./users/users.model");
const blogs_model_1 = require("./blogs/blogs.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/nest-server'),
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: users_model_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Blog', schema: blogs_model_1.BlogSchema }]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        controllers: [users_controller_1.UserController, blogs_controller_1.BlogController],
        providers: [users_service_1.UsersService, blogs_service_1.BlogsService, auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map