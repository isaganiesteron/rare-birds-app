import { BlogsService } from './blogs.service';
export declare class BlogController {
    private readonly BlogsService;
    constructor(BlogsService: BlogsService);
    addBlog(title: string, status: string, views: number, content: string, publishedAt: Date): {};
    getAllBlogs(req: any): {};
    getBlog(role: string): {};
}
