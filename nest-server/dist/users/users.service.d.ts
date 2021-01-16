import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    registerUser(username: string, password: string, role: string): Promise<any>;
    getAllUsers(): Promise<User[]>;
    getUser(username: string): Promise<User>;
}
