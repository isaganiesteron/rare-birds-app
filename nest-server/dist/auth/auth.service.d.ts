import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly UsersService;
    private jwtService;
    constructor(UsersService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        id: any;
        username: any;
        role: any;
        token: string;
    }>;
}
