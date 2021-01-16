import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
export declare class UserController {
    private readonly UsersService;
    private readonly authService;
    constructor(UsersService: UsersService, authService: AuthService);
    login(req: any): Promise<{
        id: any;
        username: any;
        role: any;
        token: string;
    }>;
    registerUser(username: string, password: string, role: string): {};
    getAllUsers(): {};
    getUser(username: string): Promise<import("./users.model").User>;
}
