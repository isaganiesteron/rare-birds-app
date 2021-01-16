import { Model } from 'mongoose';
import { Blog } from './blogs.model';
export declare class BlogsService {
    private readonly blogModel;
    private blog;
    constructor(blogModel: Model<Blog>);
    addBlog(title: string, status: string, views: number, content: string, publishedAt: Date): Promise<any>;
    getAllBlogs(user: any): Promise<Blog[]>;
    getBlog(role: string): {};
}
